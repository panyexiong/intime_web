import comp_page_card from "./comp_page_card";

export default {
    name: 'router_page',
    data() {
        return {
            router_category_map: {
                web: {
                    title: 'WEB',
                    pages: [
                        {
                            title: 'MDN',
                            url: 'https://developer.mozilla.org/zh-CN/',
                            domain: 'developer.mozilla.org',
                        },
                        {
                            title: 'flex布局（阮一峰）',
                            url: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html',
                            domain: 'www.ruanyifeng.com',
                        },
                        {
                            title: 'grid布局（阮一峰）',
                            url: 'https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html',
                            domain: 'www.ruanyifeng.com',
                        },
                        {
                            title: '正则表达式工具',
                            url: 'https://regex101.com/',
                            domain: 'https://regex101.com/',
                            icon: 'https://regex101.com/static/assets/favicon.ico',
                        },
                        {
                            title: 'Vue官网',
                            url: 'https://cn.vuejs.org/',
                            domain: 'cn.vuejs.org',
                            icon: 'https://cn.vuejs.org/images/logo.svg',
                        },
                        {
                            title: 'Highcharts',
                            url: 'https://www.highcharts.com.cn/docs',
                            domain: 'www.highcharts.com.cn',
                        },
                        {
                            title: 'fontawesome',
                            url: 'https://fontawesome.com/',
                            domain: 'fontawesome.com',
                        },
                        {
                            title: 'clippy',
                            url: 'https://bennettfeely.com/clippy/',
                            domain: 'bennettfeely.com',
                            icon: 'https://bennettfeely.com/clippy/pics/favicon.png',
                        },{
                            title: 'mycolor space',
                            url: 'https://mycolor.space/',
                            icon: 'https://mycolor.space/favicon5.png',
                            domain: 'mycolor.space',
                        },
                        {
                            title: 'animate',
                            url: 'https://animate.style/',
                            icon: 'https://animate.style/img/favicon.ico',
                            domain: 'animate.style',
                        },
                    ]

                },
                java: {
                    title: 'JAVA',
                },
                Linux: {
                    title: "Linux"
                },
                others: {
                    title: 'others',
                    pages: [
                        {
                            title: 'Baidu',
                            url: 'www.baidu.com',
                            domain: 'www.baidu.com',
                        },
                        {
                            title: 'Bing',
                            url: 'www.bing.com',
                            domain: 'www.bing.com',
                        },
                        {
                            title: 'panyexiong',
                            url: 'www.panyexiong.com',
                            domain: 'www.panyexiong.com'
                        },
                        {
                            title: '百度翻译',
                            url: 'https://fanyi.baidu.com/',
                            domain: 'fanyi.baidu.com'
                        }, {
                            title: 'leetcode',
                            url: 'https://leetcode.cn/',
                            domain: 'leetcode.cn'
                        }, {
                            title: '极客时间',
                            url: 'https://time.geekbang.org/',
                            domain: 'time.geekbang.org',
                            icon: 'https://static001.geekbang.org/static/time/icon/favicon-32x32.jpg',
                        }, {
                            title: 'tldraw',
                            url: 'https://www.tldraw.com/',
                            domain: 'www.tldraw.com/',
                        },

                    ]
                }
            }
        }
    },
    computed: {
        router_category_dict() {
            return Object.keys(this.router_category_map) || [];
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'page_router_flex'
        }, [
            this.router_category_dict.map(item => this.render_page_column(h, item))
        ])
    },
    methods: {
        render_page_column(h, item) {
            return h('div', {
                staticClass: 'page_router_column'
            }, [
                this.render_column_title(h, this.router_category_map[item].title),
                this.render_page_cards(h, this.router_category_map[item].pages || [])
            ])

        },
        render_column_title(h, title) {
            return h('div', {}, [title])
        },
        render_page_cards(h, pages) {
            return h('div', {
                staticClass: 'page_cards'
            }, [
                pages.map(page => this.render_page_card(h, page))
            ])
        },
        render_page_card(h, page) {
            return h(comp_page_card, {
                props: {
                    page: page
                }
            })
        }
    }
}

