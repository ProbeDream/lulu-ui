<template>
        <button class="l-button"  :class="{[`icon-${iconPosition}`]:true}">
            <l-icon v-if="icon" :name="icon"></l-icon>
            <l-icon name="Loading" class="loading"></l-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>
    
</template>
<script>
export default {
    props:{
        'icon':{},'iconPosition':{
            type:String,default:'left',
            validator(value){
                return ['right','left'].indexOf(value) !== -1;
            }
        }
    }
}
</script>
<style lang="scss">
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
        > .icon{order: 1;}
        > .content{order: 2;margin-right: .1em;}
        &.icon-right{
           > .content{order: 1;}
           > .icon{order: 2;margin-left: .1em;}
        }
        .loading{animation:spin 1s infinite linear;}
    }
    
</style>