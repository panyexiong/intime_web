import ayst1 from '/src/assets/ayst1.png';
import ayst5 from '/src/assets/ayst5.png';

export default {
    name: 'navigation',
    computed: {
        logo_img() {
            return this.show_items ? ayst5 : ayst1;
        }
    },
    data() {
        return {
            show_items: false,
        }
    },
    directives: {
        drag: {
            bind(el) {
                el.onmousedown = (e) => {
                    let disX = e.clientX - el.offsetLeft
                    let disY = e.clientY - el.offsetTop
                    document.onmousemove = function (e) {
                        el.style.left = e.clientX - disX + 'px'
                        el.style.top = e.clientY - disY + 'px'
                    }
                    document.onmouseup = function () {
                        document.onmousemove = document.onmouseup = null
                    }
                }

            }
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'nav',
            directives: [{ name: 'drag' }],
            on: {
                mouseenter: () => this.show_items = true,
                mouseleave: () => this.show_items = false,
            }
        }, [
            this.render_logo(h),
            h('transition', {
                props: {
                    name: 'items-transition',
                    mode: "out-in",
                }
            }, [
                this.render_items(h),
            ])

        ])
    },
    methods: {
        render_logo(h) {
            return h('div', {
                staticClass: 'div__img--logo'
            }, [
                h('img', {
                    staticClass: 'logo',
                    attrs: {
                        src: this.logo_img,
                    },
                })
            ])
        },
        render_items(h) {
            if (!this.show_items) return null;
            return h('div', {
                staticClass: 'nav__items'
            }, [
                nav_arr.map(item => this.render_item(h, item))
            ])
        },
        render_item(h, item) {
            return h('div', {
                staticClass: 'nav__item',
                on: {
                    click: () => nav_dict[item].router(this)
                }
            }, [
                // item,
                h('font-awesome-icon',{
                    props: {
                        icon: nav_dict[item].icon
                    }
                })
            ])
        }
    }
}

const nav_dict = {
    'home': {
        router: (vm) => vm.$router.push({name: 'Home'}),
        icon: 'fa-solid fa-house'
    },
    'money': {
        router: (vm) => vm.$router.push({name: 'Money'}),
        icon: 'fa-solid fa-sack-dollar'
    },
    'time': {
        router: (vm) => vm.$router.push({name: 'Time'}),
        icon: 'fa-solid fa-stopwatch-20'
    },
}

const nav_arr = Object.keys(nav_dict);
