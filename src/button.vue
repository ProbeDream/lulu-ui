<template>
        <button class="l-button"  :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
            <l-icon class="icon" v-if="icon && !loading" :name="icon"></l-icon>
            <l-icon name="Loading" v-if="loading" class="loading icon"></l-icon>
            <div class="l-button-content">
                <slot></slot>
            </div>
        </button>
</template>
<script>
import icon from "./icon";
export default {
    name:"luluButton",
    components:{
        'l-icon':icon
    },
    props:{
        icon:String,
        loading:{type:Boolean,default:false},
        iconPosition:{
            type:String,
            default:'left',
            validator(value){
                return ['right','left'].indexOf(value) !== -1;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes  spin {
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
    }
    .l-button {
        font-size: $font-size;height: $button-height;padding: 0 1em;border-radius: $border-radius;
        border: 1px solid $border-color;background: $button-bg;display: inline-flex;
        justify-content: center;align-items: center;vertical-align: middle;
        &:hover {border-color: $border-color-hover;}
        &:active {background-color: $button-active-bg;}
        &:focus {outline: none;}
        .loading{animation:spin 1s infinite linear;}
        > .icon{order: 1;}
        > .l-button-content{order: 2;margin-right: .1em;}
        &.icon-right{
            > .icon{order: 2;margin-left: .1em;}
            > .l-button-content{order: 1;}
        }
    }
</style>

