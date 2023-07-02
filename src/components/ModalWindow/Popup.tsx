import { FC, useRef } from 'react';

import { useOnClickOutside } from 'hooks/useOnClickOutside';

import { PopupProps } from './interfaces/PopupProps';

export const Popup: FC<PopupProps> = (props) => {
  const { onClose, children } = props;
  const squareBoxRef = useRef<HTMLDivElement>(null);
  const clickOutsidehandler = () => {
    onClose();
    document.body.style.overflow = 'auto';
  };

  useOnClickOutside(squareBoxRef, clickOutsidehandler);

  return (
    <div>
      <article
        id="popup"
        className="w-full h-full bg-black/50 flex top-0 left-0 z-10 fixed">
        <section
          ref={squareBoxRef}
          className="m-auto w-3/5 h-2/4 flex justify-center"
          id="popupContent">
          {children}
        </section>
      </article>
    </div>
  );
};

export default Popup;
