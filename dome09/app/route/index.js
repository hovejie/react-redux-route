/**
 * Created by xdata on 8/25.
 */
export default  {
    path: '/',
    // �����
    component: require('../APP').default,
    // ��ʼ·��
    indexRoute: {
        component: require('../component/react.jsx').default
    },
    childRoutes: [
        require('./react').default,
        require('./redux').default,
        // ��·��ƥ������һ��Ҫ�ŵ���󣬷������������·��
        // {path: '*', component: require('../component/react.jsx').default}
    ]
}