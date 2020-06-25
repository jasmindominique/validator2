class EmailValidator extends Validator {
    constructor(parameters) {
        super(parameters)
        console.log('EmailValidator()', this.options)

        console.log('looking for non-american emails?', this.options.nonAmerican)
    }

    validate = (event) => {
        console.log('emailValidator.validate', event)
        super.validateBefore(event)
        console.log('running validation for EmailValidator', event)

        const value = event.target.value
        console.log('value', value)
        if (/\w+@\w+\.\w+/.test(value)) {
            this.isValid = true
            console.log('valid email!')
        } else {
            this.isValid = false
            console.log('not a valid email')
        }
        super.validateAfter(event)
    }
}
