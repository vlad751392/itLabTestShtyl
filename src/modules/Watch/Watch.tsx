import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RingLoader } from 'react-spinners';

import 'swiper/css/pagination';

import bg from 'assets/png/watch/bg.png';
import playIcon from 'assets/png/watch/play-icon.png';
import Popup from 'components/ModalWindow/Popup';

import 'swiper/css';

export const Watch = () => {
  const containerStyle = {
    backgroundImage: `url(${bg})`
  };
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    modalRef.current = document.getElementById('root');
  }, []);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setLoading(true);
    setShowModal(true);
  };

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <article
      id="watch"
      className="sm:pb-28 pt-24 sm:pt-52 bg-no-repeat bg-cover"
      style={containerStyle}>
      {showModal &&
        createPortal(
          <Popup onClose={() => setShowModal(false)}>
            <div className="w-full flex justify-center">
              <div className="absolute top-2/4">
                <RingLoader color="#ffffff" loading={loading} />
              </div>
              <iframe
                className="w-8/12 h-3/6 absolute"
                src="https://www.youtube.com/embed/w3tVNOtZUHI"
                onLoad={handleIframeLoad}></iframe>
            </div>
          </Popup>,
          modalRef.current as HTMLElement
        )}
      <section id="watch" className="container mx-auto">
        <img className="mx-auto" onClick={openModal} src={playIcon} alt="" />
        <h2 className="sm:px-0 px-10 font-light text-6xl py-14 text-white">
          Watch the best Technology <b>in Action</b>
        </h2>
        <p className="sm:px-0 px-20 font-light xl:w-6/12 xl:mx-auto text-2xl pb-24 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis
          at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam
          pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.
        </p>
      </section>
    </article>
  );
};
