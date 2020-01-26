import tippy from 'tippy.js'
import './tooltips.less'

// let body = document.getElementsByTagName('body')[0]
document.querySelectorAll('[data-toggle="tooltip"]').forEach(elem => {
    tippy(elem, {
        content: elem.getAttribute("data-title"),
        placement: 'top',
        maxWidth: window.innerWidth * 0.8,
        arrow: true,
        theme: 'custom',
        boundary: "window",
        delay: 500,
        allowHTML: false
    })
})