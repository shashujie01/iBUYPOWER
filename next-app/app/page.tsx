"use client";
import React, { useEffect } from 'react';
import ProductCard from './components/ProductCard';
import productsData from './components/ProductsData';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
const HomePage: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination, Navigation, Scrollbar],
      spaceBetween: 0,
      loop: false,
      slidesPerView: 4,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        900: {
          slidesPerView: 3,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        768: {
          slidesPerView: 2,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        640: {
          slidesPerView: 1,

        },
        0: {
          slidesPerView: 1,

        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);


  return (
    <>
      <div className='mx-auto flex max-w-[1500px] flex-col items-center'>
        <div className="flex flex-col items-center gap-1 p-2">
          <div className="text-[1.7rem] font-bold leading-9 md:text-3xl">Best Selling Gaming PC</div>
          <div className="text-2xl font-bold">Prebuilt &amp; Custom
          </div>
        </div>
        <div className="relative flex w-full py-6">

          <div className="absolute -top-12 right-14 hidden md:block">
            <div className="swiper-buttons flex gap-4">
              <button className="swiper-button-next " >
              </button>
              <button className="swiper-button-prev">
              </button>
            </div>
          </div>

          <div className='swiper overflow-y-visible'>
            <div className='swiper-wrapper' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
              {productsData.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
