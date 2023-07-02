import 'swiper/css/pagination';
import { GalleryIteam } from './GalleryIteam';

import preview from 'assets/png/gallery/preview.png';

import 'swiper/css';

const SLIDER_CONTENT_MOCK = [
  {
    preview: preview,
    title: 'SCREEN SHOT #1',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  },
  {
    preview: preview,
    title: 'SCREEN SHOT #2',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  },
  {
    preview: preview,
    title: 'SCREEN SHOT #3',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  },
  {
    preview: preview,
    title: 'SCREEN SHOT #4',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  }
];

export const Gallery = () => {
  return (
    <article
      id="gallery"
      className="pb-28 border-b-4 border-color-gray-lighter">
      <h2 className="text-3xl pt-20">
        <b>summarise the features</b>
      </h2>
      <p className="text-xl pb-24">summarise what your product is all about</p>
      <section className="flex lg:container justify-around flex-wrap lg:flex-nowrap mx-auto lg:gap-10  self-center">
        {SLIDER_CONTENT_MOCK.map((props, id) => (
          <GalleryIteam key={id} {...props}></GalleryIteam>
        ))}
      </section>
    </article>
  );
};
