import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const OptionModal = ({ selectedOption, clearselectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    onRequestClose={clearselectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={clearselectedOption}>
      Okey
    </button>
  </Modal>
);

export default OptionModal;
