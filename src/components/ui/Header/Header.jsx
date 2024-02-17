import MobileSignal from "../../../assets/images/Mobile Signal.png";
import Wifi from "../../../assets/images/Wifi.png";
import Battery from "../../../assets/images/Battery.png";
import MobileSignalDark from "../../../assets/images/Mobile Signal Dark.png";
import WifiDark from "../../../assets/images/Wifi Dark.png";
import BatteryDark from "../../../assets/images/Battery Dark.png";
import Clock from "../../Clock";
import { useEffect, useRef, useState } from "react";
import Notifications from "../../../pages/Home system/Notifications/Notifications";
import FaceId from "../../../pages/Home system/Face id/FaceId";
import { blue } from "@mui/material/colors";
import ControlCenter from "../../../pages/Home system/Control Center/ControlCenter";
import HomeBar from "../HomeBar/HomeBar";

// eslint-disable-next-line react/prop-types
const Header = ( { dark = false } ) =>
{
  const [ open, setOpen ] = useState( false );
  const timer = useRef();
  const [ loading, setLoading ] = useState( false );
  const [ success, setSuccess ] = useState( false );
  const [ show, setShow ] = useState( false );
  const [ showCenter, setshowCenter ] = useState( false );

  const handleClickOpen = () =>
  {
    if ( !open )
    {
      setShow( true );
      setOpen( false );
      handleButtonClick();
      timer.current = window.setTimeout( () =>
      {
        setOpen( true );
      }, 2000 );
    } else
    {
      setOpen( false );
    }
  };

  const buttonSx = {
    ...( success && {
      bgcolor: blue[ 500 ],
      "&:hover": {
        bgcolor: blue[ 700 ],
      },
    } ),
  };

  const handleButtonClick = () =>
  {
    if ( !loading )
    {
      setSuccess( false );
      setLoading( true );
      timer.current = window.setTimeout( () =>
      {
        setSuccess( true );
        setLoading( false );
      }, 1000 );
    }
  };

  useEffect( () =>
  {
    return () =>
    {
      clearTimeout( timer.current );
    };
  }, [] );

  const handleShowControlCenter = () =>
  {
    setshowCenter( !showCenter );
  };

  return (
    <>
      <div className={`absolute ${ dark ? "text-black" : "text-white" } h-[40px] w-full mx-auto left-0 px-8 flex justify-between items-center`} style={{ zIndex: 100 }}>
        <div className="cursor-pointer text-[16px] ">
          <Clock />
        </div>
        <div className="flex cursor-pointer" onClick={handleShowControlCenter}>
          {dark ? (
            <>
              <img alt="MobileSignalDark" src={MobileSignalDark} className="mx-0.5 w-[17px]" />
              <img alt="WifiDark" src={WifiDark} className="mx-0.5 w-[17px]" />
              <img alt="BatteryDark" src={BatteryDark} className="mx-0.5 w-[20px]" />
            </>
          ) : (
            <>
              <img alt="MobileSignal" src={MobileSignal} className="mx-0.5 w-[17px]" />
              <img alt="Wifi" src={Wifi} className="mx-0.5 w-[17px]" />
              <img alt="Battery" src={Battery} className="mx-0.5 w-[20px]" />
            </>
          )}
        </div>
      </div>
      {/* lockScreen & FaceID & Notifications */}
      <div
        className={` absolute w-full h-full left-0 z-30  text-white ${ open ? "top-[-1000px]" : "top-0 "
          // open ? "top-0 " : "top-[-1000px]"
          } `}
        style={{ transition: "1s" }}
      >
        <div
          style={{ filter: " blur(11px)" }}
          className="backGroundHome w-full h-full"
        ></div>
        <div className=" absolute w-full h-full left-0 top-[15px] pt-7 flex justify-center ">
          <Notifications handleClickOpen={handleClickOpen} />
          <div
            className={` ${ show ? "block" : "hidden"
              } none absolute w-full h-full flex justify-center items-center top-0 `}
            style={{
              background: "rgb(0 0 0 / 90%)",
              zIndex: "300",
            }}
          >
            <FaceId
              buttonSx={buttonSx}
              handleButtonClick={handleButtonClick}
              success={success}
              loadin={loading}
            />
          </div>
        </div>
      </div>

      {/* Control Center*/}
      <div
        className={` absolute w-full h-full left-0 z-20  text-white ${ !showCenter ? "top-[-1000px]" : "top-0 "
          // open ? "top-0 " : "top-[-1000px]"
          } `}
        style={{ transition: "1s" }}
      >
        <div
          className={` ${ show ? "block" : "hidden"
            } none absolute w-full h-full flex justify-center items-start top-0 pt-[100px]`}
          style={{
            background: "rgb(0 0 0 / 90%)",
            zIndex: "500",
          }}
        >
          <ControlCenter />
          <div className=" w-full z-50" onClick={handleShowControlCenter}>
            <HomeBar bottom="30px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
