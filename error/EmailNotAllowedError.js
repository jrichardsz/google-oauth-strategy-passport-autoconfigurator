var util = require('util');

function EmailNotAllowedError(message) {
        this.name = this.constructor.name;
        this.message = message;
        this.code = "EMAIL_NOT_ALLOWED";
        Error.captureStackTrace(this, this.constructor);
}

util.inherits(EmailNotAllowedError, Error);

module.exports = EmailNotAllowedError;
