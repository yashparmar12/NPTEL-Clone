import { ArrowUpRight } from "lucide-react";
import downGif from "/src/assets/downGif.gif";
import VideoCards from "./VideoCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      <Navbar />
      <div style={{marginTop:"-680px"}}>
        <img src="https://nptel.ac.in/assets/initiative/initiative-banner.jpg" />
      </div>
      <div className="bg-white py-24">
        <div
          className="max-w-4xl mx-auto text-center px-4"
          style={{ marginTop: "-40px" }}
          
        >
          <h2 className="text-4xl font-serif italic text-gray-900 mb-8 font-semibold">
            A New Education for a <br />
            Changing World
          </h2>
          <div className="flex justify-center items-center">
            <p className="text-lg text-blacl-600 mb-8">
              See our playlist here{" "}
            </p>
            <img
              className="mb-7 ml-3 border-2 border-gray-500 rounded-full"
              alt="GIF"
              src={downGif}
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div className="flex justify-center items-center">
            <a href="https://www.youtube.com/playlist?list=PLbMVogVj5nJQlM4LQYETolkNTlO2_BC1G" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold rounded-full text-lg flex items-center">
              Youtube Playlist
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <VideoCards />
      <Footer />
    </div>
  );
};

export default HomePage;
