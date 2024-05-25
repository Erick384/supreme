const SignUpPage = () => {
  return (
      <div className="sign-up h-screen flex-column items-center justify-center p-8 gap-8 bg-gray-600">
        <div className="text-center font-bold text-blue-600">
          Welcome Fellas!!
        </div>
        <div className="container flex  justify-center items-center gap-8 ">
          <div className="signup-left border border-red-700 w-1/2 p-8">
            <h2>Welcome To GeoFlix</h2>
            <p>
              We're excited to have you join our community. Sign up now to
              unlock access to exclusive content, personalized recommendations,
              and a host of features designed to enhance your experience.
            </p>
          </div>

          <form className="w-1/2 bg-white signup-right p-4 ">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fname"
              >
                Enter Your First Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fname"
                type="text"
                placeholder="firstname"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lname"
              >
                Enter Your Last Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lname"
                type="text"
                placeholder="lastname"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Enter Your Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Enter Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
  );
};

export default SignUpPage;
