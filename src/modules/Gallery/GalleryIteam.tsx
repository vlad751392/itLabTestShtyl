import { FC } from 'react';

interface Props {
  preview: string;
  title: string;
  description: string;
}

export const GalleryIteam: FC<Props> = ({ preview, title, description }) => {
  return (
    <article className="sm:w-2/5 lg:w-full group">
      <section className="group cursor-pointer mx-10 sm:mx-0 rounded-xl overflow-hidden">
        <section className="flex flex-col justify-center relative">
          <p className="group-hover:block text-3xl hidden z-10 absolute text-white self-center">
            +
          </p>
          <img src={preview} alt="icon" />
          <section className="group-hover:opacity-50 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:absolute group-hover:bg-blue-primary"></section>
        </section>
        <section className="group-hover:bg-[#48626f] bg-gray-dark flex justify-center w-full">
          <h3 className="font-lato text-lg py-4 text-blue-primary">
            <b>{title}</b>
          </h3>
        </section>
      </section>

      <p className="text-base text-gray-light px-8 pt-9 pb-8 lg:pb-0">
        {description}
      </p>
    </article>
  );
};
