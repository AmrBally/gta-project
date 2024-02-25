import logo from "../../assets/images/InstagramLogo.png";
import InstaProfilImg from "./instComponents/InstaProfilImg";

const AutoLoginInsta = () => {
  return (
    <div className="relative h-screen bg-black flex flex-col justify-center items-center">
      <div className="bg-black  border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <img src={logo} alt="" />

        <div className="mt-[60px]">
          {" "}
          <InstaProfilImg name={"Amr"} />
        </div>

        <form className="mt-2 w-full flex flex-col">
          <a className="text-sm text-center bg-blue-500 text-white px-2 py-3 rounded font-medium">
            Log In
          </a>
          <a className="text-sm tracking-wider text-blue-400 mt-7 text-center cursor-pointer ">
            Switch accounts
          </a>
        </form>
      </div>
      <div className="bg-black absolute bottom-14 text-neutral-600 text-center w-80 py-2">
        <span className="text-sm font-semibold">Don't have an account?</span>
        <a className="text-white text-sm font-semibold">Sign up.</a>
      </div>
    </div>
  );
};

export default AutoLoginInsta;
