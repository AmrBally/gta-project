import React from "react";
import slide1 from "../../../assets/images/gallery-10.png";
import slide2 from "../../../assets/images/gallery-11.png";
import slide3 from "../../../assets/images/gallery-12.png";
import slide4 from "../../../assets/images/gallery-13.png";
import slide5 from "../../../assets/images/gallery-15.png";
import slide6 from "../../../assets/images/gallery-16.png";
import slide7 from "../../../assets/images/gallery-17.png";
import slide8 from "../../../assets/images/gallery-18.png";

const statusArr = [
  {
    name: "Amr",
    img: slide1,
  },
  {
    name: "Abo-Treka",
    img: slide2,
  },
  {
    name: "Ronaldo",
    img: slide3,
  },
  {
    name: "Ahmed",
    img: slide4,
  },
  {
    name: "Serag",
    img: slide5,
  },
  {
    name: "Messi",
    img: slide6,
  },
  {
    name: "Jota",
    img: slide7,
  },
  {
    name: "Sara",
    img: slide8,
  },
];

const InstaStatus = () => {
  return (
    <>
      {statusArr.map((s) => (
        <div key={s.name} className=" pb-[15px] pl-[5px] pr-[5px]">
          <div className="w-[70px] h-[70px] p-1 statusBg rounded-[40px] flex justify-center items-center ">
            <img src={s.img} alt="" className="rounded-full" />
          </div>
          <div className="text-center text-ellipsis whitespace-nowrap overflow-hidden w-[70px]">
            <span className="text-[13px]">{s.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default InstaStatus;
