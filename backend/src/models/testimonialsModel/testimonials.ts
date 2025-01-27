import mongoose, {Document, Schema} from "mongoose";

interface Testimonials extends Document {
    name: string;
    image: string;
    college: string;
    description: string;
}

const testimonials = new mongoose.Schema<Testimonials>({
    name:{
        type: String,
    },
    image:{
        type: String,
    },
    college:{
        type: String,
    },
    description:{
        type: String,
    }
})

export const TestimonialsModel = mongoose.model<Testimonials>("TestimonialsModel", testimonials);