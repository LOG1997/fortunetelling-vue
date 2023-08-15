<script setup lang="ts">
import Header from './Header/index.vue';
import Footer from './Footer/index.vue';
</script>

<template>
  <div class="w-screen">
    <!-- <header class="head-container">
      <Header></Header>
    </header> -->
    <main class="main-container w-screen box-content min-h-[calc(100vh-10rem)]">
      <router-view class="main-container-content"></router-view>
    </main>
    <!-- <footer class="footer-container w-screen">
      <Footer></Footer>
    </footer> -->
  </div>
</template>
<style scoped lang="scss">
.main-container {
  .main-container-content {
  }
}
.head-container {
  width: 100%;
  @include themeChildify {
    background-color: themed("header-bg-color");
    box-shadow: 5px 5px 10px themed(shawdow-color),
      -5px -5px 10px themed(shawdow-color);
  }
}

.footer-container {
}
</style>
