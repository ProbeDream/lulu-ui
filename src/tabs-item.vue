<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'l-tabsItem',
    props:{
        disabled:{
            type:Boolean,default:false
        }
    }
}
</script>

<style scoped>
.tabs-item{}
</style>