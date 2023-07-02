import { FC, ReactNode } from 'react';

import { Button } from 'components/Button';
import { DownloadIcons } from 'components/DownloadIcons/DownloadIcons';

interface Props {
  bgSlider: string;
  imgSlider: string;
  titleSlider: () => ReactNode;
  supTitle: string;
  button1Text: string;
  button2Text: string;
}

export const SliderItem: FC<Props> = ({
  bgSlider,
  imgSlider,
  button1Text,
  button2Text,
  titleSlider,
  supTitle
}) => {
  const containerStyle = {
    backgroundImage: `url(${bgSlider})`
  };

  return (
    <div
      className={'pb-20 lg:pb-0 pt-24 bg-no-repeat bg-cover'}
      style={containerStyle}>
      <div className="flex pt-10 justify-center lg:justify-normal">
        <img src={imgSlider} className="w-5/12 hidden lg:block" alt="slider" />
        <div className="px-5 lg:pl-4 flex flex-col sm:w-9/12 lg:w-6/12 justify-center">
          <h1 className="text-4xl 2xl:text-6xl lg:text-left mb-3 sm:mb-0 xl:mb-10 text-white font-light">
            {titleSlider()}
          </h1>
          <span className="mb-10 2xl:mb-14 lg:text-left lg:pr-0 text-lg 2xl:pr-16 2xl:text-2xl text-white">
            {supTitle}
          </span>
          <div className="justify-center flex-wrap lg:justify-start flex gap-6 mb-10 2xl:mb-16">
            <Button className="relative transition-all rounded-lg bg-blue-primary border-4 border-transparent px-14 2xl:py-5 2xl:px-16 text-white bg-rimary hover:border-transparen before:transition-all before:h-full before:w-full before:bg-blue-dark before:top-0 before:left-0 before:bg-blue-dark btn font-bold active:border-4 active:border-white">
              {button1Text}
            </Button>
            <Button>{button2Text}</Button>
          </div>
          <DownloadIcons></DownloadIcons>
        </div>
      </div>
    </div>
  );
};
