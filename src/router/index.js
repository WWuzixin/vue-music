import Vue from 'vue'
import Router from 'vue-router'
import player from '@/components/HelloWorld'
import mymusic from '@/view/mymusic/mymusic'
import findmusic from '@/view/findmusic/findmusic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mymusic',
      component: mymusic,
      redirect: '/mymusic'
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
    },
    {
      path: '/player',
      name: 'player',
      component: player
    }
  ]
})
