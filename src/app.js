import Vue from "vue";
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Col from './col';
import Row from './row';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Layout from './layout';
import Sider from './sider';
import Toast from './toast';
import plugin from "./plugin";
import TabsBody from './tabs-body';
import Tabs from "./tabs";
import TabsHead from './tabs-head';
import TabsPanel from './tabs-panel';
import TabsItem from './tabs-item';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
Vue.component('l-button',Button);
Vue.component('l-icon',Icon);
Vue.component('l-button-group',ButtonGroup);
Vue.component('l-input',Input);
Vue.component('l-col',Col);
Vue.component('l-row',Row);
Vue.component('l-header',Header);
Vue.component('l-footer',Footer);
Vue.component('l-content',Content);
Vue.component('l-layout',Layout);
Vue.component('l-sider',Sider);
Vue.component('l-toast',Toast);
Vue.component('l-tabs-body',TabsBody);
Vue.component('l-tabs-head',TabsHead);
Vue.component('l-tabs-panel',TabsPanel);
Vue.component('l-tabs',Tabs);
Vue.component('l-tabs-item',TabsItem);
Vue.component('l-popover',Popover);
Vue.component('l-collapse',Collapse);
Vue.component('l-collapse-item',CollapseItem);
Vue.use(plugin);

let app= new Vue({el: '#app',
    data:{selectedTab:'sports'},
    methods:{
        yyy(data){
            console.log(data);
        },showToast(position){
            this.$toast(`你的智商目前为止${parseInt(Math.random()*100)}你的智商需要充值!`,{
                position,enableHTML: false,
                closeButton:{
                    text:'已充值',callback(){
                        console.log('他说已经充值智商了');
                    }
                },autoClose:3
            })
        },showToast1(){
            this.showToast('top');
        },showToast2() {
            this.showToast('middle');
        },showToast3(){
            this.showToast('bottom');
        }
    }
});
