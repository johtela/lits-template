import "./layout.less"
import * as $ from "../../components/common/myquery"
import { toggleClassOnClick } from "../../components/common/popups"

// Hook hamburger icon to closing side pane.
let layout = $.elementsWithStyle("layout")[0]
if (layout) {
    let hamb = $.firstElementWithStyle("hamburger", layout)
    toggleClassOnClick(hamb, "expanded", 
        layout.getElementsByClassName("collapsible"))
    
    // Set the top offset of sticky pane.
    let stickypane = $.firstElementWithStyle("stickypane")
    let stickyStyle = getComputedStyle(stickypane)
    let initialStickyTop = parseInt(stickyStyle.top, 10)
    setStickyTop()
    window.addEventListener("resize", setStickyTop)    
    
    function setStickyTop() {
        let offs = Math.min((window.innerHeight - stickypane.offsetHeight) / 2, 
            initialStickyTop)
        stickypane.style.top = `${offs}px`
    }
}

