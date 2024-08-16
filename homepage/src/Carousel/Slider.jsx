import React,{useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


export default function Slider() {
    const slides = [
        {
        url: 'https://imgs.search.brave.com/SipHW3Kbe60C3Hs-j4GFQf-T9WFMht4aURHrWN-l3js/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzE1LzIwLzE1/LzM2MF9GXzYxNTIw/MTUyMl9KTlA2OUtx/OHdaTEFrWUUyZFlt/WWxFQTFDTFA3cmNU/aC5qcGc',
    },
    {
      url: 'https://imgs.search.brave.com/R7d_rWts6gMdWBS-Ss_rNjknq70XKKdgIdYoDRNg5cM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzY0Lzk1Lzgy/LzM2MF9GXzM2NDk1/ODI4Nl9jNEsyR3BX/MG1IUlRpVEV1UEhC/VmtEcGNzWTVZYTkw/Mi5qcGc',
    },
    {
      url: 'https://imgs.search.brave.com/8x0ZcKWiYUv5GHavG1uWSMjGslpxBLCKd8JPnpAJspc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/ODI3MTcyNy9waG90/by9hYnN0cmFjdC13/YXZ5LW9iamVjdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Q3V1Qzc5R3ZjTzA2/SzVFcEJlUTJBTU82/OFRrWlM4bXc5Wnlk/SjJCTWZlbz0',
    },

    {
      url: 'https://imgs.search.brave.com/ddKOxDgEJV2LIZeceFONHSiyc1i_kxtRM7rH9iUk4wU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waXhl/bHouY2Mvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMTAvZ3Jl/eS1vY3RhZ29ucy11/aGQtOGstd2FsbHBh/cGVyLTU0OHgzMDgu/anBn',
    },
    {
      url: 'https://imgs.search.brave.com/DoQvL2YrXBYMBlUFYbHvEs_jY2RsOPFg0tbrn4SrR1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by84ay1oaWdoZGV0/YWlsLWNhcHR1cmUt/bWFqZXN0aWMtYmV0/dGEtZmlzaF8xMDg3/Mzc5LTUwNS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[100%] h-[500px] w-full m-0 py-0 px-0 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      ><span className='text-9xl px-8 text-white position:absolute'>Hello<br/> There</span></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );

}
