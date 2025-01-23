import { Play } from "lucide-react";

import { useState, useEffect } from "react";

interface FetchedHomeData {
  cartImage: string;
  url: string;
  title: string;
  section: string;
}

const VideoCards = () => {
  const [homeData, setHomeData] = useState<FetchedHomeData[] | null>(null);
  const [isPlaying, setisPlaying] = useState<number>(0);
  // interface VideoCard {
  //   title: string;
  //   thumbnail: string;
  //   playVideo: string;
  //   presenter: string;
  // }

  // const videos: VideoCard[] = [
  //   {
  //     title: "About NPTEL",
  //     thumbnail: "https://img.youtube.com/vi/iaVZAWvrNN0/hqdefault.jpg",
  //     playVideo: "https://www.youtube.com/embed/iaVZAWvrNN0?autoplay=1",
  //     presenter: "MS. Bharathi",
  //   },
  //   {
  //     title: "How does NPTEL certification work?",
  //     thumbnail: "https://img.youtube.com/vi/jbmaoQzewv8/hqdefault.jpg",
  //     playVideo: "https://www.youtube.com/embed/jbmaoQzewv8?autoplay=1",
  //     presenter: "MS. Bharathi",
  //   },
  //   {
  //     title: "NPTEL: Exams and certificates",
  //     thumbnail: "https://img.youtube.com/vi/Zqhzl9E7ekk/hqdefault.jpg",
  //     playVideo: "https://www.youtube.com/embed/Zqhzl9E7ekk?autoplay=1",

  //     presenter: "MS. Bharathi",
  //   },
  //   {
  //     title: "NPTEL - Types of courses, institutes, statistics",
  //     thumbnail: "https://img.youtube.com/vi/tMnlo-P3IzQ/hqdefault.jpg",
  //     playVideo: "https://www.youtube.com/embed/tMnlo-P3IzQ?autoplay=1",

  //     presenter: "MS. Bharathi",
  //   },
  //   {
  //     title: "Reason for doing NPTEL certification courses",
  //     thumbnail: "https://img.youtube.com/vi/RP4_-pTumyo/hqdefault.jpg",
  //     playVideo: "https://www.youtube.com/embed/RP4_-pTumyo?autoplay=1",
  //     presenter: "MS. Bharathi",
  //   },
  //   {
  //     title: "LIVE Problem solving sessions",
  //     thumbnail: "https://img.youtube.com/vi/VRi5Ef7KVnU/hqdefault.jpg",
  //     playVideo:
  //       "https://www.youtube.com/embed/VRi5Ef7KVnU?autoplay=1",

  //     presenter: "MS. Bharathi",
  //   },
  // ];

  const PlayingFun = (index: number) => {
    setisPlaying(index);
  };
  const fetchHomeData = async () => {
    const res = await fetch("http://localhost:8000/NPTEL/home", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (!data.success) {
      console.log("Error in fetching data");
    } else {
      console.log(data);
      setHomeData(data.homeData);
    }
  };
  const getUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <div>
      <div
        className="min-h-screen bg-[#F6ECEC] py-16"
        style={{ marginTop: "-40px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 uppercase">
              ABOUT NPTEL
              <div
                className="h-1 bg-red-600 mx-auto mt-2"
                style={{ width: "200px" }}
              ></div>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData
              ?.filter((video) => video.section === "1")
              .map((video, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg shadow-lg overflow-hidden max-w-xs ml-8 transition-transform transform group-hover:scale-105"
                  style={{ backgroundColor: "#F3F4F6" }}
                >
                  <div className="relative aspect-video ">
                    {isPlaying !== index ? (
                      <img
                        src={video.cartImage}
                        alt={video.title}
                        className="object-cover w-full h-full cursor-pointer"
                      />
                    ) : (
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                      />
                    )}

                    <div onClick={() => PlayingFun(index)}>
                      {isPlaying !== index && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      {homeData && (
                        <img
                          src="https://nptel.ac.in/assets/initiative/channels4_profile.jpg"
                          alt="Presenter"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-[#FDF7F7] py-16 flex items-center justify-center"
        style={{ marginTop: "-40px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{marginTop: "-200px"}}>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 uppercase">
              Meet the NPTEL Learners
              <div
                className="h-1 bg-red-600 mx-auto mt-2"
                style={{ width: "370px" }}
              ></div>
            </h1>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {homeData
                ?.filter((video) => video.section === "2")
                .map((video, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-lg shadow-lg overflow-hidden max-w-xs "
                  >
                    <div className="relative aspect-video">
                      {isPlaying !== index ? (
                        <img
                          src={video.cartImage}
                          alt={video.title}
                          className="object-cover w-full h-full cursor-pointer "
                        />
                      ) : (
                        <iframe
                          src={getUrl(video.url)}
                          title={video.title}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media"
                          frameBorder="0"
                        />
                      )}

                      <div onClick={() => PlayingFun(index)}>
                        {isPlaying !== index && (
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                              <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start space-x-3">
                        {homeData && (
                          <img
                            src="https://nptel.ac.in/assets/initiative/channels4_profile.jpg"
                            alt="Presenter"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        )}
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-[#F6ECEC] py-16"
        style={{ marginTop: "-160px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 uppercase">
            NPTEL Initiatives
              <div
                className="h-1 bg-red-600 mx-auto mt-2"
                style={{ width: "240px" }}
              ></div>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData
              ?.filter((video) => video.section === "3")
              .map((video, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg shadow-lg overflow-hidden max-w-xs ml-8"
                  style={{ backgroundColor: "#F3F4F6" }}
                >
                  <div className="relative aspect-video">
                    {isPlaying !== index ? (
                      <img
                        src={video.cartImage}
                        alt={video.title}
                        className="object-cover w-full h-full cursor-pointer"
                      />
                    ) : (
                      <iframe
                        src={getUrl(video.url)}
                        title={video.title}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                      />
                    )}

                    <div onClick={() => PlayingFun(index)}>
                      {isPlaying !== index && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      {homeData && (
                        <img
                          src="https://nptel.ac.in/assets/initiative/channels4_profile.jpg"
                          alt="Presenter"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-[#FDF7F7] py-16"
        style={{ marginTop: "-5px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 uppercase">
            NPTEL Local Chapters
              <div
                className="h-1 bg-red-600 mx-auto mt-2"
                style={{ width: "320px" }}
              ></div>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeData
              ?.filter((video) => video.section === "4")
              .map((video, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg shadow-lg overflow-hidden max-w-xs ml-8"
                  style={{ backgroundColor: "#F3F4F6" }}
                >
                  <div className="relative aspect-video">
                    {isPlaying !== index ? (
                      <img
                        src={video.cartImage}
                        alt={video.title}
                        className="object-cover w-full h-full cursor-pointer"
                      />
                    ) : (
                      <iframe
                        src={getUrl(video.url)}
                        title={video.title}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                      />
                    )}

                    <div onClick={() => PlayingFun(index)}>
                      {isPlaying !== index && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      {homeData && (
                        <img
                          src="https://nptel.ac.in/assets/initiative/channels4_profile.jpg"
                          alt="Presenter"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default VideoCards;
