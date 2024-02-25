import React from "react";
import profile from "../../../assets/images/instaProfileAutoLogin.png";

type Props = {
  name?: string;
};

const InstaProfilImg = ({ name }: Props) => {
  return (
    <div className="w-full h-full">
      <img src={profile} alt="" className="rounded-full" />
      <p className="text-white mt-3 m-auto">{name}</p>
    </div>
  );
};

export default InstaProfilImg;
