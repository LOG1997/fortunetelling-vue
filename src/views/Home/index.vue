<script setup lang="ts">
import { ref, onMounted } from 'vue';
import lunisolar from 'lunisolar'
import char8ex from 'lunisolar/plugins/char8ex'

lunisolar.extend(char8ex)
const dateValue = ref('');
const sex = ref<1|0>(1);
const lunarDate = ref('');
const calcDate = () => {
    const lsr = lunisolar(dateValue.value).lunar;
    const year = lsr.getYearName()
    const month = lsr.getMonthName()
    const day = lsr.getDayName()
    const hour = lsr.getHourName()
    lunarDate.value = `${year}年${month}${day}日${hour}时`
};
const calcChar8 = () => {
    const c8ex = lunisolar(dateValue.value).char8ex(sex.value)
    console.log(c8ex)
}
onMounted(() => {
    dateValue.value = new Date().toString()
})

</script>

<template>
    <div class="flex justify-center items-center flex-col">
        <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="sex" class="ml-4">
                <el-radio :label="1" size="large">男</el-radio>
                <el-radio :label="0" size="large">女</el-radio>
            </el-radio-group>
        </div>
        <div class="flex">
            <div class="py-10 text-center">
                <span class="">选择出生时间</span>
                <el-date-picker v-model="dateValue" type="datetime" placeholder="选择出生日期和时间" />
            </div>
            <div class="py-10">
                <el-button @click="calcDate">开始计算</el-button>
            </div>
        </div>
        <div class="">
            <span>阴历：{{ lunarDate }}</span>
            <el-button @click="calcChar8">获取天干地支</el-button>
        </div>
        <div>
        </div>
        <div>

        </div>
    </div>
</template>

<style scoped lang="scss">
// @include themeify {
//   background: themed(" theme-color"); // theme-color 必须在主题文件里定义
// }

.logo {
    height: 10em;
    padding: 1.5em;
    will-change: filter;
    z-index: 0;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

button {
    background-color: #646cff;
    color: #fff;

    &:hover {
        background-color: #646cffaa;
    }
}
</style>
