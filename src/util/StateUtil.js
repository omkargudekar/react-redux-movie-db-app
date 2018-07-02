import _ from 'lodash';


const StateUtil =  {
    getUpdatedState: (oldState, updatedState) => {
        let copiedState = _.cloneDeep(oldState);
        return {
            ...copiedState,
            ...updatedState
        }
    },
    getUpdatedKeyValueState: (oldState, key, value) => {

        let copiedState = _.cloneDeep(oldState);
        copiedState[key] = value;
        return {
            ...copiedState,
        }
    }
}


export default StateUtil;