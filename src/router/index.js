import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/template.vue'
import Index from '@/pages/Index/template.vue'
import Create from '@/pages/Create/template.vue'
import Edit from '@/pages/Edit/template.vue'
import My from '@/pages/My/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
import Detail from '@/pages/Detail/template.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    },
  ]
})
