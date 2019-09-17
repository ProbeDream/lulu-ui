const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/popover"
Vue.config.productionTip = false;
Vue.config.devtools = false;
describe('Popover',()=>{
    it('popover 存在 ',  ()=>{
        expect(Popover).to.exist;
    });
    it('可以设置position', (done)=>{
        Vue.component('l-popover',Popover);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <l-popover position="bottom" ref="a">
                <template slot="content">
                    弹出内容!
                </template>
                <button>Click me!</button>
            </l-popover>
        `;
        const vm = new Vue({
            el:div
        });
        vm.$el.querySelector('button').click();
        vm.$nextTick(()=>{
            const {contentWrapper} = vm.$refs.a.$refs;
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true;
            done();
        })
    });
});