<script setup lang='ts'>
import { PropType, toRef, watchEffect } from 'vue'
import { Char8plat } from '@/types/char8'
import { columnLabelList } from './config.ts'
const props = defineProps({
    personChar8ex: {
        type: Object as PropType<Char8plat>,
        required: true
    }
})
const personChar8exData = toRef(props.personChar8ex)
// 监听personChar8ex的变化
watchEffect(() => {
    console.log('😃personChar8ex:', props.personChar8ex, personChar8exData.value)
})
</script>

<template>
    <div class="w-full text-center" v-if="props.personChar8ex.yearChar8">
        <div class="flex">
            <div class="table--column__label" v-for="item in columnLabelList" :key="item.id">
                <div class="w-32">{{ item.label }}</div>
            </div>
        </div>
        <!-- NOTE:天干 -->
        <div class="flex">
            <div class="w-32">
                <div>{{ personChar8ex.yearChar8.stem.name }}</div>
            </div>
            <div class="w-32">
                <div>{{ personChar8ex.monthChar8.stem.name }}</div>
            </div>
            <div class="w-32">
                <div>{{ personChar8ex.dayChar8.stem.name }}</div>
            </div>
            <div class="w-32">
                <div>{{ personChar8ex.hourChar8.stem.name }}</div>
            </div>
        </div>

            <!-- NOTE:地支 -->
            <div class="flex">
                <div class="w-32">
                    <div>{{ personChar8ex.yearChar8.branch.name }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.monthChar8.branch.name }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.dayChar8.branch.name }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.hourChar8.branch.name }}</div>
                </div>
            </div>
            <!-- NOTE:天干十神 -->
            <div class="flex">
                <div class="w-32">
                    <div>{{ personChar8ex.yearChar8.stemTenGod.name }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.monthChar8.stemTenGod.name }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.dayChar8.stemTenGod.name }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.hourChar8.stemTenGod.name }}</div>
                </div>
            </div>
            <!-- NOTE:地支十神 -->
            <div class="flex">
                <div class="w-32">
                    <div>{{ personChar8ex.yearChar8.branchTenGod.join(' ') }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.monthChar8.branchTenGod.join(' ') }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.dayChar8.branchTenGod.join(' ') }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.hourChar8.branchTenGod.join(' ') }}</div>
                </div>
            </div>
            <!-- NOTE:地支藏干 -->
            <div class="flex">
                <div class="w-32">
                    <div>{{ personChar8ex.yearChar8.branch.hiddenStems.join(' ') }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.monthChar8.branch.hiddenStems.join(' ') }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.dayChar8.branch.hiddenStems.join(' ') }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.hourChar8.branch.hiddenStems.join(' ') }}</div>
                </div>
            </div>
            <!-- NOTE:纳音 -->
            <div class="flex">
                <div class="w-32">
                    <div>{{ personChar8ex.yearChar8.takeSound }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.monthChar8.takeSound }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.dayChar8.takeSound }}</div>
                </div>
                <div class="w-32">
                    <div>{{ personChar8ex.hourChar8.takeSound }}</div>
                </div>
            </div>
        </div>
</template>

<style lang='scss' scoped></style>
