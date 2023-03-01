import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ closeModal, toDos }) => {
  const closeOverlay = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const closeESC = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeESC);

    return () => window.removeEventListener('keydown', closeESC);
  }, []);

  return (
    <div className={css.overlay} onClick={closeOverlay}>
      <div className={css.modal}>
        {toDos.map(({ id, title, description }) => {
          return (
            <div key={id}>
              <h1>{title}</h1>
              <h2>Description:</h2>
              <p>{description}</p>
              <input type="checkbox" />
            </div>
          );
        })}
        <button type="button" onClick={() => closeModal()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
