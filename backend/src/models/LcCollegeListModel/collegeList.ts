import mongoose, {Document} from "mongoose";


interface CollegeList {
    CollegeName:string;
    LCId:string;
    State:string;
    Address:string;
    SPOCName:string;
    CoordinatedBy:string;
}

const collegeList = new mongoose.Schema<CollegeList>({
    CollegeName: {
        type:String,
    },
    LCId: {
        type:String,
    },
    State: {
        type:String,
    },
    Address: {
        type:String,
    },
    SPOCName: {
        type:String,
    },
    CoordinatedBy: {
        type:String,
    },
})

export const CollegeListModel = mongoose.model<CollegeList>("CollegeListModel", collegeList);