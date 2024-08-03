import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const restaurantData = {
  "Best Places to Eat Across Cities": [
    "Best Restaurants in Bangalore",
    "Best Restaurants in Pune",
    "Best Restaurants in Mumbai",
    "Best Restaurants in Delhi",
    "Best Restaurants in Hyderabad",
    "Best Restaurants in Kolkata",
    "Best Restaurants in Chennai",
    "Best Restaurants in Chandigarh",
    "Best Restaurants in Ahmedabad",
    "Best Restaurants in Jaipur",
    "Best Restaurants in Nagpur",
    "Best Restaurants in Bhubaneswar",
    "Best Restaurants in Kochi",
    "Best Restaurants in Surat",
    "Best Restaurants in Dehradun",
    "Best Restaurants in Ludhiana",
    "Best Restaurants in Patna",
    "Best Restaurants in Mangaluru",
    "Best Restaurants in Bhopal",
    "Best Restaurants in Gurgaon",
    "Best Restaurants in Coimbatore",
    "Best Restaurants in Agra",
    "Best Restaurants in Noida",
    "Best Restaurants in Vijayawada",
    "Best Restaurants in Guwahati",
    "Best Restaurants in Mysore",
    "Best Restaurants in Pondicherry",
    "Best Restaurants in Thiruvananthapuram",
    "Best Restaurants in Ranchi",
    "Best Restaurants in Vizag",
    "Best Restaurants in Udaipur",
    "Best Restaurants in Vadodara",
  ],
  "Best Cuisines Near Me": [
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    "Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
    "Biryani Restaurant Near Me",
    "Japanese Restaurant Near Me",
    "Arabian Restaurant Near Me",
    "Fast Food Restaurant Near Me",
    "Jain Restaurant Near Me",
    "Gujarati Restaurant Near Me",
    "Thai Restaurant Near Me",
    "Pizzas Restaurant Near Me",
    "Asian Restaurant Near Me",
    "Cafe Restaurant Near Me",
    "Continental Restaurant Near Me",
    "Mexican Restaurant Near Me",
    "Mughlai Restaurant Near Me",
    "Sushi Restaurant Near Me",
    "Mangalorean Restaurant Near Me",
    "Tibetan Restaurant Near Me",
    "Barbecue Restaurant Near Me",
    "Maharashtrian Restaurant Near Me",
    "Nepalese Restaurant Near Me",
    "Rajasthani Restaurant Near Me",
    "Turkish Restaurant Near Me",
  ],
  "Explore Every Restaurants Near Me": [
    "Explore Restaurants Near Me",
    "Explore Top Spots Near Me",
    "Explore Popular Spots",
    "Explore New Spots"
  ],
};

const NearMe = () => {
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (category) => {
    setShowMore((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="max-w-[1280px] mx-auto category-container bg-white mt-15">
      {Object.keys(restaurantData).map((category, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-black text-[27px] font-extrabold mb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {restaurantData[category]
              .slice(
                0,
                showMore[category] ? restaurantData[category].length : 8
              )
              .map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl p-4 text-center"
                  style={{
                    fontFamily: "Gilroy",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "19px",
                    letterSpacing: "-0.3px",
                    color: "rgba(2, 6, 12, 0.75)",
                    overflow: "hidden",
                    width: "100%",
                    display: "-webkit-box",
                    overflowWrap: "break-word",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    textAlign: "center",
                  }}
                >
                  {item}
                </div>
              ))}
          </div>
          {restaurantData[category].length > 8 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleShowMore(category)}
                className="flex items-center text-gray-700"
              >
                <IoIosArrowDown
                  className={`transition-transform ${
                    showMore[category] ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NearMe;
