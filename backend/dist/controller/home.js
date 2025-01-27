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
const homeService_1 = require("../service/homeService");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/home").get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, homeService_1.getHomeData)();
        if (!data || data.length === 0) {
            res.status(404).json({ message: "No data found" });
        }
        else {
            res.status(200).json({
                message: "Successfully Fetched",
                homeData: data,
                success: true,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}));
router.route("/homeDataPost").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        if (!data || data.length === 0) {
            res.status(400).json({
                message: "No data found",
                success: false,
            });
        }
        const result = yield (0, homeService_1.saveHomeData)(data);
        if (!result) {
            res.status(400).json({
                message: "Not able to save data",
                success: false,
            });
        }
        res.status(201).json({
            message: "Home Page Created",
            success: true,
            homeData: result,
        });
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
// export const HomeDataSave = async (req: Request, res: Response) => {
//     const data:HomeData[] = req.body;
//     try {
//         if(!data|| data.length === 0){
//             return res.status(400).json({
//                 message: "No data found",
//                 success: false,
//             });
//         }
//         const result = await saveHomeData(data);
//         if(!result){
//             return res.status(400).json({
//                 message: "Not able to save data",
//                 success: false,
//             });
//         }
//         return res.status(201).json({
//             message: "Home Page Created",
//             success: true,
//             homeData: result
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
