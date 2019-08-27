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
};

export default config;
