<template>
    <!-- 
        mousewheel/DOMMouseScroll   滚轮事件，存在event对象
        mousewheel  浏览器版本为chrome、ie
        DOMMouseScroll  浏览器版本为FireFox

        父组件调用方式：<c-dialog :visible.sync="dialogVisible" v-model="dialogVisible" width="30%"></c-dialog> 
        第一种方式，添加sync的修饰符，作用是为了实现子组件修改父组件的值，而不报错
        第二种方式，v-model="dialogVisible"，绑定值之后，在子组件就可以通过this.$emit('input', false)来修改绑定的值
     -->
    <div v-show="visible" class="bg" @touchmove.stop.prevent="touchmove" @mousewheel.stop.prevent="touchmove" @DOMMouseScroll.stop.prevent="touchmove" @click="dialogClose($event)">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'cdialog',
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        width: {
            type: String,
            default: '30%'
        }
    },
    computed: {
        // isShow: {
        //     get: function () {
        //         return this.visible
        //     },
        //     set: function (v) {
        //         this.isShow = !this.visible
        //     }
        // }
    },
    data() {
        return {
            // isShow: false
        }
    },
    created() {
        // this.isShow = this.visible;
    },
    methods: {
        touchmove() {
            console.log(1)
        },
        dialogClose(e) {
            console.log(this, e)
            if (e.target.className && e.target.className === 'bg') {
                this.$emit('update:visible', false)
                this.$emit('input', false)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.bg{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
