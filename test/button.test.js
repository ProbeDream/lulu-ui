const expect = chai.expect;
import vue from 'vue';
import Button from '../src/button';
Vue.config.productionTip = false;
Vue.config.devTools = false;

describe('Button',()=>{
    it('存在', ()=>{
        expect(Button).to.be.ok;
    });
    it('可以设置Icon', ()=>{
          const Constructor = Vue.extend(Button);
          const vm = new Constructor({
              propsData:{
                  icon:'settings'
              }
          }).$mount();
          const useElement = vm.$el.querySelector('use');
          expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings');
          vm.$destroy();
    });
    it('可以设置Loading',()=>{
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon:'settings',loading:true
            }
        }).$mount();
        const useElement = vm.$el.querySelectorAll('use');
        expect(useElement.length).to.equal(1);
        expect(useElement[0].getAttribute('xlink:href')).to.equal('#icon-Loading');
        vm.$destroy();
    });
    it('icon默认的order是1', ()=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData:{
                icon:'settings'
            }
        }).$mount(div);
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.equal('1');
        vm.$el.remove();
        vm.$destroy();
    });
    it('通过iconPosition可以改变对应的order',()=>{
        const div = document.createElement('div');
        document.body.appendChild('div');
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData:{
                icon:'settings',iconPosition:'right'
            }
        }).$mount(div);
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.equal('2');
        vm.$el.remove();
        vm.$destroy();
    });
    it('点击Button触发click事件',()=>{
        const Constructor = Vue.extends(Button);
        const vm = new Constructor({
            propsData:{
                icon:'settings'
            }
        }).$mount();
        const callback = sinon.fake();
        vm.$on('click',callback);
        vm.$el.click();
        expect(callback).to.have.been.called;
    });
});
