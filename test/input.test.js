const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input',()=>{
    it('存在',()=>{
        expect(input).to.exist;
    });
    describe('props',()=>{
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy();
        });
        it('接收value',()=>{
             vm = new Constructor({
                 propsData:{value:1234}
             }).$mount();
            const inputElement = vm.$el.querySelector('input');
            const value = inputElement.value;
            expect(value).to.equal('1234');

        });

        it('接收disabled',()=>{
            vm = new Constructor({
                propsData:{disabled:true}
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
        });

        it('接收readonly',()=>{
            vm = new Constructor({
                propsData:{readonly: true}
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true);
        });

        it('接收Error',()=>{
            vm = new Constructor({
            propsData:{error:"你错了"}
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            const href = useElement.getAttribute('xlink:href');
            expect(href).to.equal('#icon-error');
            const errorMessage = vm.$el.querySelector('.errorMessage');
            expect(errorMessage.innerText).to.equal('你错了');
        });
    });

    describe('事件',()=>{
        const Constructor = Vue.extend(Input);
        let vm ;
        afterEach(()=>{
            vm.$destroy();
        });
        it('支持change/input/focus/blur事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount();
                const callback = sinon.fake();
                vm.$on(eventName,callback);
                let event = new Event(eventName);
                let inputElement = vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event);
            });
        });
    })
});
