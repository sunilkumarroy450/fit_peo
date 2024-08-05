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

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <aside className="w-40 sm:w-64 bg-gray-800 fixed h-full">
        <div className="p-4">
          <div className="text-3xl font-bold text-white mb-4">Logo</div>
          <nav>
            <a
              href="#home"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <AiOutlineHome />
            </a>
            <a
              href="#orders"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <MdOutlineInsertChart />
            </a>
            <a
              href="#customers"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <PiNotepad />
            </a>
            <a
              href="#reports"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <BiWalletAlt />
            </a>
            <a
              href="#bag"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <BsBagCheck />
            </a>
          </nav>
        </div>
      </aside>
      <div className="ml-40 sm:ml-64 p-6">
        <header className="flex justify-between items-center pb-6 border-b border-gray-700">
          <div className="text-2xl font-semibold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-800 p-2 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMGljb24lMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </button>
            <button className="bg-gray-800 p-2 rounded-full">
              <i className="fas fa-bell"></i>
            </button>
            <button className="bg-gray-800 p-2 rounded-full">
              <i className="fas fa-envelope"></i>
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
                        padding: "3px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Orders</div>
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
                    <TfiShoppingCartFull
                      style={{
                        width: "50px",
                        height: "40px",
                        background: "blue",
                        padding: "3px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Orders</div>
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
                    <TfiShoppingCartFull
                      style={{
                        width: "50px",
                        height: "40px",
                        background: "blue",
                        padding: "3px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Orders</div>
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
                    <TfiShoppingCartFull
                      style={{
                        width: "50px",
                        height: "40px",
                        background: "blue",
                        padding: "3px",
                        borderRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="text-gray-400 mt-1">Total Orders</div>
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
              <div className="h-full flex flex-col gap-2">
                <div className="text-gray-400">Net Profit</div>
                <div className="text-3xl font-bold mt-2">$6759.25</div>
                <div className="text-green-500 mt-1">70% Order Success</div>
              </div>
              <div className="flex  justify-center items-center w-[18%] ">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 flex flex-col bg-gray-800 p-4 rounded-lg">
              <div className="flex flex-row justify-between">
                <div className="text-gray-400">Activity</div>
                <div className="px-4 py-[2px] border rounded-3xl text-stone-50 bg-slate-500">
                  Weekly
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Graphs />
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <TfiShoppingCartFull
                    style={{
                      width: "50px",
                      height: "40px",
                      background: "blue",
                      padding: "3px",
                      borderRadius: "7px",
                    }}
                  />
                  <p>Goals</p>
                </div>
                <AiFillCaretDown />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <TfiShoppingCartFull
                    style={{
                      width: "50px",
                      height: "40px",
                      background: "blue",
                      padding: "3px",
                      borderRadius: "7px",
                    }}
                  />
                  <p>Goals</p>
                </div>
                <AiFillCaretDown />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <TfiShoppingCartFull
                    style={{
                      width: "50px",
                      height: "40px",
                      background: "blue",
                      padding: "3px",
                      borderRadius: "7px",
                    }}
                  />
                  <p>Goals</p>
                </div>
                <AiFillCaretDown />
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
