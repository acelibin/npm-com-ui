<template>
  <div class="demo">
    <div class="title">This is a demo component.</div>
    <div class="desc">This is description content.</div>
    <img src="./icon/close.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'demo-component'
}
</script>

<style lang="scss" scoped>
.demo {
  .title {
    color: red;
    font-size: 20px;
  }

  .desc {
    font-size: 18px;
  }

  img {
    background: blue;
  }
}
</style>