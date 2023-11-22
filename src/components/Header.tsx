import { IoChevronBack, IoCall } from "react-icons/io5";
import { MdMonitor } from "react-icons/md";
import { RiSlideshowFill, RiVideoFill, RiContactsFill } from "react-icons/ri";
import { SiGoogledocs, SiGoogleclassroom } from "react-icons/si";
import { SlDocs } from "react-icons/sl";
const Header = () => {
  return (
    <div className=" w-full flex flex-col gap-4 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className=" p-4 rounded-xl bg-gray-200 cursor-pointer">
            <IoChevronBack />
          </button>
          <h1 className="text-3xl font-bold">Basic Mathematics 101</h1>
        </div>
        <div className="flex items-center gap-4 text-xl font-semibold">
          <span className="flex justify-between items-center gap-2 p-2">
            <IoCall className="bg-blue-400 text-3xl p-1 rounded-full text-white" />
            <h2>Call Teacher</h2>
          </span>
          <span className="flex justify-between items-center gap-2">
            <RiContactsFill className="bg-orange-400 text-3xl p-1 rounded-full text-white" />
            <h2>Support</h2>
          </span>
        </div>
      </div>

      <div className=" shadow rounded-3xl border  mt-4 flex w-full relative items-center bg-gray-200">
        <div className="w-full flex justify-center ">
          <button className="flex justify-center items-center gap-2 p-4">
            <span>
              <SiGoogleclassroom className="text-gray-500" />
            </span>
            Class Room
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button className="flex justify-center items-center gap-2">
            <span>
              <MdMonitor className="text-gray-500" />
            </span>
            White Board
          </button>
        </div>
        <div className="w-full flex justify-center  bg-white shadow text-black rounded-full  transition-all  text-xl font-bold py-3 ">
          <button className="flex justify-center items-center gap-2">
            <span>
              <RiVideoFill className="text-black" />
            </span>
            Video
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button className="flex justify-center items-center gap-2">
            <span>
              <RiSlideshowFill className="text-gray-500" />
            </span>
            Slide Show
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button className="flex justify-center items-center gap-2">
            <span>
              <SiGoogledocs className="text-gray-500" />
            </span>
            Document
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button className="flex justify-center items-center gap-2">
            <span>
              <SlDocs className="text-gray-500" />
            </span>
            Doc Cam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
