import mongoose from "mongoose";

const homeModels = new mongoose.Schema({
    bannerImage: {
        type: String
    },
    cartImage: {
        type: String
    },
    url: {
        type: String
    },
    title: {
        type: String
    },
    section: {
        type: String
    },
})

export const homeModel = mongoose.model("homeModel", homeModels)