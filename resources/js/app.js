import './bootstrap';
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import VueAuth from '@websanova/vue-auth';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import auth from '@/js/auth';
import VueAxios from 'vue-axios';
import axios from 'axios';
import colors from 'vuetify/lib/util/colors';

import Routes from '@/js/routes';
import App from '@/js/views/App';

// Filters
import DateFilter from '@/js/filters/Date';
import TruncateFilter from '@/js/filters/Truncate';
import TailFilter from '@/js/filters/Tail';

Vue.router = Routes;
Vue.use(VueRouter);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(VueAuth, auth);

// Register filters
Vue.filter('date', DateFilter);
Vue.filter('truncate', TruncateFilter);
Vue.filter('tailing', TailFilter);

const vuetifyProps = {
    theme: {
        dark: true,
    }
};

const router = new VueRouter({
    Routes
})
Vue.router = router

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
    vuetify: new Vuetify(vuetifyProps),
});

export default app;
