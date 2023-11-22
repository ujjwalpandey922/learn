import { LuBell } from "react-icons/lu";
import { BsStopwatch } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaRegEye } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { ImParagraphLeft } from "react-icons/im";
const Sidebar = () => {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-slate-300">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span className="grid h-10 w-10 place-content-center rounded-full  text-xs text-gray-600">
            <img
              src="/src/assets/Whitehatjr.png"
              className="mix-blend-multiply"
            />
          </span>
        </div>

        <div className=" border-gray-100">
          <div className="px-2">
            <div className="py-2">
              <span className="t group relative flex justify-center rounded px-2 py-1.5 cursor-pointer">
                <ImParagraphLeft className="text-2xl" />
                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100 z-50">
                  Classes
                </span>
              </span>
            </div>
            <div className="py-2">
              <span className="t group relative flex justify-center rounded px-2 py-1.5 cursor-pointer">
                <LuBell className="text-3xl" />
                <span className="absolute w-3 h-3 right-3 rounded-full bg-red-500 "></span>
                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0  z-50 group-hover:opacity-100">
                  Notification
                </span>
              </span>
            </div>

            <ul className="space-y-4  border-gray-100 pt-4">
              <li>
                <a
                  href="/"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <BsStopwatch className="text-3xl" />
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 z-50 group-hover:opacity-100">
                    Watch
                  </span>
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <SlCalender className="text-3xl" />

                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 z-50 group-hover:opacity-100">
                    Billing
                  </span>
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <FaRegEye className="text-3xl" />

                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 z-50 group-hover:opacity-100">
                    Invoices
                  </span>
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <IoPeopleSharp className="text-3xl" />

                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 z-50 group-hover:opacity-100">
                    Account
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0  p-2 py-8">
        <form action="/logout">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <CgProfile className="text-3xl" />
            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
