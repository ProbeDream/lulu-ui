module.exports = {
    title: 'LuLuUI',
    description: '一个好用的UI框架',
    themeConfig:{
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide/'},
            {text:'交流',link:'https://github.com/ProbeDream/lulu-ui/issues'}
        ],sidebar: [
            {title:'入门',
                children:[
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title:'组件',
                children: ['/components/button']
            }
        ]
    }
};