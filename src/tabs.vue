<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name:'luluTabs',
    props:{
        selected:{type:String,required:true},
        direction:{
        type:String,default:'horizontal',
        validator(value){
            return ['horizontal','vertical'].indexOf(value) !==-1;
            }
        }
    },data(){
        return {eventBus:new Vue()};
    },provide(){
        return {eventBus:this.eventBus}
    },mounted() {
        this.checkChildren();
        this.selectedTab();
    },methods:{
        checkChildren(){
            if (this.$children.length === 0){
                console && console.warn &&
                console.warn('tabs的子组件应该是tabs-head和tans-nav,但你没有写子组件!')
            }
        },selectedTab(){
            //之所以这样嵌套遍历是因为 tabs的组件的固定用法是: tabs=> head+body+panel => tabs-item 最后才是单位最小的项 item
            this.$children.forEach(vm=>{
                if (vm.$options.name === 'luluTabsHead'){
                    vm.$children.forEach(childVm=>{
                        if (childVm.$options.name === 'luluTabsItem'){
                            this.eventBus.$emit('update:selected',this.selected,childVm);
                        }
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
.tabs{}
</style>