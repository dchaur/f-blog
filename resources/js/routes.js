import VueRouter from 'vue-router';

// Components
import ArticleList from '@/js/components/ArticleList';
import Article from '@/js/components/Article';
import Login from '@/js/components/Login';
import ArticleAdminList from '@/js/components/admin/ArticleAdminList';

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes: [{
        path: '/',
        name: 'articles',
        component: ArticleList,
        meta: {
            auth: undefined
        }
    }, {
        path: '/article/:slug',
        name: 'article',
        component: Article,
        meta: {
            auth: undefined
        }
    }, {
        path: '/login',
        name: 'adminLogin',
        component: Login,
        meta: {
            auth: undefined
        }
    }, {
        path: '/admin',
        name: 'admin',
        component: ArticleAdminList,
        meta: {
            auth: true,
            redirect: {
                name: 'adminLogin'
            },
            forbiddenRedirect: '/403'
        }
    }]
});

export default router;
