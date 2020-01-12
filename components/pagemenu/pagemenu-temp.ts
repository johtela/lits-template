import { html } from '../../components/common/template'
import { DefaultFrontMatter } from '../../src/front-matter';

export default (fm: DefaultFrontMatter) => html`
    <div class="pagemenu">
        <h3>${fm.pageMenuHeader}</h3>
            <ul class="pagetree">
                
            </ul>
    </div>`