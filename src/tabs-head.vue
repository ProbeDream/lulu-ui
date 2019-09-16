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
    mounted() {
      this.eventBus.$on('update:selected',(item,vm)=>{
           let {width,height,top,left }= vm.$el.getBoundingClientRect();
          this.$refs.line.style.width = `${width}px`;
           this.$refs.line.style.left = `${left}px`;
      })
    }
}
</script>

<style lang="scss" scoped>
$tab-height:40px;
$blue:blue;
$border-color:#ddd;
.tabs-head{
    display:flex;
    height:$tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom:1px solid $border-color;
    > .wrapper-actions {
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0 1em;
    }
    > .line{
        position: absolute;
        bottom: 0;
        transition:all 350ms;
        border-bottom:1px solid $blue;
    }
}
</style>