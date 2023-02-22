import React, { useState, useContext } from 'react';
import Modal from '../component/Modal/Modal';
const ModalContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isModalOpen, setModalContent }}>
      {children}
      {isModalOpen && <Modal item={modalContent} />}
    </ModalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ModalContext);
};

export { ModalContext, AppProvider };
