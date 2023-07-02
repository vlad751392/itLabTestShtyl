import { FeatureIcon } from './FeatureIcon';

import chatIcon from 'assets/png/feature/chatIcon.png';
import commentIcon from 'assets/png/feature/commentIcon.png';
import phoneIcon from 'assets/png/feature/phoneIcon.png';
import layoutIcon from 'assets/png/feature/layoutIcon.png';

const SLIDER_CONTENT_MOCK = [
  {
    id: 1,
    icon: layoutIcon,
    title: 'Attractive Layout',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  },
  {
    id: 2,
    icon: phoneIcon,
    title: 'Attractive Layout',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  },
  {
    id: 3,
    icon: chatIcon,
    title: 'Attractive Layout',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  },
  {
    id: 4,
    icon: commentIcon,
    title: 'Attractive Layout',
    description:
      'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
  }
];

export const Features = () => {
  return (
    <article
      id="features"
      className="pb-28 border-b-4 border-color-gray-lighter">
      <h2 className="text-3xl text-gray-primary pt-20">
        <b>summarise the features</b>
      </h2>
      <p className="text-xl text-gray-primary font-light pb-24">
        summarise what your product is all about
      </p>
      <section className="flex container mx-auto flex-wrap lg:flex-nowrap lg:gap-10 self-center">
        {SLIDER_CONTENT_MOCK.map((props, id) => (
          <FeatureIcon key={id} {...props}></FeatureIcon>
        ))}
      </section>
    </article>
  );
};
