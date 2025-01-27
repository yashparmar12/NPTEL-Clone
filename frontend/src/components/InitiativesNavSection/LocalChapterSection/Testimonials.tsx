// import { useEffect } from "react"

interface TestimonialCards {
  name: string;
  image: string;
  college: string;
  description: string;
}
const Testimonials = ({ Data }: { Data: TestimonialCards[] }) => {
  console.log(Data);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {Data.map((testimonial, index) => (
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
                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                <p className="text-sm text-white/90">{testimonial.college}</p>
              </div>
            </div>
          </div>
          <div className="relative bg-gray-100 p-6">
            {/* <div className="absolute left-6 top-4 text-4xl text-gray-300">"</div> */}
            <blockquote
              className="relative pl-4 text-gray-700 overflow-y-auto"
              style={{ height: "180px" }}
            >
              {testimonial.description}
            </blockquote>
            {/* <div className="absolute bottom-4 right-6 text-4xl text-gray-300">"</div> */}
          </div>
        </div>
      ))}
    </div>
    //     <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    //   {Data.map((Data, index) => (
    //     <div key={index} className="overflow-hidden rounded-lg bg-slate-700">
    //       <div className="flex items-center gap-4 p-6">
    //         <img
    //           alt={`Profile picture of ${Data.name}`}
    //           className="h-16 w-16 rounded-full object-cover"
    //           height={64}
    //           src={Data.image || "/placeholder.svg"}
    //           width={64}
    //         />
    //         <div className="space-y-1">
    //           <h3 className="font-semibold text-white">{Data.name}</h3>
    //           <p className="text-sm text-white/90">{Data.college}</p>
    //         </div>
    //       </div>
    //       <div className="relative bg-gray-100 p-6">
    //         <div className="absolute left-6 top-4 text-4xl text-gray-300">"</div>
    //         <blockquote className="relative pl-4 text-gray-700">{Data.description}</blockquote>
    //         <div className="absolute bottom-4 right-6 text-4xl text-gray-300">"</div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Testimonials;
