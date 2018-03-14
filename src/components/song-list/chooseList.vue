<template>
  <div class="checkBox">
    <div class="checkAll">
      <div class=" AllBtn">
        <span class="circle"></span>全选
      </div>
      <span class="confirm">完成</span>
    </div>
    <div class="song-list">
      <ul>
        <li v-for="item in dataList">
          <span class="circle"></span>
          <div class="song-info">
            <div>
              <p class="song-info-title">{{item.name}}</p>
              <p class="song-info-singer">{{item.singer}}-{{item.zhuanji}}</p>
            </div>
            <span></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn-group">
      <div class="btn-next btn-box">
        <i class="icon-zuijinplay"></i>下一首播放
      </div>
      <div class="btn-collect btn-box">
        <i class="icon-add"></i>收藏到歌单
      </div>
      <div class="btn-download btn-box">
        <i class="icon-download"></i>下载
      </div>
      <div class="icon-delect btn-box">
        <i class="icon-delete"></i>删除
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  margin: 0
  list-style: none
  padding: 0

.checkBox
  position: fixed
  left: 0
  width: 100%
  background: #ffffff
  overflow-x: auto
  overflow-y: scroll
  height: 100%

.checkAll
  display: flex
  align-items: center
  justify-content: space-between
  font-size: .17rem
  padding: 0 .15rem
  height: .4rem
  position: fixed
  top: .45rem
  left: 0
  right: 0
  background: #ffffff

.AllBtn
  display: flex
  align-items: center
  color: #232729

.circle
  width: .2rem
  height: .2rem
  border: .01rem solid #e5e7e8
  border-radius: 50%
  display: inline-block
  margin-right: .18rem

.confirm
  color: #c62f2f

.song-list
  margin-top: .4rem
  margin-bottom: .95rem

.song-list li
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 .15rem

.song-info
  width: 3.05rem
  text-align: left
  padding: .05rem 0
  border-top: .01rem solid #e5e7e8

.song-info-title
  font-size: .15rem
  color: #232729
  margin-bottom: .02rem

.song-info-singer
  font-size: .12rem
  color: #999999
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap

.btn-group
  position: fixed
  width: 100%
  height: .5rem
  bottom: 0
  left: 0
  background: #fafafa
  display: flex
  align-items: center
  justify-content: space-between
  i
    font-size: .22rem
    margin: .07rem 0 .03rem 0

.btn-box
  width: .6rem
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  color: #999
  font-size: .12rem
  font-weight: 100
  &:first-child
    margin-left: .15rem
  &:last-child
    margin-right: .15rem
</style>
