"use strict";

import EmailValidator from "email-validator";

console.log(EmailValidator.validate("test"));
console.log(EmailValidator.validate("test@test.com"));