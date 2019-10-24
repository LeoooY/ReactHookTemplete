import * as actionTypes from './types';

export const example=somedata=>({
    type: actionTypes.EXAMPLE,
    data: {
        somedata,
    }
})