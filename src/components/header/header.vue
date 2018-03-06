<template>
  <div>
    <div class="header-wrapper">
      <i class="left-more icon-menu"></i>
      <div class="center-list">
        <router-link to="" tag="i" class="icon-music"></router-link>
        <router-link to="" tag="i" class="icon-wangyi"></router-link>
        <router-link to="" tag="i" class="icon-community"></router-link>
      </div>
      <i class="right-search icon-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="sass">
.header-wrapper
  width: 100%
  height: .45rem
  background: #c62f2f
  position: fixed
  left: 0
  top: 0
  z-index: 10
  display: flex
  justify-content: space-between

.icon-menu, .icon-search
  color: #ffffff
  font-size: .26rem
  padding: .10rem .15rem

.center-list
  display: flex
  justify-content: space-between
  align-items: center
  & .router-link-active
    color: #f2f4f6

.icon-music, .icon-wangyi, .icon-community
  color: #ffffff
  font-size: .22rem
  margin: 0 .12rem

</style>
