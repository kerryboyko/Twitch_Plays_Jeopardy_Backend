"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
const connect = () => new Promise((resolve, reject) => {
    const client = new mongodb_1.MongoClient(config_1.MONGO_URL);
    client.connect(err => {
        if (err) {
            reject(err);
        }
        const db = client.db(config_1.DB_NAME);
        resolve({ db, closeDb: () => client.close() });
    });
});
exports.default = connect;
