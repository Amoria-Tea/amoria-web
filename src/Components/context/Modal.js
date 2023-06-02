import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(modalRef.current || null);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ children, setShowModal }) {
  const modalNode = useContext(ModalContext);

  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div
      id="modal"
      className="fixed top-0 right-0 left-0 bottom-0 flex content-center items-center z-30 h-screen w-screen overflow-hidden"
    >
      <motion.div
        id="modal-background"
        onClick={() => setShowModal(false)}
        className="fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.85)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <div className="modal-content h-full relative m-auto flex items-center justify-center">
        {children}
      </div>
    </div>,
    modalNode
  );
}
