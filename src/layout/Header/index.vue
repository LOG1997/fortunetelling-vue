<script setup lang="ts">
import { navList } from './config';
import SwitchTheme from './components/SwitchTheme/index.vue';
const skip = (url: string) => {
  window.open(url, '_self');
};
</script>

<template>
  <div class="header-container">
    <div class="header-logo">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
    </div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="navbar-toggler-icon"></span> -->
          <svg-icon :name="'open'"></svg-icon>
        </button>
        <div
          class="nav-list collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              v-for="item in navList.data"
              :key="item.id"
              @click="skip(item.url)"
            >
              <a class="nav-link active" aria-current="page" href="#">{{
                item.name
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="header-info">
      <SwitchTheme></SwitchTheme>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  // position: relative;
  // width: 100vw;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  .header-logo {
    padding-right: 30px;
    // 居中
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 40px;
      height: 40px;
    }
  }
  @media screen and (max-width: 991px) {
    .header-logo {
      position: absolute;
      // 居中
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .navbar {
    width: 100%;
    .nav-list {
      ul li {
        a {
          @include themeChildify {
            color: themed("font-color");
          }
          &:hover {
            @include themeChildify {
              color: themed("font-color-second");
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .header-container {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
