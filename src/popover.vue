<template>
    <div class="popover" @click="handleClick">
        <div class="content-wrapper" v-if="visible">
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
                document.body.addEventListener('click',()=>{
                    this.visible = false;
                });
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