import { heartWhite, home, plus, search } from "../instaSvg";
import InstaProfilImg from "./InstaProfilImg";

const InstaFooter = () => {
  return (
    <div className="flex justify-between items-start w-full h-full px-3">
      <div>{home}</div>
      <div>{search}</div>
      <div>{plus}</div>
      <div className="w-[30px] h-[30px]">{heartWhite}</div>
      <div className="w-[30px] h-[30px]">
        <InstaProfilImg />
      </div>
    </div>
  );
};

export default InstaFooter;
