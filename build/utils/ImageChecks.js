"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cachedPaths = void 0;
const fs_1 = __importDefault(require("fs"));
const cachedPaths = (req, res) => {
    const directory = process.env.OUTPUTDIR;
    const data = fs_1.default.readdirSync(directory);
    const cache = data.map((d) => {
        return `${process.env.SERVER}/api/cache/${d}`;
    });
    res.status(200).send({
        cache,
    });
};
exports.cachedPaths = cachedPaths;
