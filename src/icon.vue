<template>
    <svg class="l-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
import  './assets/iconfont'
export default {
    name:"luluIcon",
    props:['name']
}
</script>

<style lang="scss" scoped>
    .l-icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>