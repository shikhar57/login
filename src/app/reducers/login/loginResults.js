import C from '../../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case C.LOGIN:
            return action.payload;
        default:
            return state
    }
}
