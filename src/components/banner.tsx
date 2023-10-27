import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const Banner = () => {
  return (
    <section className={"bg-primary-950 text-primary-50 w-full"}>
      <div className="container  grid items-center justify-items-center grid-cols-1 lg:grid-cols-2 gap-5 mx-auto h-[50vh] lg:h-[100dvh] relative">
        <div className="z-10 w-full space-y-6 pl-14 lg:pl-2 lg:w-3/4">
          <h1 className="font-serif text-6xl font-bold text-white capitalize opacity-90">
            It's not just food, it's an experience.
          </h1>
          <p>
            we are helping you get fresh and delicious food in few minutes by
            using our nice <strong>web</strong> & <strong>app</strong>
          </p>
          <div className="space-x-2.5 pt-4">
            <Link
              className="px-5 py-3 font-medium leading-none transition-colors border border-transparent rounded-sm shadow-sm hover:bg-secondary-600/90 bg-secondary-600"
              href="about-us"
            >
              About Us
            </Link>
            <Link
              className="px-5 py-3 font-medium leading-none transition-colors bg-transparent border rounded-sm shadow-sm hover:bg-primary-50 border-primary-50 text-primary-50 hover:text-primary-900"
              href="food"
            >
              Food
            </Link>
          </div>
          {/* animation div */}
          <div className="absolute rounded-full bg-opacity-5 left-0 top-0 h-[26rem] aspect-square bg-secondary-600 filter bg-blend-multiply blur-2xl animate-blob animation-delay-100" />
          <div className="absolute rounded-full bg-opacity-5 left-40 top-28 h-[25rem] aspect-square bg-ternary-600 filter bg-blend-multiply blur-2xl animate-blob animation-delay-200" />
        </div>
        <div className="relative z-10 hidden w-full h-full lg:block">
          <Image
            className="z-10 object-cover object-center"
            src="/assets/banner.png"
            alt="Banner Image"
            fill
          />
          {/* animation div */}
          <div className="absolute rounded-full h-[30rem] bg-opacity-5 left-0 -top-28 aspect-square bg-secondary-600 filter bg-blend-multiply blur-2xl animate-blob animation-delay-200" />
          <div className="absolute rounded-full bg-opacity-5 left-10 top-24 h-[28rem] aspect-square bg-ternary-600 filter bg-blend-multiply blur-2xl animate-blob animation-delay-100" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
