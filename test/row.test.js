const expect = chai.expect;
import Vue from "vue";
import Row from "../src/row";
import Col from "../src/col";
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row',()=>{
    it('Row存在',()=>{
        expect(Row).to.exist;
    });
    it('接收gutter属性',(done)=>{
        Vue.component('l-row',Row);
        Vue.component('l-col',Col);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
        <l-row gutter="20">
           <l-col span="12"></l-col> 
           <l-col span="12"></l-col> 
        </l-row>`;
        const vm = new Vue({el:div});
        setTimeout(()=>{
           const row = vm.$el.querySelector('.row');
           expect(getComputedStyle(row).marginRight).to.equal('-10px');
           expect(getComputedStyle(row).marginLeft).to.equal('-10px');
           const cols = vm.$el.querySelectorAll('.col');
           expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px');
           expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px');
           done();
           vm.$el.remove();
           vm.$destroy();
        });
    });

    it('接收align属性',()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData:{align:'right'}
        }).$mount(div);
        const element = vm.$el;
        console.log(getComputedStyle(element).justifyContent);
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end');
        element.remove();
        vm.$destroy();
    });
});