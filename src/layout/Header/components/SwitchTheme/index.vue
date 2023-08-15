<script setup lang="ts">
import { onMounted } from 'vue';
import { useTheme } from '@/hooks/useTheme';
const switchTheme = (command: string) => {
  const { setTheme } = useTheme();
  setTheme(command);
};
onMounted(() => {
  useTheme();
});
</script>

<template>
  <!-- 切换主题 -->
  <div class="switch-theme">
    <el-dropdown @command="switchTheme">
      <el-link type="primary" :underline="false" class="leading-12"
        >更换主题<el-icon><i-ep-arrow-down /></el-icon
      ></el-link>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="default"
            ><div class="color_box default_box"></div>
            默认主题</el-dropdown-item
          >
          <el-dropdown-item command="dark_theme"
            ><div class="color_box dark_box"></div>
            暗黑主题
          </el-dropdown-item>
          <el-dropdown-item command="blue_theme"
            ><div class="color_box blue_box"></div>
            蓝色主题</el-dropdown-item
          >
          <el-dropdown-item command="purple_theme"
            ><div class="color_box purple_box"></div>
            紫色主题</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style scoped lang="scss">
.switch-theme {
  width: 100px;
}
.color_box {
  width: 16px;
  height: 16px;
  margin-right: 3px;
  border: 1px solid #ccc;
}
</style>
