// import React from "react";
// import img1 from "../assets/branch.jpg";
// import img2 from "../assets/branch1.jpg";
// import img3 from "../assets/branch.jpg";
// import Image from "next/image";

// const Branch = () => {
//   const branches = [
//     {
//       id: 1,
//       name: "khulsi,chittagong",
//       road: "akh hamid road",
//       mobile: "01914567389",
//       open: "3pm to 9pm",
//       image: img1,
//     },
//     {
//       id: 2,
//       name: "jaflong,sylhet",
//       road: "mostafa hakim road",
//       mobile: "01723412894",
//       open: "10am to 9pm",
//       image: img2,
//     },
//     {
//       id: 3,
//       name: "gulshan,dhaka",
//       road: "msk road dhaka",
//       mobile: "01864738293",
//       open: "3pm to 9pm",
//       image: img3,
//     },
//   ];
//   return (
//     <section>
//       <div className="grid grid-cols-1 gap-8 ml-8 mr-8 lg:grid-cols-3">
//         {branches?.map((branch) => (
//           <div key={branch?.id} branch={branch}>
//             <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
//               <Image
//                 className="object-cover w-full h-56"
//                 src={branch?.image}
//                 alt="avatar"
//                 height={500}
//                 width={500}
//               />

//               <div className="py-5 text-center">
//                 <a
//                   href="#"
//                   className="block text-xl font-bold text-gray-800 dark:text-white"
//                   role="link"
//                 >
//                  Branch {branch?.name}
//                 </a>
//                 <p>{branch?.road}</p>
//                 <p>{branch?.open}</p>
//                 <p>{branch?.mobile}</p>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Branch;
