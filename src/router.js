import Vue from 'vue';
import Router from 'vue-router';
import ListView from './views/ListView';
import AddView from './views/AddView';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'list',
            component: ListView
        },
        {
            path: '/add-to-do',
            name: 'add',
            component: AddView
        }
    ]
})
