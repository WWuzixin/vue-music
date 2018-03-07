<template>
<div>
  <Header></Header>
  <slidebar></slidebar>
  <!-- 上方tab -->
  <div class="tabtop">
    <router-link to="/">音乐</router-link>
    <router-link to="/regist">视频</router-link>
    <router-link to="/login">电台</router-link>
  </div>
  <!-- 轮播图 -->
  <div class="swiper-container" style="margin-top: .8rem">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="width:100%;height:1.5rem;border: 2px solid red"></div>
    </div>
  </div>
  <!-- 中间tab -->
  <div class="tabbottom">
    <router-link to="" tag="div" class="tb-item" v-for="item in tabB">
      <span class="outside-circle" style="position:relative">
          <i class="icon-info" :class="item.className"></i>
          <span style="position:absolute;left: 50%;top: 50%;transform:translate(-50%,-20%);color:#6c2f2f">{{item.date}}</span>
        </span> {{item.title}}
    </router-link>
  </div>

  <div class="list-wrap">
    <div class="list-items">
      <h2 class="li-title">推荐歌单<i class="icon-right"></i></h2>
      <div class="li-items-content">
        <router-link to="" tag="div" class="item-wrap" v-for="item in songs">
          <div class="song-img">
            <div class="listen">
              <i class="icon-erji"></i>{{item.num}}
            </div>
          </div>
          <p class="song-title">{{item.title}}</p>
        </router-link>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import slidebar from '@/components/slidebar/slidebar'
export default {
  data () {
    return {
      tabB: [{
        className: 'icon-fm',
        title: '私人FM'
      }, {
        className: 'icon-date',
        title: '每日推荐',
        date: 0
      }, {
        className: 'icon-erji',
        title: '歌单'
      }, {
        className: 'icon-rank-list',
        title: '排行榜'
      }],
      songs: [{
        title: '【作业】工作 自习 提高效率歌单',
        num: '470万'
      }, {
        title: '品味时光：滚石唱片金曲精选',
        num: '77万'
      }, {
        title: 'EDM|能柔能炸的R3hab',
        num: '27万'
      }, {
        title: '「电子」你从未听过的100首臻美电音',
        num: '1134万'
      }, {
        title: '【 2017 YouTube收听量最高的欧美歌曲 】',
        num: '768万'
      }, {
        title: '【超燃BGM】听完你就五杀了',
        num: '964万'
      }]
    }
  },

  created () {
    let date = new Date().getDate()
    this.tabB[1].date = date
  },

  components: {
    Header,
    slidebar,
    Footer
  }
}
</script>

<style lang="sass" scoped>
.tabtop
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: .45rem
  height: .35rem
  position: fixed
  top: 0
  width: 70%
  padding: 0 15%
  background: #ffffff
  z-index: 10
  a
    text-decoration: none
    color: #232927
    font-size: .15rem
    border-bottom: 2px solid #ffffff
    line-height: .35rem
    padding: 0 .05rem
  .router-link-active
    color: #c62f2f
    border-bottom: 2px solid #c62f2f

.tabbottom
  display: flex
  justify-content: space-between
  align-items: center
  padding: .1rem .15rem
  border-bottom: .01rem solid #e5e7e8

.tb-item
  display: flex
  flex-direction: column
  font-size: .14rem

.outside-circle
  width: .5rem
  height: .5rem
  border: .01rem solid #c62f2f
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: .05rem
  .icon-info
    font-size: .30rem
    color: #c62f2f

.list-wrap
  width: 100%
  margin-bottom: .5rem

.li-title
  font-size: .16rem
  color: #232729
  font-weight: normal
  text-align: left
  padding-left: .1rem
  display: flex
  align-items: center
  border-left: .02rem solid #c62f2f

.li-items-content
  display: flex
  flex-wrap: row
  flex-flow: wrap

.item-wrap
  font-size: .14rem
  color: #232729
  width: 32%
  margin-bottom: .05rem
  &:nth-child(2), &:nth-child(5)
    margin: 0 2%
  .song-title
    width: 1.23rem
    text-align: left
    overflow : hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical

.song-img
  width: 1.23rem
  height: 1.23rem
  position: relative
  background: #000
  color: #ffffff
  .listen
    font-size: .12rem
    text-align: right
    padding-top: .03rem
    padding-right: .06rem
    .icon-erji
      margin-right: .03rem
</style>
