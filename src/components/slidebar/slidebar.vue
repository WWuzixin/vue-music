<template>
  <div class="slidebar">
    <div class="menu-mask">
      <div class="bg-img">
        <div class="avatar"><img src="" alt=""></div>
        <div class="person-info">
          <div class="name">嘎吱脆 <img src="/src/assets/images/vip.png" alt=""> <span class="leval">Lv.8</span></div>
          <span class="sign"><i class="icon-coin"></i>签到</span>
        </div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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

.bg-img
  width: 100%
  height: 1.7rem
  background: #000000
  -webkit-background-size: 100% 100%
  background-size: 100% 100%

.avatar
  width: .56rem
  height: .56rem
  border-radius: 50%
  overflow: hidden
  display: flex
  align-items: center
  background: #c62f2f
  img
    width: 100%
    height: 100%

.person-info
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 .15rem
  background: #c62f2f

.name
  font-size: .16rem
  color: #fafafa
  display: flex
  flex-flow: row
  align-items: center
  img
    width: .2rem
    height: .2rem
  .leval
    font-size: .14rem
    border-radius: .06rem
    border: 1px solid #fafafa
    padding: 0 .02rem
    line-height: .2rem

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
</style>
