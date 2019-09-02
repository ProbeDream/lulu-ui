<template>
        <button class="l-button"  :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
            <l-icon class="icon" v-if="icon && !loading" :name="icon"></l-icon>
            <l-icon name="Loading" v-if="loading" class="loading icon"></l-icon>
            <div class="content">
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
    @keyframes  spin {
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
    }
    .l-button {
        font-size: var(--font-size);height: var(--button-height);padding: 0 1em;border-radius: var(--border-radius);
        border: 1px solid var(--border-color);background: var(--button-bg);display: inline-flex;
        justify-content: center;align-items: center;vertical-align: middle;
        &:hover {border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        .loading{animation:spin 1s infinite linear;}
        > .icon{order: 1;}
        > .content{order: 2;margin-right: .1em;}
        &.icon-right{
            > .icon{order: 2;margin-left: .1em;}
            > .content{order: 1;}
        }
    }
</style>

