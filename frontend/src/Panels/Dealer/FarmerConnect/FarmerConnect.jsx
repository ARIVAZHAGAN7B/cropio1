import React, { useState } from "react";

export default function FarmerConnect() {
  const allFarmers = [
    {
      name: "Ethan Carter",
      crop: "Wheat",
      quantity: 500,
      location: "Springfield",
      image:
        "https://images.unsplash.com/photo-1615478337153-3c1b4b74b3e1?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Sophia Green",
      crop: "Corn",
      quantity: 300,
      location: "Riverdale",
      image:
        "https://images.unsplash.com/photo-1598514982447-c1bfcde8f3bd?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Liam Johnson",
      crop: "Rice",
      quantity: 700,
      location: "Greenfield",
      image:
        "https://images.unsplash.com/photo-1600790055941-06e3d0f7a6c3?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Olivia Brown",
      crop: "Barley",
      quantity: 420,
      location: "Mapleton",
      image:
        "https://images.unsplash.com/photo-1604951022916-58c2d1b17f2d?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Noah Smith",
      crop: "Soybean",
      quantity: 350,
      location: "Hilltown",
      image:
        "https://images.unsplash.com/photo-1628527982064-8a4eea2a39e5?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Ava Wilson",
      crop: "Oats",
      quantity: 290,
      location: "Sunnyvale",
      image:
        "https://images.unsplash.com/photo-1620394693235-422f1e01923f?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Isabella Davis",
      crop: "Maize",
      quantity: 450,
      location: "Oakridge",
      image:
        "https://images.unsplash.com/photo-1517061495891-07d3a75a93a1?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Mason Lee",
      crop: "Sugarcane",
      quantity: 800,
      location: "Brookfield",
      image:
        "https://images.unsplash.com/photo-1602751584619-8dbcb3f48b41?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Charlotte Moore",
      crop: "Millet",
      quantity: 230,
      location: "Clearwater",
      image:
        "https://images.unsplash.com/photo-1589468524883-4f083a7d1464?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [cropFilter, setCropFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredFarmers, setFilteredFarmers] = useState(allFarmers);

  const handleFilter = () => {
    let filtered = allFarmers;

    if (cropFilter) {
      filtered = filtered.filter(
        (farmer) => farmer.crop.toLowerCase() === cropFilter.toLowerCase()
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(
        (farmer) => farmer.location.toLowerCase() === locationFilter.toLowerCase()
      );
    }

    setFilteredFarmers(filtered);
  };

  const handleClearFilters = () => {
    setCropFilter("");
    setLocationFilter("");
    setFilteredFarmers(allFarmers);
  };

  return (
    <div className="min-h-screen bg-[#fafbf9] font-['Lexend'] text-[#131811] flex flex-col items-center px-4 py-10">
      {/* Filter Section */}
      <section className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-[#d9e1d6] p-6 mb-10 text-center">
        <h2 className="text-[24px] font-bold mb-6">Filters</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex flex-col w-full md:w-1/3">
            <label className="block text-base font-medium pb-2">Crop Type</label>
            <select
              value={cropFilter}
              onChange={(e) => setCropFilter(e.target.value)}
              className="w-full h-12 rounded-xl border border-[#d9e1d6] bg-[#fafbf9] px-4"
            >
              <option value="">All Crops</option>
              {[...new Set(allFarmers.map((f) => f.crop))].map((crop) => (
                <option key={crop}>{crop}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <label className="block text-base font-medium pb-2">Location</label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full h-12 rounded-xl border border-[#d9e1d6] bg-[#fafbf9] px-4"
            >
              <option value="">All Locations</option>
              {[...new Set(allFarmers.map((f) => f.location))].map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleFilter}
            className="h-10 px-6 rounded-full bg-[#c5e0b7] text-sm font-bold hover:bg-[#b1d6a2] transition"
          >
            Apply Filters
          </button>
          <button
            onClick={handleClearFilters}
            className="h-10 px-6 rounded-full bg-[#ecf0ea] text-sm font-medium hover:bg-[#dee4db] transition"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Farmers Directory Section */}
      <section className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <p className="text-2xl font-bold">Farmers Directory</p>
          <p className="text-[#6d8560] text-sm">
            Find farmers based on your requirements
          </p>
        </div>

        {/* Farmers Cards */}
        {filteredFarmers.length === 0 ? (
          <p className="text-center text-[#6d8560]">No farmers found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFarmers.map((farmer, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-stretch gap-4 rounded-xl bg-[#fafbf9] border border-[#d9e1d6] p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex-1 flex flex-col gap-2 justify-center">
                  <p className="text-sm text-[#6d8560]">Farmer</p>
                  <p className="text-base font-bold leading-tight">{farmer.name}</p>
                  <p className="text-sm text-[#6d8560]">
                    Crop: {farmer.crop}, Quantity: {farmer.quantity} tons, Location:{" "}
                    {farmer.location}
                  </p>
                  <button className="h-8 px-4 w-fit bg-[#ecf0ea] text-sm font-medium rounded-full hover:bg-[#d9e1d6] transition">
                    Message
                  </button>
                </div>
                <div
                  className="aspect-video bg-center bg-cover rounded-xl flex-1"
                  style={{ backgroundImage: `url(${farmer.image})` }}
                ></div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
