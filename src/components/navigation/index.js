import logo from '/src/assets/爱因斯坦搞怪.gif';

export default {
    name: 'navigation',
    data() {
        return {
            items: ['btn1', 'btn2', 'btn3']
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'nav'
        }, [
            this.render_logo(h),
            this.items.map(item => this.render_item(h, item))
        ])
    },
    methods: {
        render_logo(h) {
            return h('div', {}, [
                h('img', {
                    staticClass: 'logo',
                    attrs:{
                        src: logo,
                    },

                })
            ])
        },
        render_item(h, item) {
            return h('div', {}, [item])
        }
    }
}
