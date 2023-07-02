import React, { FC, useEffect, useState } from 'react';

import cn from 'classnames';

interface Props {
  open: boolean;
  showCloseAnimation: boolean;
  handleClick: () => void;
}

const NAV = [
  {
    id: 1,
    title: 'HOME',
    path: 'home'
  },
  {
    id: 2,
    title: 'FEATURES',
    path: 'features'
  },
  {
    id: 3,
    title: 'GALLERY',
    path: 'gallery'
  },
  {
    id: 4,
    title: 'VIDEO',
    path: 'watch'
  },
  {
    id: 5,
    title: 'PRICES',
    path: 'watch'
  },
  {
    id: 6,
    title: 'TESTIMONIALS',
    path: 'watch'
  },
  {
    id: 7,
    title: 'DOWNLOAD',
    path: 'home'
  },
  {
    id: 8,
    title: 'CONTACT',
    path: 'contact'
  }
];

const Navigation: FC<Props> = ({ open, showCloseAnimation, handleClick }) => {
  const [delayedOpen, setDelayedOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!open) {
      timeoutId = setTimeout(() => {
        setDelayedOpen(false);
      }, 1000);
    } else {
      setDelayedOpen(true);
    }

    return () => clearTimeout(timeoutId);
  }, [open]);

  return (
    <section className={cn('lg:h-full', { wrapper: delayedOpen })}>
      <ul
        className={cn(
          'self-start lg:animate-none lg:h-full items-center lg:gap-8 lg:flex',
          {
            'block animate-open-menu': open,
            'block animate-close-menu': !open && showCloseAnimation
          }
        )}>
        {NAV.map(({ title, path, id }) => (
          <li
            key={id}
            className="text-white relative lg:h-full flex items-center text-base before:w-full before:absolute before:top-0 before:border-t-2 before:transition-all before:duration-300 before:ease-in before:border-transparent before:scale-x-0 before:block before:hover:border-blue-primary	before:hover:scale-x-100 hover:text-blue-primary hover:font-bold hover:transition-all hover:duration-300 hover:ease-in font-droid-sans">
            <a onClick={handleClick} href={`#${path}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navigation;
