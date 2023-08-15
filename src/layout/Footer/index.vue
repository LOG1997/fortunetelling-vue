<script setup lang="ts">
import { footerList } from './config';
const skip = (url: string) => {
  window.open(url);
};
</script>
<template>
  <div class="footer-container">
    <ul>
      <li
        v-for="item in footerList.data"
        :key="item.id"
        @click="skip(item.url)"
      >
        <svg-icon :name="item.icon"></svg-icon>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  height: 80px;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0px;
    li {
      width: 100px;
      height: 24px;
      line-height: 24px;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        line-height: 24px;
        height: 24px;
      }
      //   vertical-align: middle;
    }
  }
}
</style>
