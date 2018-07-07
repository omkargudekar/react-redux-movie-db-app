import _ from 'lodash';
import validationRulesFnMapping from './Rules'

const validator=(input,validationRules)=>{
    let validationFailureReasons=[];
    _.forEach(validationRules,(value,key)=>{
           let validateResult = validationRulesFnMapping[key](input,value);
            if (validateResult.valid===false){
                validationFailureReasons.push(validateResult.reason);
            }
    });

    return {
        valid: (validationFailureReasons.length===0),
        validationResult: validationFailureReasons
    }
}

export default validator;