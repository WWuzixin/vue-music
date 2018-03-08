<template>
  <div class="box">
    <div class="box-circle">
      <div class="box-img">
        <img src="/static/images/demo9.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.box
  position: relative

.box-circle
  width: 3rem
  height: 3rem
  background: rgb(51,51,51)
  border-radius: 50%
  margin: 0 auto
  animation: goRotate 16s linear infinite 0.1s

@keyframes goRotate
  0%
    transform: rotate(0deg)

  50%
    transform: rotate(180deg)

  100%
    transform: rotate(360deg)

.box-img
  width: 2rem
  height: 2rem
  border-radius: 50%
  background: #ffffff
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
  overflow: hidden
  & img
    width: 100%
    height: 100%
</style>
