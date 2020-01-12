import { html } from './common/template'
import { DefaultFrontMatter } from '../src/front-matter'
import { Toc, pageTitle } from '../src/toc'
import { navbar } from './navbar/navbar-temp'
import { navItems } from './nav-items'

export default (fm: DefaultFrontMatter, toc: Toc, contents: string, styles: string,
    scripts: string, relFileName: string) => html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${fm.projectName}${pageTitle(toc, relFileName)}</title>
    <link rel="icon" type="image/icon" href="/images/favicon.png" />
    <link rel="stylesheet" href="/css/main.css" />
    ${styles}
    ${fm.useMath ? 
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">' :
        ''}
</head>
<body class="landing">
    <div class="scroll-indicator up"></div>
    <div class="scroll-indicator down"></div>
    ${navbar([...navItems(fm, toc, relFileName)])}
    <div class="closepopups">
        ${contents}
    </div>
    <script src="/js/main.js"></script>
    ${scripts}
</body>
</html>`