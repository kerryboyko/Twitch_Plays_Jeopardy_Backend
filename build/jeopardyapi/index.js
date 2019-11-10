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
const axios_1 = __importDefault(require("axios"));
const endpoints_1 = require("./endpoints");
exports.getCategories = ({ count, offset }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(endpoints_1.ENDPOINT.categories, {
            params: { count, offset }
        });
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }
    catch (err) {
        return Promise.reject(err);
    }
});
exports.getClues = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(endpoints_1.ENDPOINT.clues, {
            params
        });
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    }
    catch (err) {
        return Promise.reject(err);
    }
});
exports.default = exports.getCategories;
