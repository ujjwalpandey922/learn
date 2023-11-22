import { AiFillCamera } from "react-icons/ai";
import { IoIosMic } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiSolidExit } from "react-icons/bi";
const Main = () => {
  return (
    <div className="flex mt-8 justify-between w-full h-screen overflow-auto">
      <section className="w-1/5 flex flex-col gap-4">
        <div className="relative">
          <img src="/src/assets/student.png" className="rounded-3xl w-[90%]" />
          <h2 className="absolute left-0 bottom-0 bg-gray-200 p-2 rounded-3xl font-bold">
            Ridha
          </h2>
        </div>
        <div className="relative">
          <img src="/src/assets/teacher.png" className="rounded-3xl w-[90%]" />
          <h2 className="absolute left-0 bottom-0 bg-gray-200 p-2 rounded-3xl font-bold">
            {" "}
            Mr. Anmol
          </h2>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center flex-col gap-2">
            <button className=" p-4 rounded-xl bg-gray-200 cursor-pointer">
              <AiFillCamera className="text-black text-2xl" />
            </button>
            <h3 className="text-xl font-medium">Cam</h3>
          </div>
          <div className="flex items-center flex-col gap-2">
            <button className=" p-4 rounded-xl bg-gray-200 cursor-pointer">
              <IoIosMic className="text-black text-2xl" />
            </button>
            <h3 className="text-xl font-medium">Mic</h3>
          </div>
          <div className="flex items-center flex-col gap-2">
            <button className=" p-4 rounded-xl bg-gray-200 cursor-pointer">
              <IoMdShare className="text-black text-2xl" />
            </button>
            <h3 className="text-xl font-medium">Share</h3>
          </div>
          <div className="flex items-center flex-col gap-2">
            <button className=" p-4 rounded-xl bg-gray-200 cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black text-2xl" />
            </button>
            <h3 className="text-xl font-medium">Chat</h3>
          </div>
          <div className="flex items-center flex-col gap-2">
            <button className=" p-4 rounded-xl bg-cyan-800 cursor-pointer">
              <BiSolidExit className="text-white text-2xl" />
            </button>
            <h3 className="text-xl font-medium">Leave</h3>
          </div>
        </div>
      </section>
      <div className="w-4/5">
        <iframe
          width="1264"
          height="480"
          className="w-full"
          src="https://www.youtube.com/embed/TMubSggUOVE"
          title="Math Videos:  How To Learn Basic Arithmetic Fast - Online Tutorial Lessons"
          //   frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Main;
