import os
import re

def main():
    css_path = os.path.join('src', 'index.css')
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()

    # Define the sections and their identifiers
    sections = {
        'Navbar': r'/\* ═══════════════════════════════════════════\s*1\. NAVBAR\s*═══════════════════════════════════════════ \*/',
        'Hero': r'/\* ═══════════════════════════════════════════\s*2\. HERO SECTION\s*═══════════════════════════════════════════ \*/',
        'Stats': r'/\* ═══════════════════════════════════════════\s*CERTIFICATIONS BANNER\s*═══════════════════════════════════════════ \*/',
        'About': r'/\* ═══════════════════════════════════════════\s*3\. ABOUT US SECTION\s*═══════════════════════════════════════════ \*/',
        'Clients': r'/\* ═══════════════════════════════════════════\s*4\. CLIENTS SECTION\s*═══════════════════════════════════════════ \*/',
        'Products': r'/\* ═══════════════════════════════════════════\s*5\. PRODUCTS SECTION\s*═══════════════════════════════════════════ \*/',
        'Equipment': r'/\* ═══════════════════════════════════════════\s*6\. EQUIPMENT SECTION\s*═══════════════════════════════════════════ \*/',
        'Gallery': r'/\* ═══════════════════════════════════════════\s*7\. GALLERY SECTION\s*═══════════════════════════════════════════ \*/',
        'Certifications': r'/\* ═══════════════════════════════════════════\s*8\. CERTIFICATIONS SECTION\s*═══════════════════════════════════════════ \*/',
        'Contact': r'/\* ═══════════════════════════════════════════\s*9\. CONTACT SECTION\s*═══════════════════════════════════════════ \*/',
        'Footer': r'/\* ═══════════════════════════════════════════\s*10\. FOOTER\s*═══════════════════════════════════════════ \*/',
        'ScrollTop': r'/\* ═══════════════════════════════════════════\s*SCROLL TO TOP BUTTON\s*═══════════════════════════════════════════ \*/',
        'Counter': r'/\* ═══════════════════════════════════════════\s*COUNTER ANIMATION\s*═══════════════════════════════════════════ \*/',
        'Responsive': r'/\* ═══════════════════════════════════════════\s*RESPONSIVE\s*═══════════════════════════════════════════ \*/'
    }

    # Extract positions
    positions = []
    for name, pattern in sections.items():
        match = re.search(pattern, css_content)
        if match:
            positions.append((match.start(), name))
    
    positions.sort(key=lambda x: x[0])
    
    # Map component to its extracted text
    component_css = {}
    
    for i in range(len(positions)):
        start_idx, name = positions[i]
        end_idx = positions[i+1][0] if i+1 < len(positions) else len(css_content)
        component_css[name] = css_content[start_idx:end_idx].strip()
    
    # Global CSS is everything before the first section (Navbar)
    # plus ScrollTop and Counter which we will keep in index.css
    global_css = css_content[:positions[0][0]].strip() + "\n\n"
    if 'ScrollTop' in component_css:
        global_css += component_css['ScrollTop'] + "\n\n"
    if 'Counter' in component_css:
        global_css += component_css['Counter'] + "\n\n"

    # Now let's handle Responsive. We will parse the responsive block manually.
    responsive_css = component_css.get('Responsive', '')
    
    def parse_blocks(css):
        blocks = []
        current_block = ""
        depth = 0
        in_comment = False
        i = 0
        while i < len(css):
            if css[i:i+2] == '/*' and not in_comment:
                in_comment = True
                current_block += css[i:i+2]
                i += 2
                continue
            elif css[i:i+2] == '*/' and in_comment:
                in_comment = False
                current_block += css[i:i+2]
                i += 2
                continue
            else:
                current_block += css[i]
                if not in_comment:
                    if css[i] == '{':
                        depth += 1
                    elif css[i] == '}':
                        depth -= 1
                        if depth == 0:
                            blocks.append(current_block.strip())
                            current_block = ""
            i += 1
        if current_block.strip():
            blocks.append(current_block.strip())
        return blocks

    responsive_blocks = parse_blocks(responsive_css)
    
    import collections
    media_queries_by_component = collections.defaultdict(list)
    global_media_queries = []
    
    def get_target_component(selector):
        sel_lower = selector.lower()
        if 'nav' in sel_lower or 'mobile-overlay' in sel_lower: return 'Navbar'
        if 'hero' in sel_lower: return 'Hero'
        if 'about' in sel_lower or 'plants' in sel_lower: return 'About'
        if 'products' in sel_lower: return 'Products'
        if 'stats' in sel_lower: return 'Stats'
        if 'equipment' in sel_lower or 'capacity' in sel_lower: return 'Equipment'
        if 'gallery' in sel_lower: return 'Gallery'
        if 'cert' in sel_lower: return 'Certifications'
        if 'contact' in sel_lower or 'form' in sel_lower: return 'Contact'
        if 'footer' in sel_lower: return 'Footer'
        if 'client' in sel_lower: return 'Clients'
        return 'Global'

    # Process each @media block
    for block in responsive_blocks:
        if not block.startswith('@media'):
            continue
        # Extract the condition and the inner content
        match = re.match(r'(@media[^{]+)\{(.*)\}$', block, re.DOTALL)
        if match:
            condition = match.group(1).strip()
            inner = match.group(2).strip()
            
            # Extract inner rules
            inner_rules = parse_blocks(inner)
            
            comp_rules = collections.defaultdict(list)
            for rule in inner_rules:
                if not rule.strip(): continue
                # Find selector
                sel_match = re.match(r'^([^{]+)\{', rule)
                if sel_match:
                    selector = sel_match.group(1).strip()
                    comp = get_target_component(selector)
                    comp_rules[comp].append(rule)
                else:
                    comp_rules['Global'].append(rule)
            
            for comp, rules in comp_rules.items():
                if comp == 'Global':
                    global_media_queries.append(f"{condition} {{\n  " + "\n  ".join(rules) + "\n}")
                else:
                    media_queries_by_component[comp].append(f"{condition} {{\n  " + "\n  ".join(rules) + "\n}")
        else:
            global_media_queries.append(block)

    # Write component CSS files
    for comp in ['Navbar', 'Hero', 'Stats', 'About', 'Clients', 'Products', 'Equipment', 'Gallery', 'Certifications', 'Contact', 'Footer']:
        if comp in component_css:
            content = component_css[comp] + "\n\n"
            if comp in media_queries_by_component:
                content += "\n\n/* ═══════════════════════════════════════════\n   RESPONSIVE\n   ═══════════════════════════════════════════ */\n\n"
                content += "\n\n".join(media_queries_by_component[comp])
            
            # Clean up the large comment banner to a simpler one
            content = re.sub(r'/\* ═══════════════════════════════════════════.*?\*/', f'/* {comp} Styles */', content, count=1, flags=re.DOTALL)
            
            with open(os.path.join('src', 'components', f'{comp}.css'), 'w', encoding='utf-8') as f:
                f.write(content)
                
    # Update global CSS with the remaining media queries
    global_css += "\n\n/* ═══════════════════════════════════════════\n   GLOBAL RESPONSIVE\n   ═══════════════════════════════════════════ */\n"
    global_css += "\n\n".join(global_media_queries)
    
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(global_css)

    print("Successfully modularized CSS!")

if __name__ == '__main__':
    main()
