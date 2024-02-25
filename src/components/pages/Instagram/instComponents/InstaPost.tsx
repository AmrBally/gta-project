import React, { useState } from "react";
import profile from "../../../assets/images/instaProfileAutoLogin.png";
// import slide1 from "../../../assets/images/gallery-1.png";
// import slide2 from "../../../assets/images/gallery-2.png";
// import slide3 from "../../../assets/images/gallery-3.png";
// import postImg1 from "../../../assets/images/postImg1.jpg";

import {
  dot,
  save,
  saved,
  share,
  comment,
  heartWhite,
  heartRed,
} from "../instaSvg";
import Carousel from "./Carousel";

const InstaPost = () => {
  const [heart, setHeart] = useState(true);
  const [savePost, setSavePost] = useState(true);
  const [follow, setFollow] = useState(true);

  const handleHeart = () => {
    return setHeart(!heart);
  };
  const handleSavePost = () => {
    return setSavePost(!savePost);
  };
  const handleFollow = () => {
    return setFollow(!follow);
  };

  return (
    <div className="flex flex-col">
      {/* start header */}
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <img src={profile} alt="" className="w-[20%]" />
          <div className="text-sm">
            <span className="block">joshua__l</span>
            <span className="text-[12px] text-zinc-400">Tokyo, Japan</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div
            className="rounded-md text-sm tracking-wider px-2 border-2 border-zinc-700"
            onClick={handleFollow}
          >
            {follow ? "Follow" : "Following"}
          </div>
          <div className="h-[25px] w-[25px]">{dot}</div>
        </div>
      </div>
      {/* end header */}

      {/* start body */}
      <div className="mt-3 relative h-[300px]">
        <Carousel />
        {/* <img src={postImg1} alt="" className="w-full h-full " /> */}
      </div>
      {/* end body */}
      {/* start footer */}
      <div className="mt-2 ">
        <div className=" flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <div className="h-[33px] w-[33px]" onClick={handleHeart}>
              {heart ? heartWhite : heartRed}
            </div>
            <div className="h-[25px] w-[25px]">{comment}</div>
            <div className="h-[30px] w-[30px]">{share}</div>
          </div>
          <div className="w-[26px] h-[26px]" onClick={handleSavePost}>
            {savePost ? save : saved}
          </div>
        </div>
        <p className="text-[16px] px-1">
          Liked by <span className="font-bold">44,322</span> others
        </p>
        <div className="text-[15px] px-1 mt-1 tracking-wide">
          <span className="font-bold">joshua__I </span>
          The game in Japan was amazing and i wan to share some photos.
        </div>
      </div>
      {/* end footer */}
    </div>
  );
};

export default InstaPost;
