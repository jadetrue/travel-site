import throttle from 'lodash/throttle';

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header");
        this.pageSections = document.querySelectorAll(".page-section");
        this.events();
    }

    events() {
        window.addEventListener("scroll", throttle( () => this.runOnScroll(), 200) )
    }

    runOnScroll() {
        if (window.scrollY > 60) {
            this.siteHeader.classList.add("site-header--dark");
        } else {
            this.siteHeader.classList.remove("site-header--dark");
        }

        this.pageSections.forEach(el => this.calcSection(el));

    }

    calcSection(el) {
        if (window.scrollY + window.innerHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().y / window.innerHeight * 100;
        }
    }

}

export default StickyHeader;