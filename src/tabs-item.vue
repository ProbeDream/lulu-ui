<template>
    <div class="tabs-item" @click="handleClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'l-tabsItem',
    inject:['eventBus'],
    props:{
        disabled:{type:Boolean,default:false},
        name:{type:String|Number,require:true}
    },data(){
        return {active:false}
    },computed:{
        classes(){return {active:this.active}}
    },methods:{
        handleClick(){
            this.eventBus.$emit('update:selected',this.name);
        }
    },created() {
        this.eventBus.$on('update:selected',name=>{
            this.active = name === this.name;
        })
    }
}
</script>

<style lang="scss" scoped>
.tabs-item{
    flex-shrink:0;padding:0 1em;
    &.active{
        background-color: red;
    }
}
</style>