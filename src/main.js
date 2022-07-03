import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/main.scss';
import {library} from '@fortawesome/fontawesome-svg-core'
import AsyncComputed from 'vue-async-computed';

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {fas} from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false


/* add icons to the library */
library.add(fas)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(AsyncComputed)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
