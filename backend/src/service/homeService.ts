import { HomeModel } from '../models/homeModel/home';
import { TestimonialsModel } from '../models/testimonialsModel/testimonials';

interface HomeData {
    cartImage: string;
    url: string;
    title: string;
    section: string;
}
interface Testimonials {
    name: string;
    image: string;
    college: string;
    description: string;
}

export const getHomeData = async (): Promise<HomeData[] | void> => {
    try {
        const homeData = await HomeModel.find();
        return homeData;
    } catch (error) {
        console.log(error);
    }
} 

export const saveHomeData = async (data: HomeData[]): Promise<HomeData[] | void> => {
    try {
        const homeData = await HomeModel.insertMany(data);
        return homeData;
    } catch (error) {
        console.log(error);
    }
} 

export const saveTestimonials = async (data: Testimonials[]): Promise<Testimonials[] | void> => {
    try {
        const testimonialsData = await TestimonialsModel.insertMany(data);
        if(!testimonialsData || testimonialsData.length === 0){
            return [];
        }
        return testimonialsData;
    } catch (error) {
        console.log(error);
    }
} 

export const TogetTestimonials = async (): Promise<Testimonials[] | void> => {
    try {
        const testimonials = await TestimonialsModel.find();
        if(!testimonials || testimonials.length === 0){
            return [];
        }
        return testimonials;
    } catch (error) {
        console.log(error);
    }
} 