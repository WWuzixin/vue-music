<template>
  <div>
    <Header></Header>
    <slidebar></slidebar>
    <div class="default-list">
      <div class="default-items"><i class="info icon-music"></i><router-link tag="p" to="">我的音乐 <i class="icon-volume-medium info1-1"></i></router-link></div>
      <div class="default-items"><i class="info icon-zuijinplay"></i><router-link tag="p" to="">最近播放</router-link></div>
      <div class="default-items"><i class="info icon-diantai"></i><router-link tag="p" to="">我的电台</router-link></div>
      <div class="default-items"><i class="info icon-collect"></i><router-link tag="p" to="">我的收藏</router-link></div>
    </div>
    <myList></myList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import myList from '@/components/my-songlist/my-songlist'
import slidebar from '@/components/slidebar/slidebar'

export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer,
    myList,
    slidebar
  }
}
</script>

<style scoped lang="sass">
.default-list
  margin-top: .45rem

.default-items
  display: flex
  align-items: center
  flex-flow: row
  height: .5rem
  padding: 0 .15rem
  .info
    font-size: .2rem
    color: #c62f2f
  p
    font-size: .15rem
    color: #333
    margin: 0 0 0 .2rem
    width: 100%
    line-height: .5rem
    border-bottom: 1px solid #e5e7e8
    display: flex
    justify-content: space-between
    align-items: center
    .info1-1
      font-size: .16rem
      color: #c62f2f

</style>
