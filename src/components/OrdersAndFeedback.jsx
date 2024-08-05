import React from "react";

const recentOrders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$305.02",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78995215",
    amount: "$45.88",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$56.00",
    status: "Cancelled",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Pending",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const customerFeedbacks = [
  {
    name: "Jenny Wilson",
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 4,
  },
  {
    name: "Devon Lane",
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and lightly sauced, they are quite good.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4,
  },
];

const OrdersAndFeedbacks = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
    <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg">
      <div className="text-gray-400 mb-4">Recent Orders</div>
      <div>
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Order No.
              </th>
              <th className="py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {recentOrders.map((order, index) => (
              <tr key={index}>
                <td className="py-2 flex items-center">
                  <img
                    src={order.avatar}
                    alt={order.customer}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>{order.customer}</div>
                </td>
                <td className="py-2">{order.orderNo}</td>
                <td className="py-2">{order.amount}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-200 text-green-800"
                        : order.status === "Cancelled"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-gray-400 mb-4">Customer's Feedback</div>
      <div className="space-y-4">
        {customerFeedbacks.map((feedback, index) => (
          <div key={index} className="flex space-x-4">
            <img
              src={feedback.avatar}
              alt={feedback.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="text-gray-300 font-bold">{feedback.name}</div>
              <div className="text-yellow-400">
                {"★".repeat(feedback.rating) + "☆".repeat(5 - feedback.rating)}
              </div>
              <div className="text-gray-400 text-sm mt-1">
                {feedback.feedback}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OrdersAndFeedbacks;
