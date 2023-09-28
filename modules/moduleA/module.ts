const routes = [
    {
        path: '/moduleA/first',
        name: 'module_a_first',
        component: () => import('./src/pages/FirstPage.vue'),
    },
    {
        path: '/moduleA/second',
        name: 'module_a_second',
        component: () => import('./src/pages/SecondPage.vue')
    },
]

export default {
    routes
}
