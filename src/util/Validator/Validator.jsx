import _ from 'lodash';
import validationRulesFnMapping from './Rules'

const validator = {
    validate: (input,rules)=>{
        let allValidationResult = [];
        _.forEach(rules, (rulePredicate, ruleKey) => {
            let validationRuleFn = validationRulesFnMapping[ruleKey];
            let validateResult = validationRuleFn(input, rulePredicate);
            if (validateResult.valid === false) {
                allValidationResult.push(validateResult.reason);
            }
        });
        return allValidationResult
    }
}

export default validator;
