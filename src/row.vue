<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"lRow",
    props:{
      gutter:{
        type:[Number,String]
      },align:{
          type:String,validator(value) {
                return ['left','right','center'].indexOf(value) !== -1;
            }
        }
    },
    computed:{
        rowStyle(){
            let {gutter} = this;
            return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'};
        },rowClass(){
           let {align} = this;
           return [align && `align-${align}`]
        }
    },
    props:{gutter:{type:[String,Number]}},
    mounted() {
        //row挂载的时候 将对应的子元素col数组遍历出来 并且将对应的gutter赋值给每个col的实例对象!
        this.$children.forEach(vm=>{vm.gutter = this.gutter;});
    }
}
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{justify-content: flex-start;}
    &.align-right{justify-content: flex-end;}
    &.align-center{justify-content: center;}
}
</style>