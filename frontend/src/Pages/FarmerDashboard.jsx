import HomeDashboard from "../Components/Home/HomeDashboard";
import {Link} from "react-router-dom";
import Corn from "../assets/images/corn.jpg";
import Wheat from "../assets/images/wheat.jpg";
import Soya from "../assets/images/soyabean.jpg";
import Disease from "../assets/images/disease-detection.png";

const FarmerDashboard = () => {
        return (
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 w-full">
        <main className="mt-10 space-y-16">
          {/* Welcome Section */}
          <section>
            <h1 className="text-3xl font-semibold">Welcome back, Ethan!</h1>
            <p className="text-gray-600 mt-2">
              Your personalized dashboard for sustainable farming.
            </p>
          </section>

          {/* Crop Recommendations */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Crop Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Wheat Varieties for Your Region",
                  text: "Discover the best wheat varieties suited for your farm's soil and climate.",
                  img: Wheat,
                },
                {
                  title: "Optimized Corn Cultivation",
                  text: "Maximize your corn yield with our expert cultivation techniques.",
                  img: Corn,
                },
                {
                  title: "Soybean Planting Strategies",
                  text: "Learn effective strategies for planting and nurturing soybeans.",
                  img: Soya,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow">
                  <div
                    className="h-40 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Disease Detection */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Disease Detection</h2>
            <div className="flex flex-col md:flex-row bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold">
                  Early Blight Detection
                </h3>
                <p className="text-gray-600 mt-2 mb-4">
                  Identify early blight in your crops with our AI-powered tool.
                </p>
                <Link to="/dieseasedetection">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">
                    Detect Now
                  </button>
                </Link>
              </div>
              <div
                className="md:w-1/2 h-56 md:h-auto bg-cover bg-center"
                style={{
                  backgroundImage:
                    `url(${Disease})`,
                }}
              />
            </div>
          </section>

          {/* Cultivation Guides */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Cultivation Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">
                🌱 Crop Rotation Techniques
              </div>
              <div className="bg-white p-4 rounded shadow">
                💧 Water Management Strategies
              </div>
              <div className="bg-white p-4 rounded shadow">
                ☀️ Optimizing Sunlight Exposure
              </div>
            </div>
          </section>

          {/* Sustainable Practices */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Sustainable Practices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">
                ♻️ Organic Farming Methods
              </div>
              <div className="bg-white p-4 rounded shadow">
                🍃 Soil Conservation Practices
              </div>
              <div className="bg-white p-4 rounded shadow">
                🌍 Eco-Friendly Pest Control
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded shadow">🌍 News</div>
              <div className="bg-white p-4 rounded shadow">🫂 Community</div>
              <div className="bg-white p-4 rounded shadow">💹 Market</div>
              <div className="bg-white p-4 rounded shadow">
                📃 Govt. Subsidy
              </div>
              <div className="bg-white p-4 rounded shadow">
                🌾 Yield Estimator
              </div>
            </div>
          </section>
          <section>
            <HomeDashboard />
          </section>
        </main>
      </div>
    </div>
    );
}

export default FarmerDashboard
