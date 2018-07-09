const validationRulesFnMapping = {
    minLen: (input, rulePredicate) => {
        if (input.trim().length < rulePredicate) {
            return {
                valid: false,
                reason: 'length is less than ' + rulePredicate
            }
        }
        return {
            valid: true
        }
    },
    required: (input, rulePredicate) => {
        if (rulePredicate === true && !input) {
            return {
                valid: false,
                reason: 'Required field'
            }
        }
        return {
            valid: true
        }
    }

}

export default validationRulesFnMapping;