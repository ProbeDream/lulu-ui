import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
Vue.component('l-button',Button);
Vue.component('l-icon',Icon);
Vue.component('l-button-group',ButtonGroup);
Vue.component('l-input',Input);
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
