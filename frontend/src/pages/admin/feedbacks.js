import React from "react";

//
import AdminSidebar from "../../components/admin/sidebar";
const FeedBacks = [
  {
    id: 1,
    name: "Olivia Rodriguez",
    sex: "Female",
    age: 28,
    province: "Bulacan",
    city: "Malolos",
    mobileNumber: "09123456789",
    password: "c4a81f6b32e59...",
  },
  // ... other users in the list
];

const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
function FeedbackList() {
  return (
    <div className="bg-gray-200 h-screen flex flex-row">
      <AdminSidebar />
      <div className="flex flex-col w-full mt-6">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Feedback</h1>
          </div>
        </div>

        <div className="bg-gray-300 ">
          <div className=" border border-azure overflow-x-auto rounded-lg">
            <table className="w-full table-auto rounded-lg">
              <thead className=" px-10 border border-ausre bg-azure">
                <tr>
                  <th className="px-4 py-2 text-left text-white">Name</th>
                  <th className="px-4 py-2 text-left text-white">Message</th>
                  <th className="px-4 py-2 text-left text-white">Date</th>
                  <th className="px-6 py-2 text-left text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {FeedBacks.map((cases) => (
                  <tr
                    key={FeedBacks.id}
                    className="border-b last:border-b-0 border-gray-200"
                  >
                    <td className="px-4 py-2">{FeedBacks.name}</td>
                    <td className="px-4 py-2">{`${FeedBacks.message} / `}</td>
                    <td className="px-4 py-2">{`${FeedBacks.date} / `}</td>
                    <td className="px-4 py-2">
                      <button className="text-black py-1 px-1 bg-gray-200 hover:bg-azure  rounded-full ...  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </button>
                      <button className="text-black py-1 px-1 bg-gray-200 hover:bg-azure  rounded-full ...  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackList;