class NameValidator extends Validator {
    constructor(parameters) {
        super(parameters)
        console.log('NameValidator()', this.options)
        console.log('looking for names', this.options.nonAmerican)
    }
    validate = (event) => {
        console.log('nameValidator.validate', event)
        super.validateBefore(event)
        console.log('running validation for NameValidator', event)
        const value = event.target.value
        console.log('value', value)
        if (/\w+\s.+/.test(value)) {
            this.isValid = true
            console.log('valid name!')
        } else {
            this.isValid = false
            console.log('not a valid name')
        }
        super.validateAfter(event)
    }
}
