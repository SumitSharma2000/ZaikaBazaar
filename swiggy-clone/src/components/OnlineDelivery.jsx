import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';

export default function OnlineDelivery() {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch('http://localhost:8081/top-restaurant-chains');
      const apidata = await response.json();
      setData(apidata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto" ref={componentRef}>
      <div className={`flex my-5 items-center justify-between ${isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}`}>
        <div className="text-[25px] font-extrabold">Restaurants with online food delivery in Jodhpur</div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {data.map((d, i) => (
          <Card key={i} {...d} />
        ))}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}
