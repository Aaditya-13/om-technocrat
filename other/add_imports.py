import os

def main():
    components = ['Navbar', 'Hero', 'Stats', 'About', 'Clients', 'Products', 'Equipment', 'Gallery', 'Certifications', 'Contact', 'Footer']
    for comp in components:
        filepath = os.path.join('src', 'components', f'{comp}.jsx')
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            # Check if already imported
            already_imported = False
            for line in lines:
                if f"import './{comp}.css';" in line or f"import \"./{comp}.css\";" in line:
                    already_imported = True
                    break
            
            if not already_imported:
                last_import_idx = -1
                for i, line in enumerate(lines):
                    if line.startswith('import '):
                        last_import_idx = i
                
                insert_idx = last_import_idx + 1 if last_import_idx != -1 else 0
                lines.insert(insert_idx, f"import './{comp}.css';\n")
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.writelines(lines)
    print("Added imports to components.")

if __name__ == '__main__':
    main()
