import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "../../home/Navbar";
import { useEffect, useState } from "react";
import { Flex, Spin } from "antd";
import Footer from "../../home/Footer";

interface ForActive {
  List: boolean;
  Rating: boolean;
}
interface CollegeList {
  CollegeName: string;
  LCId: string;
  State: string;
  Address: string;
  SPOCName: string;
  CoordinatedBy: string;
}
interface SearchResponse {
  clgList: CollegeList[];
}

const LcCollegeList = () => {
  const [isActive, setIsActive] = useState<ForActive>({
    List: true,
    Rating: false,
  });
  const [clgListDetails, setClgListDetails] = useState<CollegeList[]>([]);
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [allLen, setAllLen] = useState(0);
  const [entryPerPage, setEntryPerPage] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedYear, setSelectedYear] = useState(2024);
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

  const SearchTerm = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const val = e.target.value;
    if (val.trim() === "") {
      GetCollegeLists();
    }
    try {
      const response = await fetch(
        "http://localhost:8000/NPTEL/searchCollegeDetails",
        {
          method: "POST",
          body: JSON.stringify({ searchInput: val }),

          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const resData: SearchResponse = await response.json();
      console.log(resData.clgList);
      if (!resData) {
        console.log("Not able to Search Data");
      }
      setClgListDetails(resData.clgList);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const ActiveFunc = (section: string) => {
    if ("List" === section) {
      setIsActive({ List: true, Rating: false });
    } else {
      setIsActive({ List: false, Rating: true });
    }
  };

  const GetCollegeLists = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8000/NPTEL/getCollegeList",
        `http://localhost:8000/NPTEL/getCollegeList?page=${entryPerPage}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const listData = await response.json();
      if (!listData.clgList) {
        console.log("Not able to fetch College List Data");
      }

      setClgListDetails(listData.clgList.listDetail);
      const len = listData.clgList.len / 10;

      setAllLen(len);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const Pagination = async (val: string) => {
    if (val === "next") {
      // setcurrentPage(currentPage + 1);
      if (allLen <= currentPage) {
        return;
      }
      setLoading(true);

      const res = await fetch(
        `http://localhost:8000/NPTEL/getPageCollegeList?page=${
          currentPage + 1
        }`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const pageData = await res.json();

      if (!pageData) {
        console.log("Not able to fetch Pagination Data");
      }
      // console.log(pageData.clgList);
      setClgListDetails(pageData.clgList);
      setcurrentPage((prev) => prev + 1);
      setLoading(false);
    } else if (val === "prev") {
      if (currentPage <= 1) {
        return;
      }
      setLoading(true);

      const res = await fetch(
        `http://localhost:8000/NPTEL/getPageCollegeList?page=${
          currentPage - 1
        }`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const pageData = await res.json();

      if (!pageData) {
        console.log("Not able to fetch Pagination Data");
      }
      setClgListDetails(pageData.clgList);
      setcurrentPage((prev) => prev - 1);
      setLoading(false);
    }
  };

  // const NumberPage = async (num: number) => {
  //   const res = await fetch(
  //     `http://localhost:8000/NPTEL/getPageCollegeList?page=${num}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     }
  //   );

  //   const pageData = await res.json();

  //   if (!pageData) {
  //     console.log("Not able to fetch Pagination Data");
  //   }
  //   setClgListDetails(pageData.clgList);
  // };
  const EntryPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntryPerPage(Number(e.target.value));

    if (e.target.value === "10") {
      setcurrentPage(1);
    } else if (e.target.value === "20") {
      setcurrentPage(2);
    } else if (e.target.value === "50") {
      setcurrentPage(5);
    }
  };

  useEffect(() => {
    setLoading(true);
    GetCollegeLists();
  }, [entryPerPage]);

  return (
    <div>
      <Navbar />

      {loading ? (
        <Flex
          align="center"
          gap="middle"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-400px",
          }}
        >
          <Spin size="large" />
          <h3 style={{ marginTop: "10px" }}>Wait</h3>{" "}
        </Flex>
      ) : isActive.List ? (
        <div>
          <div className="flex flex-col w-full" style={{ marginTop: "-675px" }}>
            <div className="bg-[#4a5568] px-6 py-4 space-y-4">
              <nav className="flex items-center gap-2 text-white/90">
                <Link to="/" className="hover:text-white transition-colors">
                  NPTEL
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link
                  to="/localchapter"
                  className="hover:text-white transition-colors"
                >
                  Local Chapter
                </Link>
              </nav>

              <h1 className="text-2xl md:text-4xl lg:text-4xl text-white">
                Details on SWAYAM-NPTEL Local Chapter
              </h1>
            </div>

            <div className="h-1 bg-yellow-500" />
          </div>

          <section>
            <div className="max-w-[1200px] mx-auto p-4">
              <div className="flex gap-8 border-b mb-6">
                <button
                  style={{ fontWeight: "bold" }}
                  onClick={() => ActiveFunc("List")}
                  className={
                    isActive.List
                      ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                      : "text-gray-600 border-b-2 border-gray-600 pb-2"
                  }
                >
                  List of SWAYAM-NPTEL Local Chapter
                </button>
                <button
                  style={{ fontWeight: "bold" }}
                  onClick={() => ActiveFunc("Rating")}
                  className={
                    isActive.Rating
                      ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                      : "text-gray-600 border-b-2 border-gray-600 pb-2"
                  }
                >
                  Rating of Local Chapter
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="search"
                    // value={searchValue}
                    onChange={SearchTerm}
                    className="pl-8 pr-4 py-2 border rounded-md w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <svg
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <select
                  onChange={EntryPerPage}
                  value={entryPerPage}
                  className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="10">10 entries per page</option>
                  <option value="20">20 entries per page</option>
                  <option value="50">50 entries per page</option>
                </select>
              </div>

              {/* Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 border-b">College Name</th>
                      <th className="text-left p-4 border-b">Id</th>
                      <th className="text-left p-4 border-b">State</th>
                      <th className="text-left p-4 border-b">Address</th>
                      {/* <th className="text-left p-4 border-b">State</th> */}
                      <th className="text-left p-4 border-b">SPOC Name</th>
                      <th className="text-left p-4 border-b">
                        Co-ordinated by
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clgListDetails?.map((clgDetails, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4 border-b">
                          <a href="#" className="text-blue-600 hover:underline">
                            {/* ARUNAI COLLEGE OF ENGINEERING */}
                            {clgDetails.CollegeName}
                          </a>
                        </td>
                        <td className="p-4 border-b">{clgDetails.LCId}</td>
                        <td className="p-4 border-b">{clgDetails.State}</td>
                        <td className="p-4 border-b">{clgDetails.Address}</td>
                        <td className="p-4 border-b">{clgDetails.SPOCName}</td>
                        <td className="p-4 border-b">
                          {clgDetails.CoordinatedBy}
                        </td>
                        {/* <td className="p-4 border-b">IIT MADRAS</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div>
              <ul className="flex space-x-5 justify-center font-[sans-serif]">
                <li
                  onClick={() => Pagination("prev")}
                  className={`flex items-center justify-center w-9 h-9 rounded-md  ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-gray-100 cursor-pointer "
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-gray-400"
                    viewBox="0 0 55.753 55.753"
                  >
                    <path
                      d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                      data-original="#000000"
                    />
                  </svg>
                </li>
              
                <li
                  onClick={() => Pagination("next")}
                  className={`flex items-center justify-center w-9 h-9 rounded-md ${
                    currentPage >= allLen
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-gray-100 cursor-pointer "
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-gray-400 rotate-180"
                    viewBox="0 0 55.753 55.753"
                  >
                    <path
                      d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                      data-original="#000000"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </section>
          
        </div>
      ) : (
        <div>
          <div className="flex flex-col w-full" style={{ marginTop: "-675px" }}>
            <div className="bg-[#4a5568] px-6 py-4 space-y-4">
              <nav className="flex items-center gap-2 text-white/90">
                <Link to="/" className="hover:text-white transition-colors">
                  NPTEL
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link
                  to="/localchapter"
                  className="hover:text-white transition-colors"
                >
                  Local Chapter
                </Link>
              </nav>

              <h1 className="text-2xl md:text-4xl lg:text-4xl text-white">
                Details on SWAYAM-NPTEL Local Chapter
              </h1>
            </div>

            <div className="h-1 bg-yellow-500" />
          </div>

          <section>
            <div className="max-w-[1200px] mx-auto p-4">
              <div className="flex gap-8 border-b mb-6">
                <button
                  style={{ fontWeight: "bold" }}
                  onClick={() => ActiveFunc("List")}
                  className={
                    isActive.List
                      ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                      : "text-gray-600 border-b-2 border-gray-600 pb-2"
                  }
                >
                  List of SWAYAM-NPTEL Local Chapter
                </button>
                <button
                  style={{ fontWeight: "bold" }}
                  onClick={() => ActiveFunc("Rating")}
                  className={
                    isActive.Rating
                      ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                      : "text-gray-600 border-b-2 border-gray-600 pb-2"
                  }
                >
                  Rating of Local Chapter
                </button>
              </div>
            </div>

            <div className="w-full overflow-x-auto bg-gray-200 rounded-lg" style={{marginLeft: "330px", width:"780px",overflow:"hidden"}}>
              <div className="flex min-w-max px-4">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    style={{marginBottom: "-1px", height: "40px", width: "80px"}}
                    className={`px-6 py-2 text-base font-medium transition-colors ${selectedYear === year ?
                      "text-blue-600 bg-white mt-2 mb-4 rounded-md" 
                      : "text-gray-600 hover:text-gray-900 mt-2 mb-4 rounded-md"}`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
        </div>
      )}
      <div style={{ marginTop: "8%" }}>
            <Footer />
          </div>
    </div>
  );
};

export default LcCollegeList;
