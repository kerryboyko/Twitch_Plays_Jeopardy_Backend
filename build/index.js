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
const jeopardyapi_1 = require("./jeopardyapi");
const Categories_1 = __importDefault(require("./database/Categories"));
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cats = yield jeopardyapi_1.getCategories({ count: 5, offset: 0 });
        console.log({ cats });
        yield Categories_1.default.insert(cats);
        for (let i = 0, l = cats.length; i < l; i++) {
            const record = yield Categories_1.default.retrieve(cats[i].id);
            console.log(record);
        }
    }
    catch (err) {
        console.error(err);
    }
});
test();
