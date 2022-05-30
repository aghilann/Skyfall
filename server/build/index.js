"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || '5000';
// cors
app.use((0, cors_1.default)({ origin: '*' }));
// middleware
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api/users', require('./routes/users'));
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
