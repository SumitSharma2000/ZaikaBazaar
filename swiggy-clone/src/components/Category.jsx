import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [currentCategory, setCurrentCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch("http://localhost:8081/categories");
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCurrentCategory(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (slide + 8 >= currentCategory.length) return;
    setSlide(slide + 4);
  };

  const previousSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 4);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swiped left');
      nextSlide();
    },
    onSwipedRight: () => {
      console.log('Swiped right');
      previousSlide();
    },
    trackMouse: true,
  });

  return (
    <div className="max-w-[1260px] mx-auto category-container">
      <div className="flex my-5 items-center justify-between">
        <div className="custom-font-class">What's on your mind?</div>
        <div className="flex">
          <div
            className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 ${slide === 0 ? 'bg-gray-400' : 'bg-[#e2e2e7]'}`}
            onClick={previousSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 ${slide + 8 >= currentCategory.length ? 'bg-gray-400' : 'bg-[#e2e2e7]'}`}
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div {...handlers} className="flex overflow-hidden">
        {currentCategory.map((cat, index) => (
          <div
            style={{
              transform: `translateX(-${slide * 160}px)`,
            }}
            key={index}
            className="w-[160px] shrink-0 duration-500"
          >
            <img src={"http://localhost:8081/images/" + cat.image} alt="" />
          </div>
        ))}
      </div>
      <hr className="my-2 border-[1px]" />
    </div>
  );
}
