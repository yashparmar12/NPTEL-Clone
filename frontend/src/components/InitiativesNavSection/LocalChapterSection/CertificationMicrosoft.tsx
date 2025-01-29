import { useEffect, useState } from "react";

interface TestimonialCards {
  name: string;
  image: string;
  college: string;
  description: string;
}

const CertificationMicrosoft = () => {
  const [cardData, setCardData] = useState<TestimonialCards[]>([]);

  const GetTestimonials = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/NPTEL/getTestimonials",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const res = await response.json();

      if (!res) {
        console.log("Not able to fetch");
      }
      setCardData(res.testimonialsData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetTestimonials();
  }, []);
  return (
    <div>
      <div
        id="ansys"
        className="max-w-4xl mx-auto p-6"
        style={{ marginLeft: "-20px", marginTop: "-93%" }}
      >
        <section>
          <h1
            className="text-2xl font-semibold mb-3"
            style={{ marginTop: "-30px" }}
          >
            Certification courses offered by Industry
          </h1>
          <h1 className="text-gray-900 mt-8 mb-6" style={{ fontSize: "18px" }}>
            MICROSOFT
          </h1>

          <div className="space-y-6" style={{ width: "140%" }}>
            <div>
              <div>
                <h5
                  className="text-gray-600"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  A. Microsoft Learn for Educator program - for
                  faculty/educators
                </h5>
                <div className="list-decimal ml-6 mt-3">
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    The time is dependent on courses selected by faculty to
                    deliver and at what frequency for the batches.
                  </p>
                  <p className="text-gray-600">
                    Educators should register using as an Individual Educator.
                    This option is designed for the individual educator who is
                    looking to build their students’ technical skills. Once
                    verified, they will gain access to the Microsoft curriculum
                    and education materials, the global Microsoft Learn for
                    Educators Teams community, and the benefits of the program.
                  </p>
                </div>
              </div>

              <div>
                <h5
                  className="mt-5 text-gray-600"
                  style={{ fontSize: "18px", fontWeight: "600" }}
                >
                  B. Future Ready Talent Program - for students
                </h5>
                <div className="list-decimal ml-6 mt-3">
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    - a virtual internship that seeks to empower students with
                    in-demand technological skills to drive their career forward
                    and make them the problem solvers.
                  </p>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    - With extensive training of 190+ hours in azure cloud and
                    security skills, the internship will train the students to
                    harness Microsoft Azure and GitHub tools to come up with
                    innovative solutions that deliver real impact.
                  </p>
                  <p
                    className="text-red-500 mt-10"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    MS FRT platform is currently closed. Next chapter if any
                    will be updated here
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6" style={{ width: "140%" }}>
            <h1
              className="text-gray-800 mt-8 mb-5"
              style={{ fontSize: "26px", fontWeight: "400" }}
            >
              Testimonials from NPTEL students who have successfully completed
              MS-FRT program
            </h1>
          </div>
        </section>
      </div>


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cardData.filter((testimonial, index) => index > 5).map((testimonial, index) => (
          <div key={index} className=" overflow-hidden rounded-lg ">
            <div className="bg-slate-700">
              <div className="flex items-center gap-4 p-6">
                <img
                  alt={`Profile picture of ${testimonial.name}`}
                  className="h-16 w-16 rounded-full object-cover"
                  height={64}
                  src={testimonial.image || "/placeholder.svg"}
                  width={64}
                />
                <div className="space-y-1">
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-white/90">{testimonial.college}</p>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-100 p-6">
              <blockquote
                className="relative pl-4 text-gray-700 overflow-y-auto"
                style={{ height: "180px" }}
              >
                {testimonial.description}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationMicrosoft;
