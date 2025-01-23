import { homeModel } from "../../models/HomeModels/homeModel.js";

export const HomeData = async(req, res) => {
    try {
        const data = await homeModel.find();

        if(!data){
            return res.status(400).json({
                message: "Not able to fetch data",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Successfully Fetched",
            homeData: data,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
}
export const HomeDataSave = async(req, res) => {
    const data = req.body;
    try {
        const result = await homeModel.insertMany(data);
        
        if(!result){
            return res.status(400).json({
                message: "Not able to save data",
                success: false,
            });
        }

        res.status(201).json({
            message: "Home Page Created",
            success: true,
            homeData: result
        })
    } catch (error) {
        console.log(error);
    }
}