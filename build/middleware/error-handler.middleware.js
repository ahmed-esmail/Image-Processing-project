"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_model_1 = require("../models/custom-error.model");
function handleError(err, req, res, next) {
    let customError = err;
    if (!(err instanceof custom_error_model_1.CustomError)) {
        customError = new custom_error_model_1.CustomError('Oh no, this is embarrasing. We are having troubles my friend');
    }
    res.status(customError.status).send(customError);
}
exports.default = handleError;
