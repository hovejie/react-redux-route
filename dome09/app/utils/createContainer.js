import { connect } from 'react-redux';

/**
 * ��չʾ�������������
 * @param  {Function} mapStateToProps
 * @param  {Object}   mapDispatchToProps
 * @param  {component}
 * @return {Connect : Container}
 */
export default function createContainer(mapStateToProps, mapDispatchToProps, component) {
    const connectComponent = connect(mapStateToProps, mapDispatchToProps);
    return component ? connectComponent(component) : connectComponent;
}
