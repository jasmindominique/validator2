"use strict";

new PhoneValidator({
  selector: '[data-validate-phone]',
  nonAmerican: true,
  errorMessage: 'Invalid phone number!'
});
new EmailValidator({
  selector: '[data-validate-email]',
  nonAmerican: true,
  errorMessage: 'Invalid email!'
});
new NameValidator({
  selector: '[data-validate-name]',
  nonAmerican: true,
  errorMessage: 'Invalid name!'
});
//# sourceMappingURL=main.js.map
