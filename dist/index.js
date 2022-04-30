"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const memfs_1 = require("memfs");
const fixture = (config) => {
    const volume = new memfs_1.Volume();
    const fs = (0, memfs_1.createFsFromVolume)(volume);
    const compiler = (0, webpack_1.default)(config);
    compiler.outputFileSystem = (0, memfs_1.createFsFromVolume)(volume);
    compiler.inputFileSystem = (0, memfs_1.createFsFromVolume)(volume);
    return {
        compiler,
        fs,
        volume,
    };
};
exports.default = fixture;
module.exports = fixture;
