<template>
<div class="footer-wrap">
  <div class="left"><img src="" alt=""></div>
  <div class="center">
    <p class="c-first">一万次悲伤</p>
    <p class="c-second">逃跑计划</p>
  </div>
  <div class="right">
    <div class="play"><i class="icon-play"></i></div>
    <div class="catalog"><i class="icon-list-music"></i></div>
  </div>
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
.footer-wrap
  width: 100%
  height: .45rem
  position: fixed
  bottom: 0
  left: 0
  background: #fefefe
  display: flex
  align-items: center

.left
  width: .36rem
  height: .36rem
  background: #000000
  margin: 0 .05rem

.center
  width: 2.5rem

.c-first
  font-size: .14rem
  color: #333
  text-align: left

.c-second
  font-size: .12rem
  color: #666
  text-align: left

.right
  display: flex
  flex-flow: row
  align-items: center

.play
  width: .25rem
  height: .25rem
  border-radius: 50%
  border: 2px solid #999
  display: flex
  align-items: center
  justify-content: center
  position: relative
  .icon-play
    font-size: .14rem
    position: absolute
    left: 55%
    top: 50%
    transform: translate(-50%,-50%)

.catalog
  width: .25rem
  height: .25rem
  display: flex
  align-items: center
  justify-content: center
  margin-left: .2rem
  .icon-list-music
    font-size: .25rem
</style>
