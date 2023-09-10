<script setup lang='ts'>
import { ref, onMounted ,watch,toRefs} from 'vue';
import * as echarts from 'echarts';
const e5ChartdRef = ref();
const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                    '金': 0,
                    '木': 0,
                    '水': 0,
                    '火': 0,
                    '土': 0,
            };
        }
    },
    name: String
});
const e5Data=toRefs(props).data;
console.log('😋e5Data:',e5Data);
const e5AttrNameArray = ref<any[]>([]);
const e5AttrValueArray = ref<any[]>([]);

const init = () => {
    console.log('sdafadas:',e5Data.value);
    e5AttrNameArray.value = [];
    e5AttrValueArray.value = [];
    for(let i=0; i<Object.keys(e5Data.value).length; i++){
        e5AttrNameArray.value.push({text:Object.keys(e5Data.value)[i]});
    }
    e5AttrValueArray.value = Object.values(e5Data.value);
        console.log('😒e5AttrNameArray.value:',e5AttrNameArray.value);
    console.log('😋e5AttrValueArray.value:',e5AttrValueArray.value);

    const myChart = echarts.init(e5ChartdRef.value);
    const option = {
        color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
        title: {
            text: props.name
        },
        legend: {},
        radar:
        {
            indicator: e5AttrNameArray.value,
            center: ['50%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: Math.max.apply(null,e5AttrValueArray.value)||2,
            shape: 'circle',
            axisName: {
                formatter: '【{value}】',
                color: '#428BD4'
            },
            splitArea: {
                areaStyle: {
                    color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(211, 253, 250, 0.8)'
                }
            }
        },

        series:
        {
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: e5AttrValueArray.value,
                    name: 'Data A'
                },
            ]
        }
    };
    option && myChart.setOption(option);
};
onMounted(() => {
    init();
});
watch(()=>props.data,(newVal,oldvAL)=>{
    console.log('😇newVal:',newVal);
    console.log('😁oldvAL:',oldvAL);
    console.log('ppsaodoadoasoao',props.data);
    init();
});
</script>

<template>
    <div ref="e5ChartdRef" style="width: 100%; height: 400px"></div>
    {{ e5Data}}
</template>

<style lang='scss' scoped></style>
