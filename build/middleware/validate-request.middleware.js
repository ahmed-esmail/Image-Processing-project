"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateParams = (req, res, next) => {
    const queryParams = req.query;
    const requiredParams = ['filename', 'height', 'width'];
    for (let i = 0; i < requiredParams.length; i++) {
        if (!queryParams[requiredParams[i]]) {
            res.status(400).send('Missing Parameter(s)');
            return;
        }
        else if (requiredParams[i] === 'filename' && typeof requiredParams[i] !== 'string') {
            res.status(400).send('Filename must be a string');
            return;
        }
        else if (requiredParams[i] == 'height' || requiredParams[i] == 'width') {
            const num = Number(queryParams[requiredParams[i]]);
            if (!num) {
                res.status(400).send('width and height must be numbers');
                return;
            }
            else if (num <= 0) {
                res.status(400).send('width and height must be positive numbers');
                return;
            }
        }
    }
    next();
};
exports.default = validateParams;
