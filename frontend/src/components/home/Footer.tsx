
const Footer = () => {
  return (
    <div>
        <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Links */}
        <div className="space-y-3">
          <a href="/" className="block mb-6">
            <img
              src="https://nptel.ac.in/assets/shared/logo-d.jpg"
              alt="NPTEL Logo"
              width={100}
              height={20}
              className="h-6 w-auto"
            />
          </a>
          <a href="#" className="block text-gray-400 hover:text-gray-800">
            Documents
          </a>
          <a href="#" className="block text-gray-400 hover:text-gray-800">
            Careers
          </a>
          <a href="#" className="block text-gray-400 hover:text-gray-800">
            Help Videos
          </a>
          <a href="#" className="block text-gray-400 hover:text-gray-800">
            Live Sessions
          </a>
          <a href="#" className="block text-gray-400 hover:text-gray-800">
            Code of Conduct
          </a>
          <a href="#" className="block text-gray-400 hover:text-gray-800">
            NPTEL Hard-disk
          </a>
          <a href="#" className="block text-gray-400 hover:text-gray-800">
            Information on NPTEL semesters
          </a>
        </div>

        {/* Middle Column - License Info */}
        <div className="space-y-4">
          <p className="text-black" >Distributed under</p>
          <p className="text-black" style={{marginTop:"3px"}}>Creative Commons Attribution-ShareAlike</p>
          <p className="text-black font-bold" style={{marginTop:"3px"}}>CC BY - NC - SA</p>
          <div className="my-4">
            <img src="https://nptel.ac.in/assets/footer/by-nc-sa.svg" alt="Creative Commons License" width={150} height={40} className="my-4" />
          </div>
          <p className="text-black font-normal">AMAeSI</p>
        </div>

        {/* Right Column - Contact Info */}
        <div>
          <h3 className="text-gray-700 mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-600">
            <p>
              For any queries regarding the NPTEL website, availability of courses or issues in accessing courses,
              please contact
            </p>
            <p>NPTEL Administrator,</p>
            <p>IC & SR, 3rd floor</p>
            <p>IIT Madras, Chennai - 600036</p>
            <p>Tel : (044) 2257 5905, (044) 2257 5908, 9363218521 (Mon-Fri 9am-6pm)</p>
            <p>
              Email :{" "}
              <a href="mailto:support@nptel.iitm.ac.in" className="text-blue-600 hover:underline">
                support@nptel.iitm.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Copyright and Social Links */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© - 2022 All rights reserved</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/NPTELNoc/" className="text-[#8B8B9F] hover:text-gray-600">
              <div className="bg-[#F8F8FF] p-2 rounded-lg">
              <img src="https://nptel.ac.in/assets/footer/Facebook.svg" alt="Facebook Icon" className="h-5 w-5"/>
              </div>
            </a>
            <a href="https://x.com/nptel_official" className="text-[#8B8B9F] hover:text-gray-600">
              <div className="bg-[#F8F8FF] p-2 rounded-lg">
                <img src="https://nptel.ac.in/assets/footer/Twitter.png" className="h-5 w-5" />
              </div>
            </a>
            <a href="https://www.instagram.com/nptel_india/" className="text-[#8B8B9F] hover:text-gray-600">
              <div className="bg-[#F8F8FF] p-2 rounded-lg">
                <img src="https://nptel.ac.in/assets/footer/Instagram.svg" className="h-5 w-5" />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/nptel/" className="text-[#8B8B9F] hover:text-gray-600">
              <div className="bg-[#F8F8FF] p-2 rounded-lg">
                <img src="https://nptel.ac.in/assets/footer/LinkedIn.svg" className="h-5 w-5" />
              </div>
            </a>
            <a href="https://www.youtube.com/user/nptelhrd" className="text-[#8B8B9F] hover:text-gray-600">
              <div className="bg-[#F8F8FF] p-2 rounded-lg">
                <img src="https://nptel.ac.in/assets/footer/Youtube.svg" className="h-5 w-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer


