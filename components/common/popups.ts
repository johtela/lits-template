import * as $ from "./myquery"

let closepopups = $.firstElementWithStyle($.closepopups)

export function popupOnClick(element: HTMLElement, toggle: () => void,
    hide: () => void) {
    element.addEventListener("click", toggle)
    closepopups.addEventListener("mouseup", hide)
    document.addEventListener("keydown", e => {
        if (e.key === "Escape")
            hide()
    })
}

export function toggleClassOnClick(element: HTMLElement, cls: string,
    target: $.Elem = element) {
    popupOnClick(element,
        () => $.each(target, e => e.classList.toggle(cls)),
        () => $.each(target, e => e.classList.remove(cls)))
}