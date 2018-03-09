<template>
  <div>
    <div class="box-circle" ref="boxCircle">
      <div class="box-img">
        <img src="/static/images/demo9.jpg" alt="">
      </div>
    </div>

    <div class="progress">
      <span>00:00</span>
      <div class="progress-box" ref="progressBox">
        <span class="progress-btn" ref="progressBtn" @mousedown.self="mouseDown" @touchstart.self="mouseDown" @touchmove.self="mouseMove" @touchend.self="mouseEnd"></span>
        <span class="progress-range" ref="progressRange"></span>
      </div>
      <span>4:15</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.range()
  },
  methods: {
    range () {
      let num = 1
      let that = this
      var ranges = setInterval(() => {
        if (num < 100) {
          num ++
          that.$refs.progressRange.style.width = `${num}%`
        } else {
          clearInterval(ranges)
        }
      },1000)
    },
    mouseDown (event) {
      console.log(event)
      console.log("start")
    },
    mouseMove (event) {
      let pageX = event.targetTouches[0].pageX
      let boxLeftX = this.$refs.progressBox.offsetLeft
      let boxWidth = this.$refs.progressBox.offsetWidth
      let progressBtn = this.$refs.progressBtn.clientWidth
      let x = Math.floor((pageX - boxLeftX)/ boxWidth * 100)
      x = x > 100 ? 100 : x
      x = x < 0 ? 0 : x
      let y = `calc(${x}% - progressBtn/2)`
      this.$refs.progressBtn.style.left = y
    },
    mouseEnd (event) {
      console.log("ending")
      console.log(event)
    }
  }
}
</script>

<style lang="sass">
.box-circle
  width: 2.5rem
  height: 2.5rem
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
  width: 1.5rem
  height: 1.5rem
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

.progress
  margin-top: .2rem
  padding: 0 .3rem
  display: flex
  align-items: center
  justify-content: space-between
  span
    font-size: .14rem

.progress-box
  width: 2.2rem
  height: .02rem
  border: .01rem solid #e5e7e8
  position: relative

.progress-btn
  width: .14rem
  height: .14rem
  border-radius: 50%
  background: #333333
  display: block
  position: absolute
  top: 50%
  left: -.07rem
  transform: translateY(-50%)
  z-index: 5

.progress-range
  background: #c62f2f
  height: .02rem
  position: absolute
  top: 0
  left: 0
</style>
