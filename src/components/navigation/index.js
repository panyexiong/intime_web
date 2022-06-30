import ayst1 from '/src/assets/ayst1.png';
// import ayst3 from '/src/assets/ayst3.png';
import ayst5 from '/src/assets/ayst5.png';

export default {
    name: 'navigation',
    computed:{
        logo_img(){
            return this.show_items ? ayst5 : ayst1;
        }
    },
    data() {
        return {
            items: ['money', 'time', 'others'],
            show_items: false,
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'nav',
            on: {
                mouseenter: () => this.show_items = true,
                mouseleave: () => this.show_items = false,
            }
        }, [
            
            this.render_logo(h),
            
            h('transition',{
                props: {
                    name: 'items-transition',
                    mode: "out-in",
                }
            },[
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
                this.items.map(item => this.render_item(h, item))
            ])
        },
        render_item(h, item) {
            return h('div', {
                staticClass: 'nav__item'
            }, [
                item
            ])
        }
    }
}
