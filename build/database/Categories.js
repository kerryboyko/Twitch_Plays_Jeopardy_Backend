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
const connect_1 = __importDefault(require("./connect"));
exports.insertCategories = (categories) => __awaiter(void 0, void 0, void 0, function* () {
    const { db, closeDb } = yield connect_1.default();
    const response = yield db
        .collection("categories")
        .insertMany(categories)
        .then(closeDb)
        .catch(err => {
        closeDb();
        throw new Error(err);
    });
    return response;
});
exports.retrieveCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const { db, closeDb } = yield connect_1.default();
    const response = yield db
        .collection("categories")
        .findOne({ id: categoryId })
        .then(doc => {
        closeDb();
        return doc;
    })
        .catch(err => {
        closeDb();
        throw new Error(err);
    });
    return response;
});
exports.default = {
    insert: exports.insertCategories,
    retrieve: exports.retrieveCategory
};
