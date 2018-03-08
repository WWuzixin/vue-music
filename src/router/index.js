import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/HelloWorld'
import mymusic from '@/view/mymusic/mymusic'
import findmusic from '@/view/findmusic/findmusic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/findmusic',
      name: 'findmusic',
      component: findmusic
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: mymusic
    }
  ]
})
