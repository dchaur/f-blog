import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'lrvTnk',
    tokenStore: ['localStorage'],
    rolesVar: 'role',
    registerData: { url: 'auth/register', method: 'POST', redirect: '/login' },
    loginData: {
        url: '/api/auth/login',
        method: 'POST',
        redirect: '',
        fetchUser: true
    },
    logoutData: {
        url: '/api/auth/logout',
        method: 'POST',
        redirect: '/',
        makeRequest: true
    },
    fetchData: { url: 'auth/admin', method: 'GET', enabled: true },
    refreshData: { url: 'auth/refresh', method: 'GET', enabled: true, interval: 30 }
};

export default config;
