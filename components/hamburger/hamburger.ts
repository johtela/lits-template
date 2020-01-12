import "./hamburger.less";
import * as $ from "../../components/common/myquery";
import { toggleClassOnClick } from "../../components/common/popups";

$.each($.elementsWithStyle("hamburger"), hamb =>
    toggleClassOnClick(hamb as HTMLElement, "open"));