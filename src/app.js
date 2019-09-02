import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import chai from 'chai';
import spies from 'chai-spies';
Vue.component('l-button',Button);
Vue.component('l-icon',Icon);
Vue.component('l-button-group',ButtonGroup);
chai.use(spies);
const expect = chai.expect;
let app = new Vue({el: '#app', data:{loading01:false,loading02:true,loading03:false}});

try{
    //通过对应的对对应的icon进行单测
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({propsData:{icon:'settings'}});
        vm.$mount();
        const useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.equal('#icon-settings');
        vm.$el.remove();
        vm.$destroy();
    }
//对对应的Loading进行单侧
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({propsData: {icon:'settings', loading:true}});
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.equal('#icon-Loading');
        vm.$el.remove();
        vm.$destroy();
    }
    {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({propsData: {icon:'settings'}});
        vm.$mount(div);
        let svgElement = vm.$el.querySelector('svg');
        let {order} = window.getComputedStyle(svgElement);
        expect(order).to.equal('1');
        vm.$el.remove();
        vm.$destroy();
    }

    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({propsData:{icon:'settings'}});
        vm.$mount();
        let spy = chai.spy(function () {console.log('clicked');});
        //希望函数被保存!
        vm.$on('click',spy);
        let button = vm.$el;
        button.click();
        expect(spy).to.have.been.called();
    }
}catch (error) {
    window.errors = [error];
}finally {
    window.errors && window.errors.forEach(error=>{
        console.error(error.message);
    })
}