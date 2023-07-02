import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import SlidePng from 'assets/png/home-slider/slider-1.png';
import SlideBgPng from 'assets/png/home-slider/bg-slider-1.png';

import { SliderItem } from './SliderItem';

import 'swiper/css';

const SLIDER_CONTENT_MOCK = [
  {
    id: 1,
    bgSlider: SlideBgPng,
    imgSlider: SlidePng,
    titleSlider: () => {
      return (
        <>
          Simple, Beautiful <b>and Amazing</b>
        </>
      );
    },
    supTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.',
    button1Text: 'Download',
    button2Text: 'Learn More'
  },
  {
    id: 2,
    bgSlider: SlideBgPng,
    imgSlider: SlidePng,
    titleSlider: () => {
      return (
        <>
          Simple, Beautiful <b>and Amazing</b>
        </>
      );
    },
    supTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.',
    button1Text: 'Download',
    button2Text: 'Learn More'
  },
  {
    id: 3,
    bgSlider: SlideBgPng,
    imgSlider: SlidePng,
    titleSlider: () => {
      return (
        <>
          Simple, Beautiful <b>and Amazing</b>
        </>
      );
    },
    supTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.',
    button1Text: 'Download',
    button2Text: 'Learn More'
  }
];

export const HomeSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true
      }}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev'
      }}
      modules={[Navigation, Pagination]}
      id="home"
      className="home-slider border-b-4 border-blue-primary flex justify-center">
      {SLIDER_CONTENT_MOCK.map((props, id) => (
        <SwiperSlide key={id}>
          <SliderItem {...props} />
        </SwiperSlide>
      ))}
      <div className="absolute w-11/12 hidden sm:block mx-auto top-2/4">
        <button className="prev h-11 w-11 rounded-full text-white bg-blue-primary/20 hover:bg-blue-primary overflow-visible z-10 left-0  absolute">
          ❮
        </button>
        <button className="next h-11 w-11 rounded-full text-white bg-blue-primary/20 hover:bg-blue-primary overflow-visible z-10 right-0  absolute">
          ❯
        </button>
      </div>
    </Swiper>
  );
};
