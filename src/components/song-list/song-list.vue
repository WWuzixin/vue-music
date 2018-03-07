<template>
<div class="song-list">
  <div class="song-header">
    <router-link to="" class="sh-left" tag="div"><i class="icon-left"></i></router-link>
    <h2>歌单</h2>
    <div class="sh-right"><i class="icon-list-circle-small"></i></div>
  </div>
  <div class="content">
    <div class="content-t">
      <div class="content-top">
        <div class="song-img"></div>
        <div class="songlist-name">
          <p class="sn-top">我喜欢的音乐</p>
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
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tabB: [{
        title: '收藏',
        className: 'icon-add-project'
      },
      {
        title: '评论',
        className: 'icon-msg'
      },
      {
        title: '分享',
        className: 'icon-music'
      },
      {
        title: '下载',
        className: 'icon-download'
      }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.song-list
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 20

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

.content-t
  background: #000

.content-top
  display: flex
  flex-flow: row
  padding: 0 .15rem 0 .2rem
  padding-top: .45rem

.song-img
  width: 1rem
  height: 1rem
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
  font-size: .14rem
  color: #ffffff
  text-align: left
  font-weight: 100
  display: flex
  align-items: center

.user-avatar
  width: .35rem
  height: .35rem
  border-radius: 50%
  display: flex
  align-items: center
  overflow: hidden
  & img
    width: 100%
    height: 100%

.content-bottom
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 .5rem
  margin-top: .2rem
  padding-bottom: .25rem

.cb-item
  font-size: .14rem
  display: flex
  flex-direction: column
  align-items: center
  color: #ffffff
  & i
    font-size: .2rem
    margin-bottom: .02rem

.content-b
  background: #ffffff

.cb-header
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 .15rem
  height: .3rem

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
  font-size: .15rem
  display: flex
  align-items: center
  color: #333
  .icon-list-music
    font-size: .16rem
</style>
