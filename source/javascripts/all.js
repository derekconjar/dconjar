// require bootstrap/affix
// require bootstrap/alert
// require bootstrap/button
// require bootstrap/carousel
//= require bootstrap/collapse
// require bootstrap/dropdown
// require bootstrap/tab
//= require bootstrap/transition
// require bootstrap/scrollspy
// require bootstrap/modal
// require bootstrap/tooltip
// require bootstrap/popover

//= require_tree .

$(document).ready(function () {
    fixSidebarHeight()
    fillWindowHeight()
    loadSearchBox()
    addScrollingCodeBlocks()
    enableDisqusComments()
})

$(window).resize(function () {
    fixSidebarHeight()
    fillWindowHeight()
})