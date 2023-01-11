import { createActions } from 'redux-actions';

export const getType = (reduxAction: any) => {
    return reduxAction().type;
}

export const getCategory = createActions({
    getCategoryRequest: undefined,
    getCategorySuccess: (payload) => payload,
    getCategoryFailure: (error) => error,
});
