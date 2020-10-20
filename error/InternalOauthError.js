var util = require('util');

function InternalOauthError(message) {
        this.name = this.constructor.name;
        this.message = message;
        this.code = "EMAIL_NOT_ALLOWED";
        Error.captureStackTrace(this, this.constructor);
}

util.inherits(InternalOauthError, Error);

module.exports = InternalOauthError;
