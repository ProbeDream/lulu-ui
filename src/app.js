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
let app = new Vue({el: '#app',
    data:{loading01:false,loading02:true,loading03:false,message:'hi'},
    methods:{
        showToast(){
            this.$toast('Im a toast!');
        }
    }
});
