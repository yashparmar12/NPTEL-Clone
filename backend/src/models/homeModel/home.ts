import mongoose, { Document, Schema } from "mongoose";

// Interface to define the shape of the document
interface HomeModel extends Document {
  // bannerImage: string;
  cartImage: string;
  url: string;
  title: string;
  section: string;
}

const homeSchema = new Schema<HomeModel>({
  // bannerImage: {
  //   type: String,
  // },
  cartImage: {
    type: String,
  },
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  section: {
    type: String,
  },
});

export const HomeModel = mongoose.model<HomeModel>("HomeModel", homeSchema);
