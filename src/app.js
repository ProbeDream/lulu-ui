import Vue from 'vue';
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
Vue.use(plugin);

let app= new Vue({el: '#app',
    data:{loading01:false,loading02:true,loading03:false,message:'hi'},
    created(){
        this.$toast('文字',{
            enableHTML: false
        });
    },methods:{
        showToast(){
            this.$toast(`你的智商目前为止${parseInt(Math.random()*100)}你的智商需要充值!`,{
                position:'middle',
                enableHTML: false,
                closeButton:{
                    text:'已充值',callback(){
                        console.log('他说已经充值智商了');
                    }
                },autoClose: false,autoCloseDelay: 3
            })
        }
    }
});
