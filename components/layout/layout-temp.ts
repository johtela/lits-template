import { html } from '../../components/common/template'
import { Toc } from '../../src/toc'
import { DefaultFrontMatter } from '../../src/front-matter';
import hamburger from '../../components/hamburger/hamburger-temp'
import tocmenu from '../../components/tocmenu/tocmenu-temp'
import contentarea from '../../components/contentarea/contentarea-temp'
import pagemenu from '../../components/pagemenu/pagemenu-temp'
import footer from '../../components/footer/footer-temp'

export default (fm: DefaultFrontMatter, toc: Toc, contents: string, 
    relFileName: string) => html`
    <div class="layout">
        <div class="sidepane collapsible">
            ${tocmenu(fm, toc, relFileName)}
            ${fm.footerLocation == 'toc-menu' ? footer(fm) : ""}
        </div>
        <div class="sideicon collapsible">
            ${hamburger}
        </div>
        <div class="scrollingarea closepopups">
            ${contentarea(contents, fm.footerLocation == 'content-area' ? footer(fm) : html``)}
            <div class="stickypane">
                ${pagemenu(fm)}
                ${fm.footerLocation == 'page-menu' ? footer(fm) : ""}
            </div>
        </div>
    </div>`
