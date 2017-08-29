/**
 * Created by xdata on 8/25.
 */
import createContainer  from '../utils/createContainer';
const connectComponent = createContainer(
    ({reactjs }) => ({reactjs}), // mapStateToProps
    require('../redux/action/action').default               // mapActionCreators
);
export default {
    path: 'Redux',
    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, connectComponent(require('../component/redux.jsx').default))
            }, 'Redux')
        }
    }
}