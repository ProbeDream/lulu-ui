<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
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
      this.eventBus.$on('update:selected',(item,vm)=>{
          console.log(item);
      })
    }
}
</script>

<style lang="scss" scoped>
$tab-height:40px;
$blue:blue;
.tabs-head{
    display:flex;
    height:$tab-height;
    justify-content: center;
    border:1px dashed deepskyblue;
    position: relative;
    > .wrapper-actions {margin-left: auto;}
    > .line{
        position: absolute;
        bottom: 0;
        width: 100px;
        border-radius:1px solid $blue;
    }
}
</style>