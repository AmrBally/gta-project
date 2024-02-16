import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const HomeBar = ( { setOpenedFolder, openedFolder, bottom = "30", setAnsweredFullCall, setOpenedFullCall, setAcceptedCall } ) =>
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
      className={` cursor-pointer absolute ${ bottom ? `bottom-[${ bottom }px]` : "bottom-3" }  left-[50%] transform -translate-x-[50%] z-30 `}
      style={{ bottom: bottom }}>
      <div className=" bg-white h-1 w-[115px] mx-auto rounded-sm"></div>
    </div>
  );
};

HomeBar.prototype = {
  setOpenedFolder: PropTypes.func.isRequired,
  openedFolder: PropTypes.bool.isRequired,
  bottom: PropTypes.string.isRequired,
  setAnsweredFullCall: PropTypes.func.isRequired,
  setOpenedFullCall: PropTypes.func.isRequired,
  setAcceptedCall: PropTypes.func.isRequired
};
export default HomeBar;
