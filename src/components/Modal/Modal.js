import { useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

export default function Modal({ imgUrl, onClose }) {
  const onCloseModal = e => {
    if (e.target.nodeName === 'DIV') {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={s.Overlay} onClick={onCloseModal}>
      <div className={s.Modal}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
}

Modal.propType = {
  onClose: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
