import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineInsertChart } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { BiWalletAlt } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";
import Graphs from "./components/Graphs";
import PieChart from "./components/PieChart";
import OrdersAndFeedbacks from "./components/OrdersAndFeedback";
import { IoMdLocate } from "react-icons/io";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa6";
import { BsCalendarEvent } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <aside className="w-20 sm:w-40 bg-gray-800 fixed h-full">
        <div className="p-4">
          <div className=" mb-4 px-4">
            <LuLayoutDashboard
              style={{
                height: "37px",
                width: "37px",
                color: "blue",
              }}
            />
          </div>
          <nav className=" flex flex-col gap-5 mt-8">
            <a
              href="#home"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <AiOutlineHome
                style={{
                  height: "30px",
                  width: "30px",
                  color: "blue",
                }}
              />
            </a>
            <a
              href="#orders"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <MdOutlineInsertChart style={{ height: "30px", width: "30px" }} />
            </a>
            <a
              href="#customers"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <PiNotepad style={{ height: "30px", width: "30px" }} />
            </a>
            <a
              href="#reports"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <BiWalletAlt style={{ height: "30px", width: "30px" }} />
            </a>
            <a
              href="#bag"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <BsBagCheck style={{ height: "30px", width: "30px" }} />
            </a>
          </nav>
        </div>
      </aside>
      <div className="ml-20 sm:ml-40 p-6">
        <header className="flex flex-col-reverse sm:flex-row justify-between items-center pb-6 border-b border-gray-700 gap-2">
          <div className="relative flex items-center w-full sm:w-auto">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:w-auto pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-gray-700 bg-gray-900"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-400 p-2 rounded-full">
              <FaRegEnvelope />
            </button>
            <button className="bg-gray-400 p-2 rounded-full">
              <IoSettingsOutline />
            </button>
            <button className="bg-gray-400 p-2 rounded-full">
              <CiBellOn />
            </button>
            <button className="bg-gray-400 p-2 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMGljb24lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </header>
        <main className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <TfiShoppingCartFull
                      style={{
                        width: "50px",
                        height: "40px",
                        background: "blue",
                        padding: "7px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Orders</div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-3xl font-bold mt-1">75</div>
                    <div className="text-green-500 mt-1 flex flex-row justify-center items-center gap-1">
                      <TiArrowSortedUp /> 3%
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <FaOpencart
                      style={{
                        width: "50px",
                        height: "40px",
                        background: "green",
                        padding: "7px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Delivered</div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-3xl font-bold mt-1">75</div>
                    <div className="text-red-500 mt-1 flex flex-row justify-center items-center gap-1">
                      <AiFillCaretDown /> 3%
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <FaOpencart
                      style={{
                        width: "50px",
                        height: "40px",
                        background: "orange",
                        padding: "7px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Cancelled</div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-3xl font-bold mt-1">75</div>
                    <div className="text-green-500 mt-1 flex flex-row justify-center items-center gap-1">
                      <TiArrowSortedUp /> 3%
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <BsCalendarEvent
                      style={{
                        width: "50px",
                        height: "40px",
                        background: "purple",
                        padding: "7px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Revenue </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-3xl font-bold mt-1">75</div>
                    <div className="text-red-500 mt-1 flex flex-row justify-center items-center gap-1">
                      <AiFillCaretDown /> 3%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 bg-gray-800 p-4 rounded-lg flex flex-row justify-between h-full">
              <div className="h-full flex flex-col gap-2 p-4">
                <div className="text-gray-400">Net Profit</div>
                <div className="text-3xl font-bold mt-2 ">$6759.25</div>
                <div className="text-green-500 mt-1 flex justify-start items-center gap-1">
                  <TiArrowSortedUp /> 3%
                </div>
              </div>
              <div className="flex  justify-center items-center w-[18%] ">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 flex flex-col bg-gray-800 p-4 rounded-lg">
              <div className="flex flex-row justify-between">
                <div className="text-gray-400 text-[.9rem] sm:text-lg leading-3">
                  Activity
                </div>
                <div className="px-4 py-[2px] border rounded-3xl text-stone-50 bg-slate-500 flex justify-center items-center flex-row gap-2 text text-[.9rem] sm:text-lg leading-3">
                  Weekly <IoCaretDown />
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Graphs />
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col justify-between gap-3">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <IoMdLocate
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "pink",
                      padding: "7px",
                      borderRadius: "40px",
                    }}
                  />
                  <p className="text text-[.9rem] sm:text-lg leading-3 font-sans">
                    Goals
                  </p>
                </div>
                <div className="p-1 border rounded-full bg-slate-500">
                  <IoChevronForwardSharp />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <LiaHamburgerSolid
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "blue",
                      padding: "7px",
                      borderRadius: "40px",
                    }}
                  />
                  <p className="text text-[.9rem] sm:text-lg leading-3 font-sans">
                    Popular Dishes
                  </p>
                </div>
                <div className="p-1 border rounded-full bg-slate-500">
                  <IoChevronForwardSharp />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <BsFillMenuButtonWideFill
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "teal",
                      padding: "7px",
                      borderRadius: "40px",
                    }}
                  />
                  <p className="text text-[.9rem] sm:text-lg leading-3 font-sans">
                    Menus
                  </p>
                </div>
                <div className="p-1 border rounded-full bg-slate-500">
                  <IoChevronForwardSharp />
                </div>
              </div>
            </div>
          </div>

          <OrdersAndFeedbacks />
        </main>
      </div>
    </div>
  );
}

export default App;
