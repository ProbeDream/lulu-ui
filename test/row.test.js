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
           const col = vm.$el.querySelector('.col');
           expect(getComputedStyle(col[0]).paddingRight).to.equal('10px');
           expect(getComputedStyle(col[0]).paddingLeft).to.equal('10px');
           done();
           vm.$el.remove();
           vm.$destroy();
        });
    });

    it('接收align属性',(align)=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData:{align:'right'}
        }).$mount();
        const element = vm.$el;
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end');
        element.remove();
        vm.$destroy();
    });
});