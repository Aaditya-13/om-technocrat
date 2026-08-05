with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

css_start = 13
css_end = 1700
js_start = 2421
js_end = 2690

with open('css/style.css', 'w', encoding='utf-8') as f:
    f.writelines(lines[css_start:css_end])

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.writelines(lines[js_start:js_end])

new_lines = lines[:css_start] + ['    <link rel="stylesheet" href="css/style.css">\n'] + lines[css_end:js_start] + ['    <script src="js/script.js" defer></script>\n'] + lines[js_end:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
