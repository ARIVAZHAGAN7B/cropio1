import React from "react";

const Customers = () => {
  const customers = [
    { name: "Alice Thompson", crop: "Wheat", pricePerKg: 2.5, purchasedKg: 200 },
    { name: "Benjamin Harris", crop: "Corn", pricePerKg: 1.8, purchasedKg: 150 },
    { name: "Chloe Wilson", crop: "Rice", pricePerKg: 3.0, purchasedKg: 100 },
    { name: "Daniel Lee", crop: "Barley", pricePerKg: 2.2, purchasedKg: 250 },
    { name: "Ella Martinez", crop: "Soybean", pricePerKg: 2.8, purchasedKg: 180 },
    { name: "Felix Johnson", crop: "Oats", pricePerKg: 1.9, purchasedKg: 300 },
    { name: "Grace Kim", crop: "Maize", pricePerKg: 2.1, purchasedKg: 220 },
    { name: "Henry Brown", crop: "Sugarcane", pricePerKg: 1.5, purchasedKg: 400 },
    { name: "Isabella Davis", crop: "Millet", pricePerKg: 2.0, purchasedKg: 150 },
    { name: "Jack Wilson", crop: "Wheat", pricePerKg: 2.5, purchasedKg: 180 },
    { name: "Katherine Clark", crop: "Corn", pricePerKg: 1.8, purchasedKg: 200 },
    { name: "Liam Scott", crop: "Rice", pricePerKg: 3.0, purchasedKg: 120 },
    { name: "Mia Lewis", crop: "Barley", pricePerKg: 2.2, purchasedKg: 270 },
    { name: "Noah Hall", crop: "Soybean", pricePerKg: 2.8, purchasedKg: 160 },
    { name: "Olivia Allen", crop: "Oats", pricePerKg: 1.9, purchasedKg: 310 },
  ];

  return (
    <div className="min-h-screen bg-[#fafbf9] font-['Lexend'] p-6 ml-20">
      <h1 className="text-3xl font-bold text-center mb-6">Customers List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer, index) => {
          const totalPrice = (customer.pricePerKg * customer.purchasedKg).toFixed(2);
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <p className="text-sm text-[#6d8560] mb-1">Customer</p>
              <p className="text-lg font-bold mb-2">{customer.name}</p>
              <p className="text-sm text-[#6d8560] mb-1">
                Crop: {customer.crop}
              </p>
              <p className="text-sm text-[#6d8560] mb-1">
                Price per Kg: ${customer.pricePerKg.toFixed(2)}
              </p>
              <p className="text-sm text-[#6d8560] mb-1">
                Purchased Kg: {customer.purchasedKg} kg
              </p>
              <p className="text-base font-semibold mt-2">
                Total: ${totalPrice}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
