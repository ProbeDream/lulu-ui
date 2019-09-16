<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="wrapper-actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'luluTabsHead',
    inject:['eventBus'],
    created() {
        this.$emit('update:selected','tabs-head抛出的数据!')
    }
}
</script>

<style lang="scss" scoped>
$tab-height:40px;
.tabs-head{
    display:flex;
    height:$tab-height;
    justify-content: center;
    border:1px dashed deepskyblue;
    align-items: center;
    > .wrapper-actions {margin-left: auto;}
}
</style>