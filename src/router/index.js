import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '../views/layout'
import radioAndCheckbox from '../views/demo/radioAndCheckbox'
import index from '../views/demo/index'
import radio from '../views/demo/radioAndCheckbox'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'layout',
        component: layout,
        children: [{
            path: '/index',
            name: 'index',
            component: index
        }, {
            path: '/radio',
            name: 'radio',
            component: radio
        }]
    }]
})