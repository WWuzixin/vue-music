<template>
<div class="slidebar">
  <div class="menu-mask" :class="{'show':isShow}">
    <div class="bg-img" style="background-image: url('/static/images/demo9.jpg')">
      <div class="user-wrap">
        <div class="avatar"><img src="/static/images/demo.jpg" alt=""></div>
        <div class="person-info">
          <div class="name">嘎吱脆 <img src="/static/images/vip.png" alt=""> <span class="leval">Lv.8</span></div>
          <span class="sign"><i class="icon-coin"></i>签到</span>
        </div>
      </div>
    </div>
    <div class="menu-list">
      <div class="menu-item">
        <div class="item-left">
          <i class="icon-vip icon-info"></i>我的会员
        </div>
        <span class="item-right">未订购</span>
      </div>
      <div class="menu-item">
        <div class="item-left">
          <i class="icon-market icon-info"></i>商城
        </div>
        <span class="item-right"></span>
      </div>
      <div class="menu-item">
        <div class="item-left">
          <i class="icon-message icon-info"></i>我的消息
        </div>
        <span class="item-right"></span>
      </div>
      <div class="spacing"></div>
      <div class="menu-item">
        <div class="item-left">
          <i class="icon-theme icon-info"></i>个性换肤
        </div>
        <span class="item-right">官方红</span>
      </div>
      <div class="menu-item">
        <div class="item-left">
          <i class="icon-set-time icon-info"></i>定时播放
        </div>
        <span class="item-right"></span>
      </div>
      <div class="menu-item">
        <div class="item-left">
          <i class="icon-lock icon-info"></i>音乐闹钟
        </div>
        <span class="item-right"></span>
      </div>
      <div class="menu-item">
        <div class="item-left">
          <i class="icon-cloud icon-info"></i>我的云盘
        </div>
        <span class="item-right"></span>
      </div>
    </div>
  </div>
  <div class="mask" @click.self="isShow = !isShow" v-show="isShow"></div>
</div>
</template>

<script>
import bus from '../../assets/bus'
export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    bus.$on('showMenu', res => (this.isShow = res))
  }
}
</script>

<style scoped lang="sass">
.mask
  position: fixed
  width: 100%
  height: 100%
  top: 0
  left: 0
  background: rgba(51,51,51,.4)
  z-index: 21

.menu-mask
  width: 2.86rem
  height: 100%
  position: fixed
  top: 0
  left: 0
  background: #fff
  z-index: 22
  transition: all .5s
  transform: translateX(-100%)
  -webkit-transform: translateX(-100%)

.show
  transform: translateX(0%)
  -webkit-transform: translateX(0%)

.bg-img
  width: 100%
  height: 1.7rem
  -webkit-background-size: 100% 100%
  background-size: 100% 100%

.user-wrap
  width: 100%
  padding-top: .5rem

.avatar
  width: .56rem
  height: .56rem
  border-radius: 50%
  overflow: hidden
  display: flex
  align-items: center
  margin-bottom: .2rem
  margin-left: .15rem
  img
    width: 100%
    height: 100%

.person-info
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 .15rem

.name
  font-size: .16rem
  color: #fafafa
  display: flex
  flex-flow: row
  align-items: center
  img
    width: .14rem
    height: .14rem
    margin: 0 .1rem
  .leval
    font-size: .10rem
    border-radius: .06rem
    border: 1px solid #fafafa
    padding: 0 .04rem
    line-height: .2rem
    -webkit-transform-origin-x: 0
    -webkit-transform: scale(0.90)

.sign
  display: inline-block
  font-size: .12rem
  color: #fff
  border-radius: .1rem
  border: 1px solid #fafafa
  padding: .02rem .04rem
  .icon-coin
    font-size: .12rem
    margin-right: .02rem

.menu-item
  padding: 0 .15rem
  display: flex
  justify-content: space-between
  align-items: center
  height: .4rem
  color: #666
  font-size: .16rem
  font-weight: 100
  & .icon-info
    font-size: .14rem
    margin-right: .08rem
  .item-right
    font-size: .12rem

.spacing
  width: 100%
  height: .05rem
  background: #efefef
</style>
