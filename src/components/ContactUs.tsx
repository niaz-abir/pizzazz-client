import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-8 lg:flex-row mt-14 ju gap-14">
      <div>
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-10 py-8">
            <h3 className="mt-3 text-xl font-bold text-center text-gray-600 dark:text-gray-200">
              Connect With us
            </h3>

            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              We are waiting for you
            </p>

            <form>
              <div>
                <div>
                  <label className="font-bold text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 dark:text-gray-200">
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 dark:text-gray-300">
                  Text
                </label>

                <textarea
                  placeholder="lorem..."
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                ></textarea>

                <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
                  We always try to send a good feedback from us.
                </p>
              </div>

              <div className="flex justify-start mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-600 w-full rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Image
            src="../assets/contact (2).svg"
            alt=""
            height={400}
            width={400}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
