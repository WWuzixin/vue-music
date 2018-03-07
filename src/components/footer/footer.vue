<template>
  <div class="footer">
    <router-link to="/index" tag="div" class="tarbar">
      <i class="icon-wangyi icon-info"></i>
      <span>发现音乐</span>
    </router-link>
    <router-link to="/songlist" tag="div" class="tarbar">
      <i class="icon-music icon-info"></i>
      <span>我的音乐</span>
    </router-link>
    <router-link to="/login" tag="div" class="tarbar">
      <i class="icon-community icon-info"></i>
      <span>朋友</span>
    </router-link>
    <router-link to="/regist" tag="div" class="tarbar">
      <i class="icon-friend icon-info"></i>
      <span>账号</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.footer
  width: 100%
  height: .5rem
  position: fixed
  bottom: 0
  left: 0
  background: rgba(51,51,51,.95)
  display: flex
  justify-content: space-between
  align-items: center
  & .router-link-active
    color: #ffffff

.tarbar
  font-size: .10rem
  display: flex
  flex-direction: column
  align-items: center
  color: #999
  font-weight: 100
  -webkit-transform-origin-x: 0
  -webkit-transform: scale(0.90)
  .icon-info
    font-size: .24rem
  &:first-child
    margin-left: .15rem
  &:last-child
    margin-right: .15rem
</style>
