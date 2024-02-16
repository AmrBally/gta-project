import gallery1 from "../../assets/images/gallery-1.png";
import gallery2 from "../../assets/images/gallery-2.png";
import gallery3 from "../../assets/images/gallery-3.png";
import gallery4 from "../../assets/images/gallery-4.png";
import gallery5 from "../../assets/images/gallery-5.png";
import gallery6 from "../../assets/images/gallery-6.png";
import gallery7 from "../../assets/images/gallery-7.png";
import gallery8 from "../../assets/images/gallery-8.png";
import gallery9 from "../../assets/images/gallery-9.png";
import gallery10 from "../../assets/images/gallery-10.png";
import gallery11 from "../../assets/images/gallery-11.png";
import gallery12 from "../../assets/images/gallery-12.png";
import gallery13 from "../../assets/images/gallery-13.png";
import gallery14 from "../../assets/images/gallery-14.png";
import gallery15 from "../../assets/images/gallery-15.png";
import gallery16 from "../../assets/images/gallery-16.png";
import gallery17 from "../../assets/images/gallery-17.png";
import gallery18 from "../../assets/images/gallery-18.png";
import gallery19 from "../../assets/images/gallery-19.png";
import gallery20 from "../../assets/images/gallery-20.png";
import gallery21 from "../../assets/images/gallery-21.png";
// import ShareBox from "./ShareBox";

const galleryImages = [
    {
        id: 1,
        src: gallery1,
    },
    {
        id: 2,
        src: gallery2,
    },
    {
        id: 3,
        src: gallery3,
    },
    {
        id: 4,
        src: gallery4,
    },
    {
        id: 5,
        src: gallery5,
    },
    {
        id: 6,
        src: gallery6,
    },
    {
        id: 7,
        src: gallery7,
    },
    {
        id: 8,
        src: gallery8,
    },
    {
        id: 9,
        src: gallery9,
    },
    {
        id: 10,
        src: gallery10,
    },
    {
        id: 11,
        src: gallery11,
    },
    {
        id: 12,
        src: gallery12,
    },
    {
        id: 13,
        src: gallery13,
    },
    {
        id: 14,
        src: gallery14,
    },
    {
        id: 15,
        src: gallery15,
    },
    {
        id: 16,
        src: gallery16,
    },
    {
        id: 17,
        src: gallery17,
    },
    {
        id: 18,
        src: gallery18,
    },
    {
        id: 19,
        src: gallery19,
    },
    {
        id: 20,
        src: gallery20,
    },
    {
        id: 21,
        src: gallery21,
    },
    {
        id: 22,
        src: gallery15,
    },
    {
        id: 23,
        src: gallery16,
    },
    {
        id: 24,
        src: gallery17,
    },
    {
        id: 25,
        src: gallery18,
    },
    {
        id: 26,
        src: gallery19,
    },
    {
        id: 27,
        src: gallery20,
    },
    {
        id: 28,
        src: gallery21,
    },
    {
        id: 29,
        src: gallery18,
    },
    {
        id: 30,
        src: gallery21,
    },
];
function Gallery ()
{
    return (
        <div className="absolute top-[-53px] left-0 text-white flex flex-col justify-start items-start h-screen mt-[50px]">
            <div className="absolute w-full h-[100px] top-0 left-0  flex justify-center items-end pb-3 bg-black/50 backdrop-blur-md">
                <h3>
                    Recent
                </h3>
            </div>
            <div className="body h-screen w-full flex justify-center items-center flex-wrap overflow-y-scroll">
                {galleryImages.map( ( item ) => (
                    <img
                        key={item.id}
                        src={item.src}
                        alt="gallery"
                        className="w-1/3 object-cover h-[128.96px]"
                    />
                ) )}
            </div>
            <div className="footer absolute w-full h-[100px] bottom-0 left-0  flex justify-evenly items-start pt-3 bg-black/50 backdrop-blur-md">
                <button className="text-xl opacity-60">Albums</button>
                <button className="text-xl">Recent</button>
            </div>
            {/* <ShareBox /> */}
        </div>
    );
}

export default Gallery;
