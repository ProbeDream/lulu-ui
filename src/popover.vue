<template>
    <div class="popover"  ref="popover" >
        <div class="content-wrapper" v-if="visible"  ref="contentWrapper" :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
       <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
       </span>
    </div>
</template>


<script>
export default {
    name:'luluPopover',
    data(){return {visible:false};},
    props:{
        position:{
            type:String,default:'top',
            validator(value){
                return ['top','bottom','left','right'].indexOf(value) !== -1;
            }
        },trigger:{
            type:String,default:'click',
            validator(value){
                return ['click','hover'].indexOf(value) !== -1;
            }
        }
    },mounted(){
        if (this.trigger === 'click'){
            this.$refs.popover.addEventListener('click',this.handleClick);
        }else{
            this.$refs.popover.addEventListener('mouseenter',this.open);
            this.$refs.popover.addEventListener('mouseleave',this.close);
        }
    },destroyed(){
        if (this.trigger === 'click'){
            this.$refs.popover.removeEventListener('click',this.handleClick);
        }else{
            this.$refs.popover.removeEventListener('mouseenter',this.open);
            this.$refs.popover.removeEventListener('mouseleave',this.close);
        }
    },computed:{
        openEvent(){
            return this.trigger === 'click' ? 'click'  : 'mouseenter';
        },closeEvent(){
            return this.trigger === 'click' ? 'click'  : 'mouseleave';
        }
    },
    methods:{
        positionContent(){
            const {contentWrapper,triggerWrapper} = this.$refs;
            document.body.appendChild(contentWrapper);
            let {width,height,top,left} = triggerWrapper.getBoundingClientRect();
            let {height:height2} = contentWrapper.getBoundingClientRect();
            let positions = {
                top : {top:top+window.scrollY,left:left+window.scrollY},
                bottom:{top:top+height+window.scrollY,left:left+window.scrollX},
                left:{top:top+window.scrollY+(height-height2)/2,left:left+window.scrollX},
                right:{top:top+window.scrollY+(height-height2)/2,left:left+window.scrollY+width}
            };
            contentWrapper.style.left = positions[this.position].left+'px';
            contentWrapper.style.top = positions[this.position].top+'px';
        },onClickDocument(event){
            if (this.$refs.popover && (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))){
                return;
            }if (this.$refs.contentWrapper && (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))){
                return ;
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
    $border-color:#333;
    $border-radius:4px;
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        border:1px solid $border-color;
        border-radius:$border-radius;
        filter:drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background-color:white;
        padding: 0.5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before,&::after{
            content:'';
            display: block;
            border:10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top{
            transform:translateY(-100%);
            margin-top: -10px;
            &::before,&::after{
                left: 10px;
            }
            &::before{
                border-top-color:black;
                top: 100%;
                border-bottom: none;
            }
            &::after{
                border-top-color: white;
                top:calc(100% - 1px);
                border-bottom: none;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                border-bottom-color: black;
                bottom: 100%;
                border-top: none;
            }
            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
                border-top: none;
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                border-left-color: black;
                left: 100%;
                border-right: none;
            }
            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
                border-right: none;
            }
        }
        &.position-right{
            margin-left: 10px;
            &::before,&::after{
                transform:translateY(-50%);
                top: 50%;
            }
            &::before{
                border-right-color:black;
                right:100%;
                border-left: none;
            }
            &::after{
                border-right-color:white;
                right:calc(100% - 1px);
                border-left: none;
            }
        }
    }
</style>