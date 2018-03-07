import Vue from 'vue'
import Router from 'vue-router'
import mymusic from '@/view/mymusic/mymusic'
import findmusic from '@/view/findmusic/findmusic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
