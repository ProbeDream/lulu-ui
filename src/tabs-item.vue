<template>
    <div class="tabs-item" @click="handleClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'luluTabsItem',
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
            this.eventBus.$emit('update:selected',this.name,this);
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
    cursor: pointer;
    border:1px solid green;
    height:100%;
    display: flex;
    align-items: center;
    $blue:blue;
    &.active{
    color:$blue;
    font-weight: bold;
    }
}
</style>