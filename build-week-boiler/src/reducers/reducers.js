import {
    TESTING
} from '../actions/actions';

const initialState = {
    testing: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case TESTING:
            return {
                ...state,
                testing: action.payload
            };
        default:
            return state;
    }
}