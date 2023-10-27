import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Space } from "antd";

import image1 from "../assets/signUp.svg";
import Image from "next/image";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/firebase.config";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  confirm_password: string;
};
const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/");
      toast.success("create user successfully");
      console.log(user);
    } catch (error) {
      console.error("Error signing in with email and password:", error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="mt-8 lg:mt-24">
      <div className="flex flex-col items-center justify-center gap-24 lg:flex-row">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-6 mb-6">
              {/* name input */}
              <div>
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
              <div>
                <label className="block text-[17px] font-bold text-secondary-500 mb-2">
                  Address
                </label>

                <input
                  type="address"
                  placeholder="address"
                  className=" block text-white w-full placeholder-slate-50 border-b border-red-500 bg-primary-400 px-5 py-2.5 text-white-700 focus:border-ternary-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
                  {...register("address")}
                />
              </div>
            </div>
            <div className="flex gap-6 mb-6">
              {/* phone */}
              <div>
                <label className="block text-[17px] font-bold text-secondary-500 mb-2">
                  phone
                </label>

                <input
                  type="phone"
                  placeholder="phone"
                  className=" block text-white w-full placeholder-slate-50 border-b border-red-500 bg-primary-400 px-5 py-2.5 text-white-700 focus:border-ternary-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
                  {...register("phone")}
                />
              </div>
              {/* email */}
              <div>
                <label className="block text-[17px] font-bold text-secondary-500 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="email"
                  className=" block text-white w-full placeholder-slate-50 border-b border-red-500 bg-primary-400 px-5 py-2.5 text-white-700 focus:border-ternary-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
                  {...register("email")}
                />
              </div>
            </div>
            {/* password */}
            <div className="flex gap-6">
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
              <div>
                <label className="block text-[17px] font-bold text-secondary-500 mb-2">
                  confirm password
                </label>

                <input
                  type="password"
                  placeholder="confirm"
                  className=" block text-white w-full placeholder-slate-50 border-b border-red-500 bg-primary-400 px-5 py-2.5 text-white-700 focus:border-ternary-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"
                  {...register("confirm_password")}
                />
              </div>
            </div>
            <div className="flex gap-6">
              <input
                className="px-4 py-3 mt-6 font-bold text-white rounded bg-secondary-500 w-60 hover:bg-transparent hover:duration-300 hover:border-b-2 h hover:border-ternary-500"
                type="submit"
              />
            </div>
          </form>
          <button
            onClick={signInWithGoogle}
            className="px-4 py-3 mt-6 font-bold text-white bg-transparent border-2 rounded border-secondary-500 w-60 hover:bg-secondary-500 hover:duration-300"
          >
            Google SignIn
          </button>
        </div>
        <div>
          <div>
            <h1 className="mb-2 font-bold">SignUp here</h1>
          </div>
          <div>
            <Image src={image1} alt="" height={400} width={400}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
