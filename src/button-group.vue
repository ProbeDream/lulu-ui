<template>
    <div class="l-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        for (let node of this.$el.children){
            if (node.nodeName.toLowerCase() !== 'button'){
                console.warn(`l-button-group标签里面的元素应该全部都是 l-button!你写的内容为: ${node.nodeName.toLowerCase()}`);
            }
        }
    }
}
</script>

<style lang="scss">
   .l-button-group{
        display: inline-flex;
       vertical-align: middle;
       > .l-button{
           border-radius:0px;
           &:not(:first-child){
               margin-left: -1;
           }
           &:first-child{
               border-top-left-radius:var(--border-radius) ;
               border-bottom-left-radius:var(--border-radius) ;
           }
           &:last-child{
               border-bottom-right-radius:  var(--border-radius);
               border-top-right-radius:  var(--border-radius);
           }
           &:hover{position: relative;z-index: -1;}
       }
       
   }
   
</style>