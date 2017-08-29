/**
 * Created by xdata on 8/24.
 */
/**
 * Created by xdata on 8/24.
 */
/**
 * Created by xdata on 8/24.
 */
/**
 * Created by xdata on 7/12.
 */
import { connect } from 'react-redux';
function createContainer(mapStateToProps, mapDispatchToProps, component) {
    const connectComponent = connect(mapStateToProps, mapDispatchToProps);
    return component ? connectComponent(component) : connectComponent;
}

const connectComponent = createContainer(
    ({select }) => {
        return {
            select
        }
    }, // mapStateToProps
    require('../action/action').default               // mapActionCreators
);

export default {
    path: 'completed',
    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, connectComponent(require('../component/completed').default))
            }, 'completed')
        }
    }
}
