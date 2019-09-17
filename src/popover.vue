<template>
    <div class="popover" @click.stop="handleClick">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'luluPopover',
    data(){return {visible:false};},
    methods:{
        handleClick(){
            this.visible = !this.visible;
            if (this.visible === true){
                this.$nextTick(()=>{
                    let eventHandler = ()=>{
                        this.visible = false;
                        document.removeEventListener('click',eventHandler);
                    }
                    document.addEventListener('click',eventHandler);
                })
            }else{
                console.log('vm隐藏了popover');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border-radius:1px solid red;
            box-shadow: 0 0 3px rgba(0,0,0,0.5) ;
        }
    }
</style>