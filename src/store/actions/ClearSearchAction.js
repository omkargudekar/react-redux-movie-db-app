import * as ActionTypes from './ActionTypes';



const ClearSearchAction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ActionTypes.CLEAR_SEARCH
            });

        } catch (e) {
            console.error(e);
        }
    }
};

export default ClearSearchAction;