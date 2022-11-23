"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_middleware_1 = __importDefault(require("./middleware/error-handler.middleware"));
const helmet_1 = __importDefault(require("helmet"));
const imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
require('dotenv').config();
const App = (0, express_1.default)();
const PORT = process.env.PORT != null || 3000;
App.listen(PORT, () => {
    console.log(`server Running on port http://localhost:${PORT}`);
});
App.use(express_1.default.json());
App.use((0, helmet_1.default)());
App.use(imageRoutes_1.default);
App.use('/', (req, res) => {
    res.send(`<h1>Welcome To Image Processing Api</h1>`);
});
//  for unhandled routes
App.use((request, response) => {
    response.send('Their is no page for this route');
});
App.use(error_handler_middleware_1.default);
exports.default = App;
