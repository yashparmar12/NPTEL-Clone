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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveHomeData = exports.getHomeData = void 0;
const home_1 = require("../models/homeModel/home");
const getHomeData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const homeData = yield home_1.HomeModel.find();
        return homeData;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getHomeData = getHomeData;
const saveHomeData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const homeData = yield home_1.HomeModel.insertMany(data);
        return homeData;
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveHomeData = saveHomeData;
