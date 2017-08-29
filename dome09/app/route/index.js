/**
 * Created by xdata on 8/25.
 */
export default  {
    path: '/',
    // 根组件
    component: require('../APP').default,
    // 初始路由
    indexRoute: {
        component: require('../component/react.jsx').default
    },
    childRoutes: [
        require('./react').default,
        require('./redux').default,
        // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
        // {path: '*', component: require('../component/react.jsx').default}
    ]
}