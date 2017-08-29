/**
 * Created by xdata on 8/24.
 */
export default  {
    path: '/',
    // 根组件
    component: require('../APP').default,
    // 初始路由
    indexRoute: {
        component: require('../component/all.jsx').default
    },
    childRoutes: [
        require('./all').default,
        require('./active').default,
        require('./completed').default,
        // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
        {path: '*', component: require('../component/all.jsx').default}
    ]
};