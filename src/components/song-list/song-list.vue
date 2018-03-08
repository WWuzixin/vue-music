<template>
<div class="song-list" :class="{'show': showList}">
  <div class="song-header">
    <div to="" class="sh-left" @click="showList = !showList"><i class="icon-left"></i></div>
    <h2>歌单</h2>
    <div class="sh-right"><i class="icon-list-circle-small"></i></div>
  </div>
  <div class="content">
    <div class="content-t">
      <div class="content-top">
        <div class="song-img"></div>
        <div class="songlist-name">
          <p class="sn-top">{{songTitle}}</p>
          <p class="sn-bottom">
            <span class="user-avatar">
              <img src="/static/images/demo.jpg" alt="">
            </span>嘎吱脆 <i class="icon-right"></i>
          </p>
        </div>
      </div>
      <div class="content-bottom">
        <div class="cb-item" v-for="item in tabB">
          <i :class="item.className"></i>{{item.title}}
        </div>
      </div>
    </div>
    <div class="content-b">
      <div class="cb-header">
        <div class="cb-header-left">
          <i class="icon-playdetail"></i>
          播放全部<span>(共30首)</span>
        </div>
        <div class= "cb-header-right">
          <i class="icon-list-music"></i>
          多选
        </div>
      </div>
      <div class="cb-content">
        <div class="cb-content-item" v-for="item, index in songlist">
          <span class="cci-left-num">{{index+1}}</span>
          <div class="cci-right">
            <div class="cci-right-name">
              <p>{{item.name}}</p>
              <p>{{item.singer}} - {{item.zhuanji}}</p>
            </div>
            <i class="icon-list-circle-small"></i>
          </div>
        </div>
        <div class="cb-content-item">
          <i class="cci-left-num icon-volume-medium"></i>
          <div class="cci-right">
            <div class="cci-right-name">
              <p>Gotta Have You</p>
              <p>The Weepies - Say I Am You</p>
            </div>
            <i class="icon-list-circle-small"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import bus from '../../assets/bus'
export default {
  data () {
    return {
      tabB: [
        {title: '收藏',className: 'icon-add-project'},
        {title: '评论',className: 'icon-msg'},
        {title: '分享',className: 'icon-music'},
        {title: '下载',className: 'icon-download'}
      ],
      songlist: [
        {name:'Gotta Have You',singer:'The Weepies',zhuanji:'Say I Am You'},
        {name:'你要的全拿走',singer:'胡彦斌',zhuanji: '覅忒好'},
        {name:'Love Paradise',singer:'陈慧琳',zhuanji: 'Stylish Index(第2版)'},
        {name:'Today Was a Fairytale',singer:'Taylor Swift',zhuanji: 'Today Was a Fairytale - Single'},
        {name:'For him',singer:'Troye Sivan/Allday',zhuanji: 'Blue Neighbourhood(Deluxe)'},
        {name:'...Ready For It? (BloodPop® Remix)',singer:'Taylor Swift/BloodPop',zhuanji: '...Ready For It? (BloodPop® Remix)'},
      ],
      showList: false,
      songTitle: '歌单'
    }
  },
  mounted () {
    bus.$on('showList', res => (this.showList = res[1],this.songTitle = res[0]))
  }
}
</script>

<style lang="sass" scoped>
.song-list
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 20
  overflow-x: auto
  overflow-y: scroll
  transition: all .5s
  transform: translateY(100%)

.show
  transform: translateY(0)
.song-header
  padding: 0 .15rem
  height: .45rem
  position: fixed
  top: 0
  left: 0
  right: 0
  display: flex
  justify-content: space-between
  align-items: center
  color: #fff
  z-index: 1
  h2
    font-weight: 100
    font-size: .16rem

.sh-left
  font-size: .22rem

.sh-right
  font-size: .22rem
  transform: rotate(-90deg)

.content
  margin-bottom: .5rem

.content-t
  background: #000

.content-top
  display: flex
  flex-flow: row
  padding: .55rem .15rem 0 .2rem

.song-img
  width: 1.2rem
  height: 1.2rem
  background: red

.songlist-name
  width: 2.2rem
  display: flex
  justify-content: center
  flex-direction: column
  padding-left: .2rem

.sn-top
  font-size: .15rem
  color: #ffffff
  text-align: left
  margin-bottom: .2rem

.sn-bottom
  font-size: .13rem
  color: rgba(255,255,255,.9)
  text-align: left
  font-weight: 100
  display: flex
  align-items: center
  i
    margin-left: .1rem

.user-avatar
  width: .35rem
  height: .35rem
  border-radius: 50%
  display: flex
  align-items: center
  overflow: hidden
  margin-right: .1rem
  & img
    width: 100%
    height: 100%

.content-bottom
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 .3rem
  margin-top: .2rem
  padding-bottom: .15rem

.cb-item
  font-size: .12rem
  display: flex
  flex-direction: column
  align-items: center
  color: #ffffff
  font-weight: 100
  &:first-child
    opacity: .5
  & i
    font-size: .14rem
    font-size: .2rem
    margin-bottom: .02rem

.content-b
  background: #ffffff

.cb-header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 .15rem
  height: .4rem

.cb-header-left
  font-size: .15rem
  font-weight: 100
  color: #333
  display: flex
  align-items: center
  .icon-playdetail
    font-size: .16rem
  span
    font-size: .12rem
    margin-left: .02rem

.cb-header-right
  font-size: .14rem
  display: flex
  align-items: center
  color: #333
  .icon-list-music
    font-size: .16rem

.cb-content-item
  display: flex
  flex-flow: row
  align-items: center

.cci-left-num
  font-size: .16rem
  color: #999
  display: flex
  align-items: center
  justify-content: center
  width: .45rem

.icon-volume-medium
  color: #c62f2f

.cci-right
  text-align: left
  display: flex
  width: 3.15rem
  justify-content: space-between
  border-top: .01rem solid #e5e7e8
  padding: .08rem 0
  padding-right: .15rem

.cci-right-name
  display: flex
  flex-direction: column
  justify-content: center
  width: 80%
  & p:first-child
    font-size: .16rem
    color: #333
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
  & p:last-child
    font-size: .12rem
    color: #999
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden

.icon-list-circle-small
  font-size: .24rem
  transform: rotate(90deg)
  color: #999
</style>
