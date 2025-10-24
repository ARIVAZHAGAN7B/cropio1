import React, { useState } from "react";

const InventoryManager = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const inventoryData = [
  { id: 1, crop: "Wheat", stock: 120, acquisition: "2025-09-10", expiry: "2026-03-01", price: 25 },
  { id: 2, crop: "Rice", stock: 80, acquisition: "2025-07-12", expiry: "2025-12-10", price: 30 },
  { id: 3, crop: "Corn", stock: 90, acquisition: "2025-08-02", expiry: "2026-01-15", price: 22 },
  { id: 4, crop: "Barley", stock: 0, acquisition: "2025-06-18", expiry: "2025-11-05", price: 18 },
  { id: 5, crop: "Oats", stock: 0, acquisition: "2025-04-20", expiry: "2025-09-10", price: 20 },
  { id: 6, crop: "Millet", stock: 45, acquisition: "2025-05-15", expiry: "2026-01-12", price: 24 },
  { id: 7, crop: "Sorghum", stock: 70, acquisition: "2025-07-01", expiry: "2026-02-25", price: 28 },
  { id: 8, crop: "Soybean", stock: 0, acquisition: "2025-03-25", expiry: "2025-09-20", price: 35 },
  { id: 9, crop: "Peas", stock: 50, acquisition: "2025-08-05", expiry: "2026-03-15", price: 40 },
  { id: 10, crop: "Lentils", stock: 65, acquisition: "2025-07-09", expiry: "2026-02-09", price: 55 },
  { id: 11, crop: "Chickpeas", stock: 0, acquisition: "2025-06-30", expiry: "2025-12-30", price: 48 },
  { id: 12, crop: "Kidney Beans", stock: 75, acquisition: "2025-05-22", expiry: "2026-01-02", price: 60 },
  { id: 13, crop: "Black Beans", stock: 0, acquisition: "2025-04-11", expiry: "2025-10-01", price: 50 },
  { id: 14, crop: "Green Gram", stock: 110, acquisition: "2025-08-12", expiry: "2026-02-18", price: 38 },
  { id: 15, crop: "Mustard Seeds", stock: 95, acquisition: "2025-09-05", expiry: "2026-03-05", price: 42 },
  { id: 16, crop: "Groundnut", stock: 60, acquisition: "2025-07-25", expiry: "2026-02-15", price: 47 },
  { id: 17, crop: "Sesame", stock: 0, acquisition: "2025-06-10", expiry: "2025-11-10", price: 45 },
  { id: 18, crop: "Sunflower Seeds", stock: 85, acquisition: "2025-08-08", expiry: "2026-01-08", price: 52 },
  { id: 19, crop: "Flax Seeds", stock: 0, acquisition: "2025-04-17", expiry: "2025-10-15", price: 40 },
  { id: 20, crop: "Chia Seeds", stock: 0, acquisition: "2025-03-10", expiry: "2025-09-05", price: 65 },
  { id: 21, crop: "Bajra", stock: 130, acquisition: "2025-07-18", expiry: "2026-02-20", price: 20 },
  { id: 22, crop: "Jowar", stock: 100, acquisition: "2025-06-12", expiry: "2026-01-10", price: 21 },
  { id: 23, crop: "Maize", stock: 0, acquisition: "2025-05-08", expiry: "2025-11-12", price: 23 },
  { id: 24, crop: "Sugarcane", stock: 160, acquisition: "2025-08-01", expiry: "2026-03-01", price: 30 },
  { id: 25, crop: "Cotton", stock: 0, acquisition: "2025-04-14", expiry: "2025-09-30", price: 55 },
  { id: 26, crop: "Coffee Beans", stock: 75, acquisition: "2025-09-02", expiry: "2026-04-02", price: 95 },
  { id: 27, crop: "Tea Leaves", stock: 90, acquisition: "2025-07-14", expiry: "2026-01-14", price: 85 },
  { id: 28, crop: "Cardamom", stock: 40, acquisition: "2025-05-18", expiry: "2026-02-01", price: 120 },
  { id: 29, crop: "Cumin", stock: 0, acquisition: "2025-06-08", expiry: "2025-11-05", price: 75 },
  { id: 30, crop: "Turmeric", stock: 95, acquisition: "2025-08-22", expiry: "2026-03-15", price: 90 },
  { id: 31, crop: "Ginger", stock: 60, acquisition: "2025-09-09", expiry: "2026-03-20", price: 70 },
  { id: 32, crop: "Garlic", stock: 50, acquisition: "2025-08-15", expiry: "2026-01-30", price: 65 },
  { id: 33, crop: "Onion", stock: 0, acquisition: "2025-05-11", expiry: "2025-10-20", price: 25 },
  { id: 34, crop: "Potato", stock: 140, acquisition: "2025-07-19", expiry: "2026-02-25", price: 28 },
  { id: 35, crop: "Tomato", stock: 120, acquisition: "2025-08-05", expiry: "2025-12-25", price: 30 },
  { id: 36, crop: "Cabbage", stock: 0, acquisition: "2025-06-12", expiry: "2025-10-30", price: 20 },
  { id: 37, crop: "Cauliflower", stock: 85, acquisition: "2025-07-20", expiry: "2025-12-20", price: 26 },
  { id: 38, crop: "Spinach", stock: 0, acquisition: "2025-03-09", expiry: "2025-09-01", price: 18 },
  { id: 39, crop: "Carrot", stock: 105, acquisition: "2025-08-09", expiry: "2026-01-09", price: 24 },
  { id: 40, crop: "Beetroot", stock: 0, acquisition: "2025-04-15", expiry: "2025-09-10", price: 22 },
  { id: 41, crop: "Cucumber", stock: 130, acquisition: "2025-07-13", expiry: "2026-01-10", price: 25 },
  { id: 42, crop: "Brinjal", stock: 75, acquisition: "2025-06-22", expiry: "2025-12-22", price: 28 },
  { id: 43, crop: "Okra", stock: 90, acquisition: "2025-08-02", expiry: "2026-02-02", price: 27 },
  { id: 44, crop: "Pumpkin", stock: 60, acquisition: "2025-07-28", expiry: "2026-02-28", price: 23 },
  { id: 45, crop: "Radish", stock: 0, acquisition: "2025-05-15", expiry: "2025-10-15", price: 21 },
  { id: 46, crop: "Lettuce", stock: 40, acquisition: "2025-09-01", expiry: "2026-02-01", price: 29 },
  { id: 47, crop: "Mushroom", stock: 55, acquisition: "2025-07-09", expiry: "2025-12-09", price: 80 },
  { id: 48, crop: "Bell Pepper", stock: 70, acquisition: "2025-08-03", expiry: "2026-01-03", price: 45 },
  { id: 49, crop: "Chili", stock: 100, acquisition: "2025-09-07", expiry: "2026-03-07", price: 35 },
  { id: 50, crop: "Garbanzo Beans", stock: 0, acquisition: "2025-06-03", expiry: "2025-11-03", price: 50 },
];


  const filteredData = inventoryData
    .filter(item => {
      if (filter === "In Stock") return item.stock > 0;
      if (filter === "Out of Stock") return item.stock === 0;
      return true;
    })
    .filter(item => item.crop.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Inventory Management</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
          <div className="flex gap-3">
            {["All", "In Stock", "Out of Stock"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-md border text-sm font-medium ${
                  filter === f
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search crop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-64 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left text-sm font-semibold">Crop</th>
                <th className="py-2 px-4 text-left text-sm font-semibold">Stock</th>
                <th className="py-2 px-4 text-left text-sm font-semibold">Acquisition Date</th>
                <th className="py-2 px-4 text-left text-sm font-semibold">Expiry Date</th>
                <th className="py-2 px-4 text-left text-sm font-semibold">Price (₹/kg)</th>
                <th className="py-2 px-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-2 px-4 text-sm text-gray-800">{item.crop}</td>
                    <td
                      className={`py-2 px-4 text-sm font-medium ${
                        item.stock > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.stock > 0 ? `${item.stock} kg` : "Out of stock"}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-600">
                      {item.acquisition}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-600">
                      {item.expiry}
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-800 font-medium">
                      ₹{item.price}
                    </td>
                    <td className="py-2 px-4 text-sm">
                      <button className="text-blue-600 underline mr-3 hover:text-blue-800">
                        Edit
                      </button>
                      <button className="text-red-600 underline hover:text-red-800">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-4 text-sm"
                  >
                    No inventory items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManager;
