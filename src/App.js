function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <aside className="w-40 sm:w-64 bg-gray-800 fixed h-full">
        <div className="p-4">
          <div className="text-3xl font-bold text-white mb-4">Logo</div>
          <nav>
            <a
              href="#dashboard"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Dashboard
            </a>
            <a
              href="#orders"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Orders
            </a>
            <a
              href="#customers"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Customers
            </a>
            <a
              href="#reports"
              className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Reports
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
                <div className="text-gray-400">Total Orders</div>
                <div className="text-3xl font-bold mt-2">75</div>
                <div className="text-green-500 mt-1">↑ 3%</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400">Total Delivered</div>
                <div className="text-3xl font-bold mt-2">70</div>
                <div className="text-red-500 mt-1">↓ 3%</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400">Total Cancelled</div>
                <div className="text-3xl font-bold mt-2">5</div>
                <div className="text-green-500 mt-1">↑ 3%</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-gray-400">Total Revenue</div>
                <div className="text-3xl font-bold mt-2">$12k</div>
                <div className="text-red-500 mt-1">↓ 3%</div>
              </div>
            </div>
            <div className="lg:col-span-1 bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400">Net Profit</div>
              <div className="text-3xl font-bold mt-2">$6759.25</div>
              <div className="text-green-500 mt-1">70% Order Success</div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400">Activity</div>
              <div className="text-3xl font-bold mt-2">Graph Here</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400">Net Profit</div>
              <div className="text-3xl font-bold mt-2">$6759.25</div>
              <div className="text-green-500 mt-1">70% Order Success</div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400">Recent Orders</div>
              <div className="mt-2">{/* Add recent orders list */}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400">Net Profit</div>
              <div className="text-3xl font-bold mt-2">$6759.25</div>
              <div className="text-green-500 mt-1">70% Order Success</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
