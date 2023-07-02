import { FC } from 'react';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export const FeatureIcon: FC<Props> = ({ icon, title, description }) => {
  return (
    <>
      <article className="sm:w-6/12 lg:w-full group">
        <div className="border-2 group-hover:bg-gray-primary cursor-pointer bg-blue-primary border-gray-lighter rounded-full w-52 h-52 flex justify-center mx-auto">
          <img className="p-16" src={icon} alt="icon" />
        </div>
        <h3 className="font-lato group-hover:text-blue-primary text-lg py-8 2xl:py-12">
          <b>{title}</b>
        </h3>
        <p className="text-base text-gray-light px-8 pb-8 lg:pb-0">
          {description}
        </p>
      </article>
    </>
  );
};
