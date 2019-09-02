<template>
   <div class="wrapper">
       <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
        @change="$emit('change',$event.target.value)" @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)" @blur="$emit('blur',$event.target.value)"
       >
        <template v-if="error">
            <Icon name="error" class="icon-error"></Icon>
            <span class="errorMessage">{{error}}</span>
        </template>
   </div>
</template>

<script>
import Icon from './icon';
export default {
    components:{Icon},
    name:"luluInput",
    props:{
        value:{type:String},
        readonly:{type:Boolean,default:false},
        disabled:{type:Boolean, default:false},
        error:{type:String}
    }
}
</script>

<style lang="scss" scoped>
    $font-size:12px;
    $height:32px;
    $width:128px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#F1453D;
    .wrapper{
        font-style: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(last-child){margin-right: 0.5em;}
        > input {
            height: $height;
            width: $width;
            border:1px solid $border-color;
            border-radius:$border-radius;
            &:hover{border-color: $border-color-hover;}
            &:focus{box-shadow:inset 0px 1px 3px $box-shadow-color;outline: none; }
            text-indent: 0.5em;
        }
        &.error{border-color:$red;}
        .icon-error{fill:$red;}
        .errorMessage{color: $red;}
    }
</style>