<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'l-tabs',
    props:{
        selected:{type:String,required:true},
        direction:{
        type:String,default:'horizontal',
        validator(value){return ['horizontal','vertical'].indexOf(value) !==-1;}
        }
    }
}
</script>

<style scoped>
.tabs{}
</style>