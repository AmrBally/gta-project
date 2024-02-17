import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HomeBar = ( { setOpenedFolder, openedFolder, bottom = "30", setAnsweredFullCall, setOpenedFullCall, setAcceptedCall, dark } ) =>
{
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
      {
        if ( openedFolder )
        {
          setOpenedFolder( false );
        }
        else
        {
          navigate( "/" );
          setAnsweredFullCall( false );
          setOpenedFullCall( false );
          setAcceptedCall( true );
        }
      }}
      className={` cursor-pointer absolute "bottom-3" left-[50%] transform -translate-x-[50%] z-30 !top-[unset]`}
      style={{ bottom: bottom }}>
      <div className={`${ dark ? "bg-black" : "bg-white" }  h-1 w-[115px] mx-auto rounded-sm`}></div>
    </div>
  );
};


export default HomeBar;
