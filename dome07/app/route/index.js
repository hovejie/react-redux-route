/**
 * Created by xdata on 8/24.
 */
export default  {
    path: '/',
    // �����
    component: require('../APP').default,
    // ��ʼ·��
    indexRoute: {
        component: require('../component/all.jsx').default
    },
    childRoutes: [
        require('./all').default,
        require('./active').default,
        require('./completed').default,
        // ��·��ƥ������һ��Ҫ�ŵ���󣬷������������·��
        {path: '*', component: require('../component/all.jsx').default}
    ]
};