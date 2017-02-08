window.onload = function () {
    const nav = document.querySelector('nav');
    const topOfNav = nav.offsetTop;
    window.addEventListener('scroll', function (e) { fixNav(e, nav, topOfNav) });
}

//look how far you scrolled, find out if you are already over the nav -> adjust
function fixNav(e, nav, topOfNav) {
    console.log(window.scrollY, topOfNav);
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else {
        document.body.style.paddingTop = 0 + 'px';
        document.body.classList.remove('fixed-nav');
    }
}