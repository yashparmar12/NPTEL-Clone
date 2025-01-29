import { getHomeData, saveHomeData, saveTestimonials,TogetTestimonials, postCollegeListDetails, getCollegeListDetails, getCollegeListDetailsBySearch, paginationService } from "../service/homeService";
import { Request, Response } from "express";
import express from "express";
const router = express.Router();


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

router.route("/home").get(async (req: Request, res: Response) => {
  try {
    const data = await getHomeData();

    if (!data || data.length === 0) {
      res.status(404).json({ message: "No data found" });
    } else {
      res.status(200).json({
        message: "Successfully Fetched",
        homeData: data,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.route("/homeDataPost").post(async (req: Request, res: Response) => {
  const data: HomeData[] = req.body;
  try {
    if (!data || data.length === 0) {
      res.status(400).json({
        message: "No data found",
        success: false,
      });
    }
    const result = await saveHomeData(data);

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
  } catch (error) {
    console.log(error);
  }
});

router.route("/postTestimonials").post(async (req: Request, res: Response) => {
  const data: Testimonials[] = req.body;
  try {
    if (!data || data.length === 0) {
      res.status(400).json({
        message: "No data found",
        success: false,
      });
    }
    const result = await saveTestimonials(data);

    if (!result) {
      res.status(400).json({
        message: "Not able to save data",
        success: false,
      });
    }

    res.status(201).json({
      message: "Home Page Created",
      success: true,
      testimonialsData: result,
    });
  } catch (error) {
    console.log(error);
  }
});


router.route("/getTestimonials").get(async (req: Request, res: Response) => {
  try {
      const data = await TogetTestimonials();
      if (!data || data.length === 0) {
        res.status(400).json({
          message: "No data found",
          success: false,
        });
      }

   

    res.status(201).json({
      message: "Home Page Created",
      success: true,
      testimonialsData: data,
    });
  } catch (error) {
    console.log(error);
  }
});

interface CollegeList {
  CollegeName:string;
  LCId:string;
  State:string;
  Address:string;
  SPOCName:string;
  CoordinatedBy:string;
}

router.route("/postCollegeList").post(async (req: Request, res: Response) => {
  try {
    const data:CollegeList[] = req.body;
    if (!data || data.length === 0) {
      res.status(400).json({
        message: "No data found",
        success: false,
      });
    }
      
    const resData = await postCollegeListDetails(data);

    if (!resData || resData.length === 0) {
      res.status(400).json({
        message: "No able to save data",
        success: false,
      });
    }
   
    res.status(201).json({
      message: "Home Page Created",
      success: true,
      clgList: resData,
    });
  } catch (error) {
    console.log(error);
  }
});
// interface CollegeListDetails {
//   listDetail: CollegeList[];
//   len: number;
// }
router.route("/getCollegeList").get(async (req: Request, res: Response) => {
  try {
    const entryPErPage = parseInt(req.query.page as string);
    const detail = await getCollegeListDetails(entryPErPage);
    if (!detail || detail.listDetail.length === 0) {
      res.status(400).json({
        message: "No data found",
        success: false,
      });
      return ;
    }
   
    res.status(200).json({
      message: "College List Fetched Successfully",
      success: true,
      clgList: detail,
    });
  } catch (error) {
    console.log(error);
  }
});
router.route("/searchCollegeDetails").post(async (req: Request, res: Response):Promise<void> => {
  try {
    const searchVal:string = req.body.searchInput;

    const data = await getCollegeListDetailsBySearch(searchVal);
    // if (!data || data.length === 0) {
    //    res.status(400).json({
    //     message: "No data found",
    //     success: false,
    //   });
    //    return;
    // }
   
    res.status(200).json({
      message: "College List Fetched Successfully",
      success: true,
      clgList: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
});

router.route("/getPageCollegeList").get(async (req: Request, res: Response):Promise<void> => {
  try {
    const pageNumber = parseInt(req.query.page as string);
    const result = await paginationService(pageNumber);
    

    res.status(200).json({
      message: "College List Fetched Successfully",
      success: true,
      clgList: result,
    });

  } catch (error) {
    console.log(error)
  }
})

export default router;
