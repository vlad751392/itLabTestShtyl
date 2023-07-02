import { useEffect, useState } from 'react';
import Logo from 'assets/png/common/logo.png';

import Navigation from '../../components/Navigation/Navigation';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const Header = () => {
  const [burgerState, setburgerState] = useState(false);
  const [showCloseAnimation, setShowCloseAnimation] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowCloseAnimation(window.innerWidth >= 1024 && false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    burgerState ? setburgerState(false) : setburgerState(true);
    setShowCloseAnimation(true);
  };

  return (
    <header className="duration-200 aabsolute before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/70 fixed top-0 h-32 w-full z-10">
      <div className="header lg:container mx-auto h-full flex items-center justify-between">
        <img className="z-10 pl-6 lg:pl-0" src={Logo} alt="logo" />

        <Navigation
          open={burgerState}
          showCloseAnimation={showCloseAnimation}
        />
        <BurgerMenu burgerState={burgerState} handleClick={handleClick} />
      </div>
    </header>
  );
};
