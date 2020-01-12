import "./tocmenu.less"
import * as $ from "../../components/common/myquery"
import { initAccordions } from "../../components/common/accordion"

let tocmenu = $.elementsWithStyle("tocmenu")[0] as HTMLElement
if (tocmenu)
    initAccordions(tocmenu)