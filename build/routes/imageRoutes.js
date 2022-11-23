"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const processImage_1 = require("../controllers/processImage");
const validate_request_middleware_1 = __importDefault(require("../middleware/validate-request.middleware"));
const ImageChecks_1 = require("../utils/ImageChecks");
const ViewCachedPics_1 = require("../controllers/ViewCachedPics");
const imageRouter = express_1.default.Router();
imageRouter.get('/api/resizeImage', validate_request_middleware_1.default, processImage_1.processImage);
imageRouter.get('/api/cache', ImageChecks_1.cachedPaths);
imageRouter.get('/api/cache/:fileName', ViewCachedPics_1.ViewCachedPics);
exports.default = imageRouter;
