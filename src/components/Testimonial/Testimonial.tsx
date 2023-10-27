import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Tamim mahmud",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
      review:
        "This is a great app for pizza .I like mostly .They are extremly good work .i hope they will do in future.",
    },
    {
      id: 2,
      name: "Shoyon Ahmed",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      review:
        "This is a great app for pizza .I like mostly .They are extremly good work .i hope they will do in future.",
    },
    {
      id: 3,
      name: "Shakib riyan",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      review:
        "This is a great app for pizza .I like mostly .They are extremly good work .i hope they will do in future.",
    },
    {
      id: 4,
      name: "Morsed Alam",
      image:
        "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      review:
        "This is a great app for pizza .I like mostly .They are extremly good work .i hope they will do in future.",
    },
  ];
  return (
    <div className="mt-8 mb-8 font-primary">
      <h1 className="mb-8 mt-14 text-[2rem] font-bold text-center text-secondary-500 ">
        Client what says!
      </h1>
      <div className="grid grid-cols-1 gap-4 ml-4 mr-6 lg:grid-cols-4">
        {testimonials?.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="w-full max-w-md px-8 py-4 mt-16 text-white rounded-md shadow-lg shadow-primary-700">
              <div className="flex justify-center -mt-16 md:justify-start">
                <Image
                  src={testimonial?.image}
                  alt=""
                  height={200}
                  width={200}
                  className="object-cover w-20 h-20 border-2 rounded-full shadow shadow-primary-500 dark:border-blue-400"
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold dark:text-white md:mt-0">
                User Review
              </h2>

              <p className="mt-2 text-sm dark:text-gray-200">
                {testimonial?.review}
              </p>

              <div className="flex justify-start mt-4">
                <a
                  href="#"
                  className="text-lg font-medium text-secondary-500 dark:text-blue-300"
                  role="link"
                >
                  {testimonial?.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
