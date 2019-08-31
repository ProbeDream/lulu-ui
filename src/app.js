import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
Vue.component('l-button',Button);
Vue.component('l-icon',Icon);
Vue.component('l-button-group',ButtonGroup);
import chai from 'chai';
const expect = chai.expect;
let app = new Vue({el: '#app', data:{loading01:false,loading02:true,loading03:false}});
//通过对应的对对应的icon进行单测
{
    const vn = Vue.extend(Button);
    const button = new vn({propsData:{icon:'settings'}});
    button.$mount();
    const useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#icon-settings');
    button.$el.remove();
    button.$destroy();
}
//对对应的Loading进行单侧
{
    const vm = Vue.extend(Button);
    const button = new vm({propsData: {icon:'settings', loading:true}});
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.equal('#icon-Loading');
    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const vm = Vue.extend(Button);
    const button = new vm({propsData: {icon:'settings'}});
    button.$mount(div);
    let svgElement = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svgElement);
    expect(order).to.equal('1');
    button.$el.remove();
    button.$destroy();
}

{
    const vm = Vue.extend(Button);
    const lButton = new vm({propsData:{icon:'settings'}});
    lButton.$mount();
    lButton.$on('click',function(){expect(2).to.equal(1);});
    //希望函数被保存!
    let button = lButton.$el;
}