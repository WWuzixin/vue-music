<template>
<div>
  <Header></Header>
  <slidebar></slidebar>
  <div class="default-list">
    <div class="default-items"><i class="info icon-music"></i>
      <router-link tag="p" to="">我的音乐 <i class="icon-volume-medium info1-1"></i></router-link>
    </div>
    <div class="default-items"><i class="info icon-zuijinplay"></i>
      <router-link tag="p" to="">最近播放</router-link>
    </div>
    <div class="default-items"><i class="info icon-diantai"></i>
      <router-link tag="p" to="">我的电台</router-link>
    </div>
    <div class="default-items"><i class="info icon-collect"></i>
      <router-link tag="p" to="">我的收藏</router-link>
    </div>
  </div>
  <div class="my-list">
    <div class="title">
      <p @click="isShow1 = !isShow1"><i class="icon-down" :class="{'icon-rotate':!isShow1}"></i>我创建的歌单</p><i class="icon-setting" @click="isShow3 = true"></i>
    </div>
    <div class="content" v-show="isShow1">
      <div class="items" v-for="item in data1" @click="showList(item)">
        <div class="item-left"><img src="" alt=""></div>
        <div class="item-right">
          <p class="ir-first">{{item.name}}</p>
          <p class="ir-second">{{item.num}}首</p>
        </div>
      </div>
    </div>
    <div class="title">
      <p @click="isShow2 = !isShow2"><i class="icon-down" :class="{'icon-rotate':!isShow2}"></i>我收藏的歌单</p><i class="icon-setting" @click="isShow3 = true"></i>
    </div>
    <div class="content" v-show="isShow2">
      <div class="items" v-for="item in data2">
        <div class="item-left"><img src="" alt=""></div>
        <div class="item-right">
          <p class="ir-first">{{item.name}}</p>
          <p class="ir-second">{{item.num}}首</p>
        </div>
      </div>
    </div>
    <div class="edit-list">
      <div class="edit-wrap" :class="{'isShow':isShow3}">
        <h2>我创建的歌单(2)</h2>
        <div class="edit-items"><i class="icon-add"></i>
          <p>新建歌单</p>
        </div>
        <div class="edit-items"><i class="icon-delete"></i>
          <p>删除</p>
        </div>
      </div>
      <div class="mask" v-show="isShow3" @click="isShow3 = !isShow3"></div>
    </div>
  </div>
  <songlist></songlist>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import player from '@/components/player/player'
import slidebar from '@/components/slidebar/slidebar'
import songlist from '@/components/song-list/song-list'
import bus from '../../assets/bus'

export default {
  data () {
    return {
      data1: [{
        name: '我喜欢的音乐',
        num: 30
      }, {
        name: 'Taylor Swift',
        num: 30
      }, {
        name: '【电音】抖腿必备',
        num: 10
      }, {
        name: '周氏情歌（沉郁）',
        num: 50
      }],
      data2: [{
        name: 'MJ JB 断眉 戳爷 黄老板 萌徳 霉霉...',
        num: 213
      }, {
        name: 'Taylor Swift六连专歌曲',
        num: 110
      }, {
        name: '当周杰伦还仅仅是周杰伦的时候',
        num: 22
      }, {
        name: '超美侧颜J Fla翻唱集',
        num: 38
      }],
      isShow1: true,
      isShow2: true,
      isShow3: false
    }
  },
  methods: {
    showList (item) {
      let arr = [item.name, 'true']
      bus.$emit('showList', arr)
    }
  },
  components: {
    Header,
    Footer,
    player,
    slidebar,
    songlist
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

p
  margin: 0
.my-list
  margin-bottom: .5rem
.title
  font-size: .12rem
  line-height: .25rem
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 .15rem
  background: #e1e1e1
  color: #666
  p
    display: flex
    align-items: center
  .icon-down
    font-size: .14rem
    margin-right: .1rem
    transition: all .5s

  .icon-setting
    font-size: .16rem

.icon-rotate
  transform: rotate(-90deg)
.items
  padding: .05rem
  padding-right: 0
  height: .5rem
  display: flex
  justify-content: space-between
  &:last-child
    padding-bottom: 0
.item-left
  width: .5rem
  height: .5rem
  background: #000000
  border-radius: 2px

.item-right
  width: 3.1rem
  display: flex
  flex-direction: column
  justify-content: center
  border-bottom: 1px solid #e5e7e8
  .ir-first
    color: #666
    font-size: .14rem
    text-align: left
    margin-bottom: .05rem
  .ir-second
    color: #333
    font-size: .12rem
    text-align: left

.edit-wrap
  width: 100%
  background: #ffffff
  position: fixed
  bottom: 0
  left: 0
  z-index: 25
  transition: all .5s
  transform: translateY(100%)
  -webkit-transform: translateY(100%)
  h2
    font-size: .14rem
    color: #666
    font-weight: normal
    margin: 0
    padding: .05rem .2rem
    text-align: left

.isShow
  transform: translateY(0)
  -webkit-transform: translateY(0%)

.mask
  background: rgba(51,51,51,.4)
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 10

.edit-items
  font-size: .15rem
  color: #333
  display: flex
  align-items: center
  flex-flow: row
  padding: 0 .2rem
  font-weight: 100
  height: .4rem
  .icon-add, .icon-delete
    font-size: .18rem
    color: #c62f2f
    margin-right: .15rem
</style>
