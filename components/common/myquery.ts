export const expanded = "expanded"
export const collapsed = "collapsed"
export const accordion = "accordion"
export const hamburger = "hamburger"
export const navbar = "navbar"
export const scrollingarea = "scrollingarea"
export const closepopups = "closepopups"
export const infobox = "info-box"

export type Elem = HTMLElement | HTMLCollectionOf<Element>

export function firstElementWithStyle(className: string, 
    parent: Element | Document = document): HTMLElement {
    let res = parent.getElementsByClassName(className)[0] as HTMLElement
    if (!res)
        throw ReferenceError(`Cannot find element with class "${className}".`)
    return res
}

export function elementsWithStyle(className: string, 
    parent: Element | Document = document): HTMLCollectionOf<Element> {
    return parent.getElementsByClassName(className)
}

export function isHTMLCollection(elem: Elem):
    elem is HTMLCollectionOf<Element> {
    return (<HTMLCollectionOf<Element>>elem).length !== undefined
}

export function each(elem: Elem, action: (e: Element) => void) {
    if (isHTMLCollection(elem))
        for (let i = 0; i < elem.length; ++i)
            action(elem[i])
    else
        action(elem)
}

export function create<K extends keyof HTMLElementTagNameMap>(tag: K, 
    children: Elem | string = null): HTMLElement {
    let elem = document.createElement(tag)
    if (children) {
        if (typeof (children) === "string")
            elem.appendChild(document.createTextNode(children))
        else
            each(children, c => elem.appendChild(c))
        }
    return elem
}

export function attr(elem: Elem, attrName: string, attrValue: string): Elem {
    each(elem, e => e.setAttribute(attrName, attrValue))
    return elem
}