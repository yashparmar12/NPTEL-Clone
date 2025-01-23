import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
// import { FileText } from "lucide-react";
import Navbar from "../../home/Navbar";
import localChapter from "/src/assets/localChapterImg.png";
import { useEffect, useState } from "react";

const LocalChapter = () => {
  const [hash, setHashData] = useState<string>(window.location.hash);
  const [hashIdData, setHashIdData] = useState<string>("");
  const [videoOpen, setIsVideoOpen] = useState<{
    video1: boolean;
    video2: boolean;
  }>({
    video1: false,
    video2: false,
  });

  const HelpVideos = (video: "video1" | "video2") => {
    console.log(video);
    setIsVideoOpen((prev) => ({
      ...prev,
      [video]: !prev[video],
    }));
  };

  useEffect(() => {
    const handleHashChange = () => {
      setHashIdData(window.location.hash);
      const currentHash = window.location.hash;
      if (currentHash === "#background" || currentHash === "#semester") {
        setHashData("Local Chapters - Home");
      } else if (
        [
          "#join",
          "#spoc",
          "#for-lc",
          "#help",
          "#contribute",
          "#mentors",
        ].includes(currentHash)
      ) {
        setHashData("Engage with NPTEL");
      } else if (currentHash === "#ansys") {
        setHashData("Certification courses offered by Industry");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div
        style={{ marginTop: "-680px" }}
        className="flex min-h-screen bg-gray-50"
      >
        <aside className="w-64 bg-white h-screen overflow-y-auto border-r shadow-sm">
          <div className="p-4">
            <div className="bg-yellow-100 rounded-lg p-3 mb-6">
              <Link to="/" className="text-lg font-semibold">
                LC Home
              </Link>
            </div>

            <nav className="ml-8 space-y-4">
              <div>
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href="#background"
                      className="block text-gray-600 hover:text-gray-900"
                    >
                      Background
                    </a>
                  </li>
                  <li>
                    <a
                      href="#semester"
                      className="block text-gray-600 hover:text-gray-900 mt-4"
                    >
                      Current Semester
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Engage</h3>
                <div className="space-y-3">
                  <ul className="list-disc pl-5">
                    <li>
                      <a
                        href="#join"
                        className="block text-gray-600 hover:text-gray-900 mt-6"
                      >
                        Join as new LC
                      </a>
                    </li>
                    <li>
                      <a
                        href="#spoc"
                        className="block text-gray-600 hover:text-gray-900 mt-4"
                      >
                        Existing SPOC
                      </a>
                    </li>
                    <li>
                      <a
                        href="#for-lc"
                        className="block text-gray-600 hover:text-gray-900 mt-4"
                      >
                        For LC
                      </a>
                    </li>
                    <li>
                      <a
                        href="#help"
                        className="block text-gray-600 hover:text-gray-900 mt-4"
                      >
                        Help Videos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contribute"
                        className="block text-gray-600 hover:text-gray-900 mt-4"
                      >
                        Contribute
                      </a>
                    </li>
                    <li>
                      <a
                        href="#mentors"
                        className="block text-gray-600 hover:text-gray-900 mt-4"
                      >
                        LC Mentors
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">
                  Certification courses offered by Industry
                </h3>
                <ul className="list-disc pl-5 mt-6">
                  <li>
                    <Link
                      to="#ansys"
                      className="block text-gray-600 hover:text-gray-900 mt-4"
                    >
                      Ansys
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#microsoft"
                      className="block text-gray-600 hover:text-gray-900 mt-4"
                    >
                      MICROSOFT
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">LC College List</h3>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Credit Transfer</h3>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">FDP</h3>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">NPTEL Awareness</h3>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">
                  Soft Skill Training
                </h3>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">
                  SPOC Contribution
                </h3>
              </div>
            </nav>
          </div>
        </aside>

        <main className="flex-1 h-screen overflow-y-auto">
          <header className="bg-[#4a5568] text-white p-6">
            <div className="container">
              <div className="flex items-center gap-2 text-sm mb-2">
                <span>NPTEL</span>
                <ChevronRight className="h-4 w-4" />
                <span>Local Chapter</span>
              </div>
              <h1 className="text-3xl font-semibold">
                {hash === "" ? "Local Chapters - Home" : hash}
              </h1>
            </div>
          </header>

          <div className="container p-6">
            <div
              style={{
                width: "104%",
                marginLeft: "-30px",
                marginTop: "-25px",
              }}
            >
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={localChapter}
                  alt="Handshake representing partnership"
                  // fill
                  className="object-cover"
                />
              </div>

              <div className="aspect-video relative rounded-lg overflow-hidden"></div>
            </div>

            {hashIdData === "" ||
            hashIdData === "#background" ||
            hashIdData === "#semester" ? (
              <div>
                <div
                  className="space-y-6 max-w-4xl"
                  style={{ marginTop: "-92%" }}
                >
                  <h2 className="text-2xl font-semibold" id="background">
                    Background
                  </h2>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ width: "130%" }}
                  >
                    NPTEL has been offering self-study courses across
                    engineering, humanities and science streams for more than a
                    decade. These are available at: http://nptel.ac.in. From
                    March 2014 NPTEL has been offering online certification for
                    its courses, the highlight being the certification exam
                    through which the student gets an opportunity to earn a
                    certificate form the IITs!
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    These are available at:{" "}
                    <Link
                      to="https://swayam.gov.in/NPTEL"
                      className="text-blue-600 hover:underline"
                    >
                      https://swayam.gov.in/NPTEL
                    </Link>
                  </p>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ width: "130%" }}
                  >
                    To take this initiative forward and to encourage more
                    students across colleges to participate in this initiative,
                    we are setting up SWAYAM-NPTEL chapter in colleges (with the
                    approval of the management) which will be under the headship
                    of a faculty member of the college, who would be our Single
                    Point of Contact (SPOC). We will keep the SPOC updated about
                    all the latest NPTEL initiatives and give him information
                    which he can disseminate among the students. He can identify
                    suitable mentors for various courses, who can ensure that
                    students are active in a course, are submitting their
                    assignments on time and also clarify the doubts they may
                    have.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We hope your college would be part of this initiative and
                    thank you for your valuable time.
                  </p>
                </div>

                <div
                  className="max-w-4xl mx-auto p-6"
                  style={{ marginLeft: "-20px" }}
                >
                  <h1 className="text-2xl font-semibold mb-8" id="semester">
                    Current Semester Details - July 2024
                  </h1>

                  <div className="space-y-6" style={{ width: "140%" }}>
                    {/* SPOC Guidelines Panel */}
                    <Link to="/spoc-guidelines" className="block group">
                      <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600  rounded-l-lg" />
                        <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                          SPOC Timelines and Guidelines
                        </h2>
                      </div>
                    </Link>

                    {/* Course List Panel */}
                    <Link to="/course-list" className="block group">
                      <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                        <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                          Course List
                        </h2>
                      </div>
                    </Link>

                    {/* Timelines Panel */}
                    <Link to="/timelines" className="block group">
                      <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                        <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                          Timelines and Guidelines
                        </h2>
                      </div>
                    </Link>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-12 space-y-3 text-gray-600">
                    <p>
                      If you have any queries, please write to us at{" "}
                      <a
                        href="mailto:localchapter@nptel.iitm.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        localchapter@nptel.iitm.ac.in
                      </a>
                    </p>
                    <p>
                      LC helpline mobile number : 7200043633 (Mon-Fri 9am-6pm)
                    </p>
                  </div>
                </div>
              </div>
            ) : hashIdData === "#join" ||
              hashIdData === "#spoc" ||
              hashIdData === "#for-lc" ||
              hashIdData === "#contribute" ||
              hashIdData === "#mentors" ||
              hashIdData === "#help" ? (
              <div>
                <div
                  className="max-w-4xl mx-auto p-6"
                  style={{ marginLeft: "-20px", marginTop: "-93%" }}
                >
                  <section id="join">
                    <h1 className="text-2xl font-semibold mb-3">
                      Join as an NPTEL-SWAYAM Local Chapter
                    </h1>
                    <p className="mb-6 text-gray-700">
                      Please fill the following form
                    </p>

                    <div className="space-y-6" style={{ width: "140%" }}>
                      <Link
                        to="/https://docs.google.com/forms/d/e/1FAIpQLSd54WSY_1Q_quDy3heOLwHyqNm4srpro7egOp9PKaojdX-Dqg/viewform"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600  rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Join as an NPTEL-SWAYAM Local Chapter
                          </h2>
                        </div>
                      </Link>

                      <Link
                        to="https://drive.google.com/file/u/0/d/1jaSJTmUgp3-VbTMbH0iHmrYzygYsDNvR/view?usp=sharing&pli=1"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Booklet about NPTEL
                          </h2>
                        </div>
                      </Link>
                    </div>
                    <div className="mt-6 space-y-3 text-gray-600">
                      {/* <p>
                    Sample Request Letter for establishing SWAYAM-NPTEL Local Chapter. 
                    <a href="https://archive.nptel.ac.in/content/college_assets/spoc_refdocs/Request_letter.pdf" className="text-blue-500" style={{ cursor: "pointer" }}>click here</a>
                    <FileText style={{marginLeft:"68%", marginTop:"-20px"}}/> 
                      
                    </p> */}
                    </div>
                  </section>

                  <section id="spoc">
                    <h1 className="text-2xl font-semibold mb-5 mt-8">
                      Existing SPOC
                    </h1>
                    <div className="space-y-6" style={{ width: "140%" }}>
                      <Link
                        to="https://docs.google.com/forms/d/e/1FAIpQLSelb1X2yjubsDFv2NhVQ9mokrg6kZc342larzUD39uIdG0dTw/viewform"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Change request for LC details
                          </h2>
                        </div>
                      </Link>
                      <Link to="/course-list" className="block group">
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Local Chapter Ratings
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </section>

                  <section id="for-lc">
                    <h1 className="text-2xl font-semibold mb-5 mt-8">For LC</h1>
                    <div className="space-y-6" style={{ width: "140%" }}>
                      <Link
                        to="https://docs.google.com/forms/d/e/1FAIpQLSdoQWbxTUl2J8pp8dbBMkus547j3SU8WEwVDSDz5_oqrrLKsg/closedform"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Support a SPOC for a conference
                          </h2>
                        </div>
                      </Link>
                      <Link to="/course-list" className="block group">
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Internships for toppers in cources with faculty
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </section>

                  <section id="help">
                    <h1
                      className="text-2xl font-semibold mb-5 mt-8"
                      id="semester"
                    >
                      Help Videos
                    </h1>

                    <div>
                      {/* First Video */}
                      <h5
                        className="text-1xl text-gray-700 font-semibold cursor-pointer ml-6"
                        onClick={() => HelpVideos("video1")}
                      >
                        SPOC Login Features in SWAYAM portal
                        <ChevronDown
                          style={{ marginLeft: "70%", marginTop: "-30px" }}
                          className={`h-8 w-6 transition-transform ${
                            videoOpen.video1 ? "rotate-180" : ""
                          }`}
                        />
                      </h5>

                      <hr
                        className="ml-6 border-t-1 border-black"
                        style={{ width: "70%" }}
                      />

                      {videoOpen.video1 && (
                        <div className="ml-4 space-y-2 mt-10 mb-10">
                          <Link
                            className="text-blue-500 hover:text-blue-700 transition duration-300"
                            to="https://www.youtube.com/watch?v=p74BC9gF7lM&feature=youtu.be"
                          >
                            SPOC Login Features in SWAYAM portal - Hindi
                          </Link>
                          <Link
                            className="text-blue-500 hover:text-blue-700 transition duration-300"
                            to="https://www.youtube.com/watch?v=C2EKd_VaP0w&feature=youtu.be"
                          >
                            SPOC Login Features in SWAYAM portal - Marathi
                          </Link>
                        </div>
                      )}

                      {/* Second Video */}
                      <h5
                        className="text-1xl text-gray-700 font-semibold cursor-pointer ml-6 mt-5"
                        onClick={() => HelpVideos("video2")}
                      >
                        SPOC Login Features in Local Chapter portal
                        <ChevronDown
                          style={{ marginLeft: "70%", marginTop: "-30px" }}
                          className={`h-8 w-6 transition-transform ${
                            videoOpen.video2 ? "rotate-180" : ""
                          }`}
                        />
                      </h5>
                      <hr
                        className="ml-6 border-t-1 border-black"
                        style={{ width: "70%" }}
                      />
                      {videoOpen.video2 && (
                        <div className="ml-4 space-y-2 mt-10 mb-10">
                          <Link
                            className="text-blue-500 hover:text-blue-700 transition duration-300"
                            to="https://www.youtube.com/watch?v=lRbD7W2yrIM&feature=youtu.be"
                          >
                            SPOC Login Features in Local Chapter portal - Hindi
                          </Link>
                          <Link
                            className="text-blue-500 hover:text-blue-700 transition duration-300"
                            to="https://www.youtube.com/watch?v=a2W1EW8o2xs&feature=youtu.be"
                          >
                            SPOC Login Features in Local Chapter portal -
                            Marathi
                          </Link>
                        </div>
                      )}
                    </div>
                  </section>

                  <section id="contribute">
                    <h1 className="text-2xl font-semibold mb-5 mt-8">
                      How SPOCs can contribute back to NPTEL
                    </h1>
                    <div className="space-y-6" style={{ width: "140%" }}>
                      <Link
                        to="https://docs.google.com/document/d/e/2PACX-1vSokaOgvcxyANsEeL47TRklQClLaJ8doVwfakGkcJl30zvqEdMoHpiUgYKa_IAHjDOVBMVv5Mjs-UzG/pub"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Exam Observers
                          </h2>
                        </div>
                      </Link>
                      <Link
                        to="https://docs.google.com/forms/d/e/1FAIpQLScFuAtLjtHc39O4IiuXDBrpRN0dpeukPgNmkJVl7qkOr4luow/viewform"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Translation of NPTEL course transcripts
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </section>

                  <section id="mentors">
                    <h1 className="text-2xl font-semibold mb-5 mt-8">
                      LC Mentors
                    </h1>
                    <p
                      style={{ fontSize: "15px" }}
                      className="font-bold mb-3 mt-8"
                    >
                      Who can be a mentor?
                    </p>
                    <p className="text-gray-700" style={{ width: "120%" }}>
                      Any faculty member of a college can be the mentor for a
                      maximum of 2 courses - one mentor for every 50 to 60
                      students. It is mandatory that the mentor be enrolled to
                      the course which he is mentoring. Mentor will be
                      recognized with certificates and recognition on the portal
                      depending on the performance of the students he/she
                      mentored.
                    </p>
                    <div
                      className="space-y-6"
                      style={{ width: "140%", marginTop: "20px" }}
                    >
                      <Link
                        to="https://nptel.ac.in/assets/LC%20page/Mentorship%20Criteria.pdf"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Mentorship Criteria
                          </h2>
                        </div>
                      </Link>
                      <Link
                        to="https://docs.google.com/document/u/2/d/e/2PACX-1vS3UhD40Jti61r1jS86FcQgmnO0hBIjXEqMOQcnCKh3Liqi7kYeH-3DO7bDuEkeBcA3YG48Yjl6wn4b/pub"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            How to add mentor
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </section>

                  {/* Contact Information */}
                  <div className="mt-12 space-y-3 text-gray-600">
                    <p>
                      If you have any queries, please write to us at{" "}
                      <a
                        href="mailto:localchapter@nptel.iitm.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        localchapter@nptel.iitm.ac.in
                      </a>
                    </p>
                    <p>
                      LC helpline mobile number : 7200043633 (Mon-Fri 9am-6pm)
                    </p>
                  </div>
                </div>
              </div>
            ) : hashIdData === "#ansys" ? (
              <div>
                <div
                  className="max-w-4xl mx-auto p-6"
                  // className="max-w-4xl mx-auto p-6"
                  style={{ marginLeft: "-20px", marginTop: "-93%" }}
                >
                  <section id="join">
                    <h1
                      className="text-2xl font-semibold mb-3"
                      style={{ marginTop: "-30px" }}
                    >
                      Ansys Innovation Courses (AIC) - Offer for NPTEL Learners
                    </h1>
                    <h1
                      className="text-gray-900 mt-8 mb-10"
                      style={{ fontSize: "20px" }}
                    >
                      Free track completion badge
                    </h1>

                    <div className="space-y-6" style={{ width: "140%" }}>
                      <div>
                        <div>
                          <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
                            Eligibility:
                          </h5>
                          <ol className="list-decimal ml-6 mt-3">
                            <li
                              className="text-gray-900"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              NPTEL learners of Elite/Silver/Gold/Topper
                              category of 20 selected NPTEL courses will be
                              awarded with a free track completion badge worth
                              12,000 INR on completion of the associated mapped
                              Ansys track of courses.
                            </li>
                            <li
                              className="text-gray-900"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              Please fill out the interest form -{" "}
                              <a
                                href="https://forms.gle/XNebErybBXpdms6S9"
                                className="text-blue-500 cursor-pointer"
                              >
                                https://forms.gle/XNebErybBXpdms6S9
                              </a>
                            </li>
                            <li style={{ fontFamily: "sans-serif" }}>
                              Eligible NPTEL Elite learners will be provided a
                              coupon by NPTEL to earn a free badge after
                              submission of the screenshot of Ansys Track
                              completion.
                            </li>
                          </ol>
                        </div>

                        <div>
                          <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
                            Product and benefits:
                          </h5>
                          <ol className="list-decimal ml-6 mt-3">
                            <li
                              className="text-gray-900"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              Digital badge contains verified metadata that
                              describes user participation in the specific
                              learning track consisting of multiple courses.
                            </li>
                            <li
                              className="text-gray-900"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              A track completion digital badge allows user to
                              showcase his or her expertise and get recognized
                              globally via online platforms.
                            </li>
                            <li style={{ fontFamily: "sans-serif" }}>
                              Digital badges can be used in email signatures,
                              digital resumes, social and professional media.
                            </li>
                          </ol>
                        </div>
                      </div>

                      <Link
                        to="https://drive.google.com/file/u/0/d/1jaSJTmUgp3-VbTMbH0iHmrYzygYsDNvR/view?usp=sharing&pli=1"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Booklet about NPTEL
                          </h2>
                        </div>
                      </Link>
                    </div>
                    <div className="mt-6 space-y-3 text-gray-600"></div>
                  </section>

                  <section id="spoc">
                    <h1 className="text-2xl font-semibold mb-5 mt-8">
                      Existing SPOC
                    </h1>
                    <div className="space-y-6" style={{ width: "140%" }}>
                      <Link
                        to="https://docs.google.com/forms/d/e/1FAIpQLSelb1X2yjubsDFv2NhVQ9mokrg6kZc342larzUD39uIdG0dTw/viewform"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Change request for LC details
                          </h2>
                        </div>
                      </Link>
                      <Link to="/course-list" className="block group">
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Local Chapter Ratings
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </section>

                  <section id="for-lc">
                    <h1 className="text-2xl font-semibold mb-5 mt-8">For LC</h1>
                    <div className="space-y-6" style={{ width: "140%" }}>
                      <Link
                        to="https://docs.google.com/forms/d/e/1FAIpQLSdoQWbxTUl2J8pp8dbBMkus547j3SU8WEwVDSDz5_oqrrLKsg/closedform"
                        className="block group"
                      >
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Support a SPOC for a conference
                          </h2>
                        </div>
                      </Link>
                      <Link to="/course-list" className="block group">
                        <div className="relative bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-l-lg" />
                          <h2 className="text-lg text-gray-700 group-hover:text-gray-900">
                            Internships for toppers in cources with faculty
                          </h2>
                        </div>
                      </Link>
                    </div>
                  </section>

                  {/* Contact Information */}
                  <div className="mt-12 space-y-3 text-gray-600">
                    <p>
                      If you have any queries, please write to us at{" "}
                      <a
                        href="mailto:localchapter@nptel.iitm.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        localchapter@nptel.iitm.ac.in
                      </a>
                    </p>
                    <p>
                      LC helpline mobile number : 7200043633 (Mon-Fri 9am-6pm)
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

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
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-gray-800"
                  >
                    Documents
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-gray-800"
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-gray-800"
                  >
                    Help Videos
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-gray-800"
                  >
                    Live Sessions
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-gray-800"
                  >
                    Code of Conduct
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-gray-800"
                  >
                    NPTEL Hard-disk
                  </a>
                  <a
                    href="#"
                    className="block text-gray-400 hover:text-gray-800"
                  >
                    Information on NPTEL semesters
                  </a>
                </div>

                {/* Middle Column - License Info */}
                <div className="space-y-4">
                  <p className="text-black">Distributed under</p>
                  <p className="text-black" style={{ marginTop: "3px" }}>
                    Creative Commons Attribution-ShareAlike
                  </p>
                  <p
                    className="text-black font-bold"
                    style={{ marginTop: "3px" }}
                  >
                    CC BY - NC - SA
                  </p>
                  <div className="my-4">
                    <img
                      src="https://nptel.ac.in/assets/footer/by-nc-sa.svg"
                      alt="Creative Commons License"
                      width={150}
                      height={40}
                      className="my-4"
                    />
                  </div>
                  <p className="text-black font-normal">AMAeSI</p>
                </div>

                {/* Right Column - Contact Info */}
                <div>
                  <h3 className="text-gray-700 mb-4">Contact Us</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      For any queries regarding the NPTEL website, availability
                      of courses or issues in accessing courses, please contact
                    </p>
                    <p>NPTEL Administrator,</p>
                    <p>IC & SR, 3rd floor</p>
                    <p>IIT Madras, Chennai - 600036</p>
                    <p>
                      Tel : (044) 2257 5905, (044) 2257 5908, 9363218521
                      (Mon-Fri 9am-6pm)
                    </p>
                    <p>
                      Email :{" "}
                      <a
                        href="mailto:support@nptel.iitm.ac.in"
                        className="text-blue-600 hover:underline"
                      >
                        support@nptel.iitm.ac.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section with Copyright and Social Links */}
              <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-500 text-sm">
                    © - 2022 All rights reserved
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://www.facebook.com/NPTELNoc/"
                      className="text-[#8B8B9F] hover:text-gray-600"
                    >
                      <div className="bg-[#F8F8FF] p-2 rounded-lg">
                        <img
                          src="https://nptel.ac.in/assets/footer/Facebook.svg"
                          alt="Facebook Icon"
                          className="h-5 w-5"
                        />
                      </div>
                    </a>
                    <a
                      href="https://x.com/nptel_official"
                      className="text-[#8B8B9F] hover:text-gray-600"
                    >
                      <div className="bg-[#F8F8FF] p-2 rounded-lg">
                        <img
                          src="https://nptel.ac.in/assets/footer/Twitter.png"
                          className="h-5 w-5"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/nptel_india/"
                      className="text-[#8B8B9F] hover:text-gray-600"
                    >
                      <div className="bg-[#F8F8FF] p-2 rounded-lg">
                        <img
                          src="https://nptel.ac.in/assets/footer/Instagram.svg"
                          className="h-5 w-5"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/nptel/"
                      className="text-[#8B8B9F] hover:text-gray-600"
                    >
                      <div className="bg-[#F8F8FF] p-2 rounded-lg">
                        <img
                          src="https://nptel.ac.in/assets/footer/LinkedIn.svg"
                          className="h-5 w-5"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/user/nptelhrd"
                      className="text-[#8B8B9F] hover:text-gray-600"
                    >
                      <div className="bg-[#F8F8FF] p-2 rounded-lg">
                        <img
                          src="https://nptel.ac.in/assets/footer/Youtube.svg"
                          className="h-5 w-5"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LocalChapter;
