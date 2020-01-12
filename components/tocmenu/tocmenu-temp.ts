import { html } from '../../components/common/template'
import { Toc, TocEntry } from '../../src/toc'
import { DefaultFrontMatter } from '../../src/front-matter';

const tocTitle = (entry: TocEntry) =>
    entry.desc ? 
        `<span data-toggle="tooltip" data-title="${entry.desc}">${entry.page}</span>` :
        entry.page

const tocEntry = (entry: TocEntry, relFileName: string) => html`
    <li>
        ${entry.subs ? '<button class="accordion">' : ''}
        ${entry.file ? 
            `<a href="/${entry.file}"${relFileName == entry.file ? ' class="highlight"' : ''}>${tocTitle(entry)} </a>` :
            entry.page}
        ${entry.subs ? 
            html`</button>
            ${tocSection(entry.subs, relFileName)}` : 
            ''}
    </li>`

const tocSection = (pages: Toc, relFileName: string) => html`
    <ul>
        ${pages.map(page => tocEntry(page, relFileName))}
    </ul>`

export default (fm: DefaultFrontMatter, toc: Toc, relFileName: string) => html`
    <div class="tocmenu">
        <h3>${fm.tocMenuHeader}</h3>
        ${tocSection(toc, relFileName)}
    </div>`