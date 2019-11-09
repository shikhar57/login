import C from '../../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case C.DASHBOARD_DETAILS:
            return action.payload;
        default:
            return state
    }
}
