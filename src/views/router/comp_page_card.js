export default {
    name: 'page_card',
    props: {
        page: null
    },
    asyncComputed: {},
    computed: {
        icon() {
            return this.page && this.page.icon || `http://${this.page.domain}/favicon.ico`
        }
    },
    render(h) {
        if (!this.page) return;
        return h('div', {
            staticClass: 'page_card',

        }, [
            this.render_web_ico(h),
            this.render_web_title(h),
            h('div', {staticClass: 'col-grow'}),
            this.render_copy_icon(h),
        ])
    },
    methods: {
        render_web_ico(h) {
            return h('img', {
                style: {
                    width: "3rem",
                    height: "3rem",
                    marginRight: '5px',
                },
                attrs: {
                    src: this.icon,
                }
            })

        },
        render_web_title(h) {
            return h('div', {
                staticClass: 'btn__a',
                on: {
                    click: () => window.open(this.page.url.startwiths('http') ? this.page.url : 'http://' + this.page.url, '_blank')
                }
            }, [this.page.title])
        },
        render_copy_icon(h) {
            return h('div', {
                staticClass: 'icon_1x page_card_icon btn_active',
                on: {
                    dblclick: e => {
                        e.preventDefault();
                    },
                    click: () => this.copy(),
                }
            }, [
                h('font-awesome-icon', {
                    props: {
                        icon: 'fa-solid fa-copy'
                    }
                })
            ])
        },
        copy() {
            let inputNode = document.createElement('input')  // 创建input
            inputNode.value = this.page.url// 赋值给 input 值
            document.body.appendChild(inputNode) // 插入进去
            inputNode.select() // 选择对象
            document.execCommand('Copy') // 原生调用执行浏览器复制命令
            inputNode.className = 'oInput'
            inputNode.style.display = 'none' // 隐藏
        }
    }
}
