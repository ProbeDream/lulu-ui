 <template>
    <div class="tabs-panel" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'luluTabsPanel',
    inject:['eventBus'],
    data(){
        return {active:false}
    },props:{
        name:{type:String|Number,required:true},
        
    },created() {
        this.eventBus.$on('update:selected',name=>{
            this.active = name === this.name;
        })
    },computed:{
        classes(){return {active:this.active};}
    }
}
</script>

<style lang="scss" scoped>
.tabs-panel{
    &.active{
        background-color:red;}
}
</style>