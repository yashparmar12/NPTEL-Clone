import { promises } from 'dns';
import { HomeModel } from '../models/homeModel/home';
import { TestimonialsModel } from '../models/testimonialsModel/testimonials';
import { CollegeListModel } from '../models/LcCollegeListModel/collegeList';

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
interface CollegeList {
    CollegeName:string;
    LCId:string;
    State:string;
    Address:string;
    SPOCName:string;
    CoordinatedBy:string;
  }

export const postCollegeListDetails = async(collegeLists:CollegeList[]): Promise<CollegeList[] | void> => {
    try {
       const list =  await CollegeListModel.insertMany(collegeLists);

       if(!list || list.length === 0){
        return [];
       }
       
       return list;

    } catch (error) {
        console.log(error);
    }
}
interface CollegeListDetails {
    listDetail: CollegeList[];
    len: number;
}

export const getCollegeListDetails = async(entryPErPage:number): Promise<CollegeListDetails | void> => {
    try {
       const list =  await CollegeListModel.find();
       const len = list.length;
       const listDetail = list.slice(0,entryPErPage);


    //    if(!list || list.length === 0){
    //     return [];
    //    }

       return {listDetail,len};

    } catch (error) {
        console.log(error);
    }
}

export const paginationService = async(page:number): Promise<CollegeList[] | void> => {
    try {
        const firstIndex = (page - 1) * 10;
        const lastIndex = firstIndex + 10;

        const list = await CollegeListModel.find().limit(lastIndex);
        // const listLength = await CollegeListModel.find();
        
        if(!list || list.length === 0){
            return [];
        }
        const finalList = list.slice(firstIndex, lastIndex);

        return finalList;


    } catch (error) {
        console.log(error)
    }
}
export const getCollegeListDetailsBySearch = async(searchVal:string): Promise<CollegeList[] | void> => {
    try {
        
       const list =  await CollegeListModel.aggregate([
        {
            $match:{
                $or:[
                    {CollegeName:{$regex: `^${searchVal}`, $options:"i"}},
                    {LCId:{$regex: `^${searchVal}`,$options:"i"}},
                    {State:{$regex: `^${searchVal}`,$options:"i"}},
                    {Address:{$regex: `^${searchVal}`,$options:"i"}},
                    {SPOCName:{$regex: `^${searchVal}`,$options:"i"}},
                    {CoordinatedBy:{$regex: `^${searchVal}`,$options:"i"}},
                ]
            }
        }
       ]);
       if(!list || list.length === 0){
        return [];
       }

       return list;

    } catch (error) {
        console.log(error);
    }
}