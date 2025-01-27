// import mongoose from "mongoose";

// const DB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI || "");
//         console.log("MongoDB Connected Successfully")
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default DB;

import mongoose from "mongoose";

const DB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
};

export default DB;
