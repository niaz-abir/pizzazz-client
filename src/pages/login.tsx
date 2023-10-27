import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Image from "next/image";
import image2 from "../assets/login.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import Link from "next/link";
import { useRouter } from "next/router";
type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      router.push("/");
    } catch (error) {
      console.error("Error signing in with email and password:", error.message);
    }
    console.log(data);
  };
  return (
    <section className="mt-8 lg:mt-24">
      <div className="flex flex-col items-center justify-center gap-14 lg:flex-row">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name input */}
            <div className="mb-4">
              <label className="block text-[17px] font-bold text-secondary-500 mb-2">
                Name
              </label>

              <input
                type="name"
                placeholder="name"
                className=" block text-white w-full placeholder-slate-50 border-b border-red-500 bg-primary-400 px-5 py-2.5 text-white-700 focus:border-ternary-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
                {...register("name")}
              />
            </div>
            {/* address */}
            <div className="mb-4">
              <label className="block text-[17px] font-bold text-secondary-500 mb-2">
                email
              </label>

              <input
                type="email"
                placeholder="email"
                className=" block text-white w-full placeholder-slate-50 border-b border-red-500 bg-primary-400 px-5 py-2.5 text-white-700 focus:border-ternary-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
                {...register("email")}
              />
            </div>

            {/* password */}

            <div>
              <label className="block text-[17px] font-bold text-secondary-500 mb-2">
                password
              </label>

              <input
                type="password"
                placeholder="password"
                className=" block text-white w-full placeholder-slate-50 border-b border-red-500 bg-primary-400 px-5 py-2.5 text-white-700 focus:border-ternary-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
                {...register("password")}
              />
            </div>

            <Link href="signup">
              <h1 className="mt-4 font-bold text-ternary-500 font-primary">
                Sign Up first
              </h1>
            </Link>
            <input
              className="px-4 py-3 mt-6 font-bold text-white rounded bg-secondary-500 w-60 hover:bg-transparent hover:duration-300 hover:border-b-2 h hover:border-ternary-500"
              type="submit"
              value="login"
            />
          </form>
        </div>
        <div>
          <div>
            <h1 className="mb-4 font-bold text-center text-ternary-500  text-[25px]">
              Login Please
            </h1>
          </div>
          <div>
            <Image src={image2} alt="" height={300} width={400}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
