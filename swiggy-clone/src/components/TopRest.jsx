import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from '../components/Card';

export default function TopRest() {
    const [slide, setSlide] = useState(0);
    const [data, setData] = useState([]);
    const cardsPerSlide = 2;
    const cardsToShow = 4;

    useEffect(() => {
        const fetchTopRestaurant = async () => {
            try {
                const response = await fetch("http://localhost:8081/top-restaurant-chains");
                const apidata = await response.json();
                setData(apidata);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchTopRestaurant();
    }, []);

    const handleNext = () => {
        setSlide((prevSlide) => Math.min(prevSlide + cardsPerSlide, data.length - cardsToShow));
    };

    const handlePrev = () => {
        setSlide((prevSlide) => Math.max(prevSlide - cardsPerSlide, 0));
    };

    return (
        <div className="max-w-[1260px] mx-auto mb-[100px]">
            <div className="flex my-10 items-center justify-between">
                <div className="text-[25px] font-extrabold">Top restaurant chains in Jodhpur</div>
                <div className="flex">
                    <div
                        className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 ${slide === 0 ? 'bg-gray-400' : 'bg-gray-300'}`}
                        onClick={slide > 0 ? handlePrev : null}
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] rounded-full mx-2 ${slide >= data.length - cardsToShow ? 'bg-gray-400' : 'bg-gray-300'}`}
                        onClick={slide < data.length - cardsToShow ? handleNext : null}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${(slide * 100) / cardsToShow}%)` }}
                >
                    {data.map((d) => (
                        <div className="w-1/2 md:w-1/4 flex-shrink-0" key={d.id}>
                            <Card width="w-full" {...d} />
                        </div>
                    ))}
                </div>
            </div>
            <hr className="my-6 border-[1px]" />
        </div>
    );
}
