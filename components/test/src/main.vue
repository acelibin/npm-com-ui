<template>
  <div class="test">
    <div class="title">This is a test component.</div>
    <div class="desc">This is description content.</div>
    <img src="./icon/close.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'test-component'
}
</script>

<style lang="scss" scoped>
.test {
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