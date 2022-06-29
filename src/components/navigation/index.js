import logo from '/src/assets/爱因斯坦搞怪.gif';

export default {
    name: 'navigation',
    data() {
        return {
            items: ['money', 'time', 'others']
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'nav'
        }, [
            this.render_logo(h),
            this.render_items(h),

        ])
    },
    methods: {
        render_logo(h) {
            return h('div', {
                staticClass: 'div__img--logo',
            }, [
                h('img', {
                    staticClass: 'logo',
                    attrs: {
                        src: logo,
                    },
                })
            ])
        },
        render_items(h) {
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
