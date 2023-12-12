import PropTypes from "prop-types";

import { StyledButton } from "../taskForm/taskFormStyle";
import { StyledModal, StyledModalButtons, StyledModalOverlay } from "./modalStyle";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <StyledModalOverlay>
      <StyledModal>
        <p>{message}</p>
        <StyledModalButtons>
          <StyledButton onClick={onCancel}>No</StyledButton>
          <StyledButton onClick={onConfirm}>Yes</StyledButton>
        </StyledModalButtons>
      </StyledModal>
    </StyledModalOverlay>
  );
};
ConfirmationModal.propTypes = {
  message: PropTypes.string,
  onCancel: PropTypes.any,
  onConfirm: PropTypes.any,
};

export default ConfirmationModal;
