import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const HomeBar = ({ setOpenedFolder, openedFolder }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (openedFolder) {
          setOpenedFolder(false);
        } else {
          navigate("/");
        }
      }}
      className=" cursor-pointer absolute bottom-3 left-[50%] transform -translate-x-[50%] z-30 "
    >
      <div className=" bg-white h-1 w-[115px] mx-auto rounded-sm"></div>
    </div>
  );
};

HomeBar.prototype = {
  setOpenedFolder: PropTypes.func.isRequired,
  openedFolder: PropTypes.bool.isRequired,
};
export default HomeBar;
