import Vue from 'vue'
import Router from 'vue-router'
import songlist from '@/view/song-list/song-list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'songlist',
      component: songlist
    }
  ]
})
