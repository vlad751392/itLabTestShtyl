import { FC } from 'react';

import { ReactComponent as Android } from 'assets/svg/android.svg';
import { ReactComponent as Iphone } from 'assets/svg/iphone.svg';

export const DownloadIcons: FC = () => {
  return (
    <section className="flex justify-center lg:justify-normal items-center gap-6">
      <p className="text-2xl font-light text-white">Aavailable on :</p>
      <div className="group flex justify-center items-center rounded-full w-14 h-14 bg-black/70">
        <Android
          fill="#fff"
          className="group-hover:fill-blue-primary pointer-events-none"
        />
      </div>
      <div className="group flex justify-center items-center rounded-full w-14 h-14 bg-black/70">
        <Iphone className="group-hover:fill-blue-primary pointer-events-none" />
      </div>
    </section>
  );
};
