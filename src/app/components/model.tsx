// components/Modal.tsx
import { useState } from 'react';
import "../styles/modal.css"
const Modal = ({ onClose }: { onClose: (continueReading: boolean) => void }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = (continueReading: boolean) => {
    setShowModal(false);
    onClose(continueReading);
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Are you still reading?</h2>
          <div className="modal-buttons">
            <button onClick={() => handleClose(true)}>Yes</button>
            <button onClick={() => handleClose(false)}>No</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
