import Vue from 'vue'
import Router from 'vue-router'
import songlist from '@/view/song-list/song-list'
import index from '@/view/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/songlist',
      name: 'songlist',
      component: songlist
    }
  ]
})
