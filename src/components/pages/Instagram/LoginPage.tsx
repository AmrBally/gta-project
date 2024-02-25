import logo from "../../assets/images/InstagramLogo.png";

const LoginPage = () => {
  return (
    <div className="relative h-screen bg-black flex flex-col justify-center items-center">
      <button className="text-white absolute top-12 left-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
          ></path>
        </svg>
      </button>
      <div className="bg-black  border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <img src={logo} alt="" />
        <form className="mt-8 w-full flex flex-col">
          <input
            autoFocus
            className="text-xs w-full mb-2 rounded  text-white placeholder:text-blue-100 bg-neutral-800 px-2 py-4 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="Phone number, username, or email"
            type="text"
          />
          <input
            autoFocus
            className="text-xs w-full mb-4 rounded  text-white placeholder:text-blue-100 bg-neutral-800 px-2 py-4 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Password"
            type="password"
          />

          <a className="text-sm text-center bg-blue-500 text-white px-2 py-3 rounded font-medium">
            Log In
          </a>
          <a className="text-xs text-blue-500 mt-4 text-right cursor-pointer -mb-4">
            Forgot password?
          </a>
        </form>
        <div className="flex justify-evenly space-x-2 w-64 mt-8">
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
          <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2" />
        </div>
      </div>
      <div className="bg-black text-white text-center w-80 py-2">
        <span className="text-sm font-semibold">Don't have an account?</span>
        <a className="text-blue-500 text-sm font-semibold">Sign up</a>
      </div>
      <div className="mt-3 text-center"></div>
    </div>
  );
};

export default LoginPage;
