"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processImage = void 0;
const path_1 = __importDefault(require("path"));
const FileExists_1 = require("../utils/FileExists");
const ResizeImage_1 = require("../utils/ResizeImage");
const processImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filename, width, height } = req.query;
        const qFileName = filename;
        const qHeight = height
            ? parseInt(height, 10)
            : null;
        const qWidth = width ? parseInt(width, 10) : null;
        const options = {
            root: path_1.default.join('./output'),
        };
        const imgPath = `${qFileName}.png`;
        const resizedImgFileName = `resized-${qFileName}${qWidth}x${qHeight}.png`;
        const isImageExists = yield (0, FileExists_1.fileExists)(path_1.default.join('./images', imgPath));
        const resizedImgExists = yield (0, FileExists_1.fileExists)(path_1.default.join('./output', resizedImgFileName));
        if (resizedImgExists) {
            res
                .status(200)
                .sendFile(`resized-${qFileName}${qWidth}x${qHeight}.png`, options, (err) => {
                if (err)
                    console.log(err);
            });
        }
        if (isImageExists) {
            yield (0, ResizeImage_1.resizeImage)(imgPath, qWidth, qHeight, qFileName);
            res
                .status(200)
                .sendFile(`resized-${qFileName}${qWidth}x${qHeight}.png`, options, (err) => {
                if (err)
                    console.log(err);
            });
        }
        else {
            res.status(400).send(`image not found`);
        }
    }
    catch (e) {
        res.status(500).send('error happened while processing your request');
        console.log(e);
    }
});
exports.processImage = processImage;
