import { camera, share, tv } from "./instaSvg";
import logo from "../../assets/images/InstagramLogo.png";
import "./insta.css";
import InstaFooter from "./instComponents/InstaFooter";
import InstaPost from "./instComponents/InstaPost";
import InstaStatus from "./instComponents/InstaStatus";

const InstaHome = () => {
  return (
    <div className="text-white w-full h-full mb-[900px] noScroll overflow-y-scroll">
      {/* start header */}
      <div className="bg-stone-950 absolute z-20 top-0 left-0 w-full h-[12%] flex justify-between px-4 items-end">
        <div className="flex justify-between items-center w-full pb-2">
          <div>{camera}</div>
          <img src={logo} alt="" className="w-[30%] h-[30%] ml-6" />
          <div className="flex justify-between items-center gap-2">
            <div className="tv relative">{tv}</div>
            <div className="w-[30px] h-[30px]">{share}</div>
          </div>
        </div>
      </div>
      {/* end header */}
      {/* start Body */}
      <div className="mt-[100px] ">
        {/* start status */}
        <div className="flex overflow-scroll noScroll">
          <InstaStatus />
        </div>
        {/* end status */}
        {/* start post */}
        <div className="mt-3">
          <InstaPost />
        </div>
        <div className="mt-3">
          <InstaPost />
        </div>
        <div className="mt-3">
          <InstaPost />
        </div>
      </div>
      {/* end post */}
      {/* End Body */}
      <div className="h-[150px] text-center mt-4">No Postes</div>
      {/* start footer  */}
      <div className="bg-stone-950 absolute bottom-0 left-0 w-full h-[10%] pt-2 flex justify-between px-4 items-end">
        <InstaFooter />
      </div>
      {/* end footer  */}
    </div>
  );
};

export default InstaHome;
