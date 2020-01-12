import "./landing.less";
import * as $ from "./common/myquery";

revealInfoBoxes();
createInfoMenu();

function revealInfoBoxes() {
    let arrows = $.elementsWithStyle("scroll-indicator");
    if (!arrows || arrows.length != 2)
        return
    let arrowUp = arrows[0] as HTMLElement;
    let arrowDown = arrows[1] as HTMLElement;
    window.addEventListener("scroll", setBoxOpacities);
    window.addEventListener("resize", setBoxOpacities);
    setBoxOpacities();

    function setBoxOpacities() {
        arrowUp.style.opacity = "0";
        arrowDown.style.opacity = "0";
        for (let ib of $.elementsWithStyle('info-box')) {
            let hib = ib as HTMLElement;
            let scrtop = window.pageYOffset;
            let scrbot = window.pageYOffset + window.innerHeight;
            let marginFactor = 6;
            let top = hib.offsetTop;
            let bot = top + hib.offsetHeight;
            let margin = window.innerHeight / marginFactor;
            if (scrtop == 0) {
                hib.style.opacity = "0";
                arrowDown.style.opacity = "1";
            }
            else if (top < scrbot - margin && bot > scrtop + margin)
                hib.style.opacity = "1";
            else {
                hib.style.opacity = "0";
                if (bot > scrtop && bot < scrtop + margin)
                    arrowUp.style.opacity = "1";
                if (top < scrbot && top > scrtop - margin)
                    arrowDown.style.opacity = "1";
            }
        }
    }
}

function createInfoMenu() {
    let infoArea = $.elementsWithStyle("info-area")[0];
    if (!infoArea)
        return
    let headingOffsets: { heading: HTMLHeadElement, li: HTMLElement }[] = []
    let headings = infoArea.querySelectorAll("h2");
    let menu = $.firstElementWithStyle("info-menu");
    let ul = document.createElement('ul');
    menu.appendChild(ul);
    for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        let link = $.attr($.create("a", heading.textContent), "href",
            "#" + heading.id);
        let li = $.create("li", link);
        ul.appendChild(li)
        headingOffsets[i] = { heading, li }
    }
    window.addEventListener("scroll", () => {
        let pos = window.pageYOffset
        let found = false
        let prev: { heading: HTMLHeadElement, li: HTMLElement } = null
        for (let i = 0; i < headingOffsets.length; i++) {
            let ho = headingOffsets[i]
            ho.li.classList.remove("highlight")
            if (!found && ho.heading.offsetTop > (pos + ho.heading.offsetHeight)) {
                (prev || ho).li.classList.add("highlight")
                found = true
            }
            prev = ho
        }
        if (!found && prev)
            prev.li.classList.add("highlight")
    })
}