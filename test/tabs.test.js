const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsHead from "../src/tabs-head";
import TabsBody from "../src/tabs-body";
import TabsItem from "../src/tabs-item";
import TabsPane from "../src/tabs-panel";
Vue.component('l-tabs',Tabs);
Vue.component('l-tabs-head',TabsHead);
Vue.component('l-tabs-body',TabsBody);
Vue.component('l-tabs-item',TabsItem);
Vue.component('l-tabs-pane',TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs',()=>{
    it('Tabs存在 ',()=>{
        expect(Tabs).to.exist;
    });
    it('接受 selected属性',  (done)=>{
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHtml = `
        <l-tabs selected="finance">
            <l-tabs-head>
                <l-tabs-item name="woman">美女</l-tabs-item>
                <l-tabs-item name="finance">财经</l-tabs-item>
                <l-tabs-item name="sports">体育</l-tabs-item>
            </l-tabs-head>
            <l-tabs-body>
                <l-tabs-pane name="woman">美女资讯</l-tabs-pane>
                <l-tabs-pane name="finance">财经资讯</l-tabs-pane>
                <l-tabs-pane name="sports">体育资讯</l-tabs-pane>
            </l-tabs-body>
        </l-tabs>    
        `;
        let vm = new Vue({el:div});
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item[data-name='finance'`);
            expect(x.classList.contains('active')).to.be.true;
            done();
        })
    });
    it('可以接受direction prop',()=>{

    });
});