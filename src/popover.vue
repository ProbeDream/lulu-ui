<template>
    <div class="popover" @click.stop="handleClick" ref="popover">
        <div class="content-wrapper" v-if="visible"  ref="contentWrapper">
            <slot name="content"></slot>
        </div>
       <span ref="triggerWrapper">
            <slot></slot>
       </span>
    </div>
</template>

<script>
export default {
    name:'luluPopover',
    data(){return {visible:false};},
    methods:{
        positionContent(){
            document.body.appendChild(this.$refs.contentWrapper);
            let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
        },onClickDocument(event){
            if (this.$refs.popover && (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))){
                return
            }
            this.close();
        },handleClick(event){
             if (this.$refs.triggerWrapper.contains(event.target)){
                if (this.visible === true){
                    this.close()
                }else{this.open()}
            }
        },close(){
            this.visible = false ;
            document.removeEventListener('click',this.onClickDocument);
        },open(){
            this.visible = true;
            this.$nextTick(()=>{
                this.positionContent();
                document.addEventListener('click',this.onClickDocument);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        
    }
    .content-wrapper{
        position: absolute;
        border:1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,0.5) ;
        transform:translateY(-110%);
    }
</style>