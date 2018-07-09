import React from 'react'
import Validator from './Validator'
import _ from 'lodash'

const FormValidator = {
    getValidatedState: (state) => {
        let clonedState = _.cloneDeep(state);
        let valid=true;

        try{
            _.forEach(clonedState.formValidation.requiredValidationFields, (fieldName) => {

                // All rules are validated and result is given back
                let validResult = Validator.validate(clonedState[fieldName], clonedState.formValidation.validationFields[fieldName].rules);

                // if length is more then 0 , i.e validation has failed
                if (validResult.length > 0) {

                    // set overall formvalidation false
                    valid = false;

                    // set current field failed validation
                    clonedState.formValidation.validationFields[fieldName].status = {
                        validateStatus: "error",
                        help: <ul>{(validResult.map((el, index) => {
                            return <li key={fieldName + "_" + index}>{el}</li>
                        }))}</ul>,
                        hasFeedback: true
                    }
                } else {
                    clonedState.formValidation.validationFields[fieldName].status = {
                        validateStatus: "success",
                        help: "",
                        hasFeedback: true
                    }
                }
            });
        }
        catch(e){
            valid = false;

        }
        clonedState.formValidation.valid = valid;
        return clonedState;
    }
}

export default FormValidator;
