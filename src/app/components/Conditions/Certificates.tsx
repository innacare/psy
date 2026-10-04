'use client';

import {useRef, useState} from 'react';
import Image from 'next/image';
import {withBase} from 'config/site';
import {certificates} from './utils';

const Certificates = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  const open = (id: number) => {
    setCurrent(id);
    dialog.current?.showModal();
  };

  return (
    <>
      <div className="frames">
        {certificates.map(({id, width, height}) => (
          <button
            type="button"
            key={id}
            className="frame"
            aria-label={`Збільшити сертифікат ${id + 1}`}
            onClick={() => open(id)}
          >
            <span>
              <Image
                src={withBase(`/images/certificate_${id}_thumb.webp`)}
                alt={`Сертифікат ${id + 1}`}
                width={width}
                height={height}
                loading="lazy"
              />
            </span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} onClick={() => dialog.current?.close()} onClose={() => setCurrent(null)}>
        {current !== null && (
          <img src={withBase(`/images/certificate_${current}.webp`)} alt={`Сертифікат ${current + 1}`} />
        )}
      </dialog>
    </>
  );
};

export default Certificates;
