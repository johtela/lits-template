import { html } from '../../components/common/template'
import { DefaultFrontMatter } from '../../src/front-matter';

export default (fm: DefaultFrontMatter) => html`
    <div class="footer">
        ${fm.footer}
        <div class="ad">
            Created with <a href="https://github.com/johtela/literatets">LiTScript</a>
        </div>
    </div>
`