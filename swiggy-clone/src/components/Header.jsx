import React, { useState, useEffect } from "react";
import { RxCaretDown, RxCross1 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { TbDiscount2 } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
import { MdLocationSearching } from "react-icons/md";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [location, setLocation] = useState("Others");

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const handleImageClick = () => {
    window.location.reload();
  };

  const handleLocationSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.locationSearch.value;
    setLocation(searchValue);
    hideSideMenu();
  };

  const handleGetCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDjuxHG9m-h6ZimGoj5vsbz9CsHfDVfnro`
        )
          .then((response) => response.json())
          .then((data) => {
            const address = data.results[0].formatted_address;
            setLocation(address);
            hideSideMenu();
          })
          .catch((error) => {
            console.error("Error fetching location:", error);
          });
      });
    }
  };

  const link = [
    {
      icons: <PiShoppingBag />,
      name: "Swiggy Corporate",
    },
    {
      icons: <IoIosSearch />,
      name: "Search",
    },
    {
      icons: <TbDiscount2 />,
      name: "Offer",
      sup: "new",
    },
    {
      icons: <FaHandsHelping />,
      name: "Help",
    },
    {
      icons: <IoPersonOutline />,
      name: "SignIn",
    },
    {
      icons: <IoCartOutline />,
      name: "Cart",
      sup: "(2)",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex: 99999999,
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="p-5 mt-20">
            <RxCross1
              className="absolute top-4 left-4 text-2xl cursor-pointer"
              onClick={hideSideMenu}
            />
            <form onSubmit={handleLocationSearch}>
              <input
                type="text"
                name="locationSearch"
                placeholder="Search for area, street, or town..."
                className="w-full h-15 p-2 border border-gray-300 rounded font-bold"
              />
            </form>
            <div className="mt-20">
              <button
                onClick={handleGetCurrentLocation}
                className="w-full border-[1px] border-[#161515] text-black p-2 rounded inline-flex items-center justify-center group"
              >
                <MdLocationSearching className="mr-2 mb-5 " />
                <span className="group-hover:text-[#fc8019]">
                  get current location <br />
                  <span className="text-center text-gray-500 text-sm mt-1">
                    Using GPS
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className="p-[10px] shadow-xl text-[#111113] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1350px] mx-auto flex items-center justify-between">
          <div
            className="w-[50px] hover:scale-110 transition-transform duration-400"
            onClick={handleImageClick}
          >
            <img src="images/swiggy logo.png" className="w-full" alt="" />
          </div>
          <div
            className="cursor-pointer flex items-center group"
            onClick={showSideMenu}
          >
            <span className="font-bold border-b-[3px] border-[black] group-hover:text-[#fc8019] group-hover:border-[#fc8019] ml-10">
              {location}
            </span>
            <span className="ml-2 text-[#555556] group-hover:text-gray-400">
              Jodhpur, Rajasthan, India
            </span>
            <RxCaretDown
              fontSize={25}
              className="font-bold inline text-[#fc8019]"
            />
          </div>
          <nav className="hidden md:flex list-none gap-8 ml-auto text-[18px] font-semibold">
            {link.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer flex hover:text-[#fc8019] items-center gap-2"
              >
                {link.icons}
                {link.name}
                <sup className="text-[#fc8019]">{link.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
