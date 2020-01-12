import { html, HtmlTemplate } from '../../components/common/template'

export default (contents: string, footer: HtmlTemplate) => html`
    <div class="contentarea">
        ${contents}
        ${footer}
    </div>`