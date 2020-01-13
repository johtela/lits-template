import { html } from './common/template'
import { DefaultFrontMatter } from '../src/front-matter'
import { Toc, pageTitle, relLink } from '../src/toc'
import { navbar } from './navbar/navbar-temp'
import { navItems } from './nav-items'
import layout from './layout/layout-temp'

export default (fm: DefaultFrontMatter, toc: Toc, contents: string, styles: string,
    scripts: string, relFileName: string) => html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${fm.projectName}${pageTitle(toc, relFileName)}</title>
    <link rel="icon" type="image/icon" href="${relLink(relFileName, 
        "images/favicon.png")}" />
    <link rel="stylesheet" href="${relLink(relFileName, "css/main.css")}" />
    ${styles}
    ${fm.useMath ? 
        `<link rel="stylesheet" href="${fm.katexCdn}">` :
        ''}
</head>
<body>
    ${navbar([...navItems(fm, toc, relFileName)])}
    ${layout(fm, toc, contents, relFileName)}
    <script src="${relLink(relFileName, "js/main.js")}"></script>
    ${scripts}
</body>
</html>`