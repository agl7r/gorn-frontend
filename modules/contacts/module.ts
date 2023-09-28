const routes = [
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('./src/pages/ContactsPage.vue'),
    },
]

export default {
    routes
}
