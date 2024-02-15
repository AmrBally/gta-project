import snapchat from "../../../assets/images/snapchat.png";
import ex from "../../../assets/images/ex.png";
import setting from "../../../assets/images/setting.png";
import Instashot from "../../../assets/images/insta.png";
import calc from "../../../assets/images/calc.png";
import Maps from "../../../assets/images/maps.png";
import facebook from "../../../assets/images/facebook.png";
import tiktok from "../../../assets/images/tiktok.png";
import shooping from "../../../assets/images/shopping.png";

import { useNavigate } from "react-router-dom";
import HomeBar from "../../../components/ui/HomeBar/HomeBar";

// eslint-disable-next-line react-hooks/rules-of-hooks
// const navigate = useNavigate();

const apps = [
  {
    name: "Faces",
    icon: facebook,
    path: "/facebook",
  },
  {
    name: "TicTakTok",
    icon: tiktok,
    path: "/tiktok",
  },
  {
    name: "SnapOO",
    icon: snapchat,
    path: "/snapchat",
  },
  {
    name: "EX",
    icon: ex,
    path: "/ex",
  },
  {
    name: "Settings",
    icon: setting,
    path: "/setting",
  },
  {
    name: "Instashot",
    icon: Instashot,
    path: "/Instashot",
  },
  {
    name: "Shooping",
    icon: shooping,
    path: "/whatsApp",
  },
  {
    name: "Calculator",
    icon: calc,
    path: "/whatsApp",
  },
  {
    name: "Maps",
    icon: Maps,
    path: "/whatsApp",
  },
];

const Folder = () => {
  return (
    <div className="absolute z-30 gap-[85px] backGroundFolder w-full top-[-53px] pt-[150px] left-0 text-white flex flex-col justify-center items-center h-screen mt-[50px]">
      <h1 className="h-[20%] text-[55px]">Folder</h1>
      <div className="backGroundFolderNotification h-[56%] w-[74%] gap-y-2 p-8 mb-[250px] rounded-[40px] flex flex-wrap justify-between items-start">
        {apps.map((item) => {
          return (
            <div key={item.icon} className="text-center w-[29%]">
              <img src={item.icon} alt="" className="w-full" />
              <p className="text-[13px] my-[2px]">{item.name}</p>
            </div>
          );
        })}
      </div>
      <HomeBar />
    </div>
  );
};

export default Folder;
