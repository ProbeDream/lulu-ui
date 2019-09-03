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
let app = new Vue({el: '#app',
    data:{loading01:false,loading02:true,loading03:false,message:'hi'},
    created() {
        setTimeout(() => {
            let event = new Event('change');
            let inputElement = this.$el.querySelector('input');
            inputElement.dispatchEvent(event);
            console.log('dispatchEvent Event Done!');
        }, 1000);
    },
    methods:{
        inputChange(event){
            console.log(event);
        }
    }
});
