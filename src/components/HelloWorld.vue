<template>
<div>
  <audio autoplay="true" ref="audio" @timeupdate="updateTime" src="http://fs.w.kugou.com/201803192223/0f26966281ad8eff60748cdab1cdbb41/G011/M02/0D/09/q4YBAFT9poiAU8LsADOgUryayxM308.mp3"></audio>
  <div class="content">
    <div class="bgImg" style="background-image: url('/static/images/demo9.jpg')"></div>
    <div style="position: fixed;top: 0;left: 0;width: 100%;z-index: 10">
      <div class="box-circle" ref="boxCircle">
        <div class="box-img">
          <img src="/static/images/demo9.jpg" alt="">
        </div>
      </div>

      <div class="progress">
        <span>{{current}}</span>
        <div class="progress-box" ref="progressBox">
          <span class="progress-btn" ref="progressBtn" @mousedown.self="mouseDown" @touchstart.self="mouseDown" @touchmove.self="mouseMove" @touchend.self="mouseEnd"></span>
          <span class="progress-range" ref="progressRange"></span>
        </div>
        <span>{{allTime}}</span>
      </div>

      <span style="display:inline-block;padding:.02rem .2rem;font-size: .14rem;border:2px solid;z-index: 10" @click="paused">pause</span>
      <span style="display:inline-block;padding:.02rem .2rem;font-size: .14rem;border:2px solid;z-index: 10" @click="play">running</span>
    </div>
  </div>


</div>
</template>

<script>
export default {
  data() {
    return {
      'allTime': '',
      'current': '',
      'playTime': 0
    }
  },
  mounted() {
    this.$refs.audio.volume = '0.1'

  },
  methods: {
    paused() {
      this.$refs.audio.pause()
      this.$refs.boxCircle.style.animationPlayState = 'paused'
    },

    play() {
      this.$refs.audio.play()
      this.$refs.boxCircle.style.animationPlayState = 'running'
    },

    //播放器进度条
    updateTime(e) {
      let currentTime = event.target.currentTime
      let duration = event.target.duration
      let progressBtn = this.$refs.progressBtn.clientWidth
      let num = currentTime / duration * 100
      num === 100 ? this.$refs.boxCircle.style.animationPlayState = 'paused' : ''
      this.$refs.progressRange.style.width = `${num}%`
      this.$refs.progressBtn.style.left = `${num}%`
      this.allTime = this.timeCalc(duration.toFixed())
      this.current = this.timeCalc(currentTime.toFixed())
    },

    mouseDown(event) {
      this.$refs.boxCircle.style.animationPlayState = 'paused'
      this.$refs.audio.pause()
    },
    mouseMove(event) {
      let pageX = event.targetTouches[0].pageX
      let boxLeftX = this.$refs.progressBox.offsetLeft
      let boxWidth = this.$refs.progressBox.offsetWidth
      let progressBtn = this.$refs.progressBtn.clientWidth
      let x = (pageX - boxLeftX) / boxWidth * 100
      x = x > 100 ? 100 : x
      x = x < 0 ? 0 : x
      this.$refs.progressBtn.style.left = `${x}%`
      this.$refs.progressRange.style.width = `${x}%`
      this.playTime = (x * 2).toFixed()
      this.current = this.timeCalc(this.playTime)
    },
    mouseEnd(event) {
      this.$refs.boxCircle.style.animationPlayState = 'running'
      this.$refs.audio.play()
      this.$refs.audio.currentTime = this.playTime
    },

    // 播放时间计算
    timeCalc(time) {
      let min = time / 60
      let sec = time % 60
      sec = sec < 10 ? `0${sec}` : sec
      min = min < 10 ? `0${Math.floor(min)}` : Math.floor(min)
      return `${min}:${sec}`
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
  z-index: 10

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
  z-index: 10
  & img
    width: 100%
    height: 100%

.progress
  margin-top: .2rem
  padding: 0 .3rem
  display: flex
  align-items: center
  justify-content: space-between
  z-index: 10
  span
    font-size: .14rem

.progress-box
  width: 2rem
  height: .02rem
  border: .01rem solid #e5e7e8
  position: relative
  z-index: 10

.progress-btn
  width: .14rem
  height: .14rem
  border-radius: 50%
  background: #333333
  display: block
  position: absolute
  top: 50%
  transform: translateY(-50%)
  z-index: 10

.progress-range
  background: #c62f2f
  height: .02rem
  position: absolute
  top: 0
  left: 0
  z-index: 10

.bgImg
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  background-position: center center
  background-size: cover
  z-index: 1
  filter: blur(10px)
</style>
