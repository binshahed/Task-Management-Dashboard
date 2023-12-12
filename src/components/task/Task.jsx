import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleted, toggled } from "../../store/tasks/action";
import TaskForm from "../taskForm/TaskForm";

import {
  StyledCheckMark,
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledDate,
  StyledDescription,
  StyledIcon,
  StyledTaskContainer,
  StyledTaskContent,
  StyledTitle,
} from "./taskStyle";
import ConfirmationModal from "../modal/ConfirmationModal";

const Task = ({ task }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const dispatch = useDispatch();
  const { text, description, completed, id, date } = task;

  //  toggle Handler
  const handleStatusChange = (id) => {
    dispatch(toggled(id));
  };

  const handleDelete = () => {
    // delete confirmation modal
    setShowConfirmationModal(true);
  };

  // delete handler
  const confirmDelete = () => {
    dispatch(deleted(id));
    setShowConfirmationModal(false);
  };
  // delete confirmation modal  cancel
  const cancelDelete = () => {
    setShowConfirmationModal(false);
  };

  return (
    <>
      <StyledTaskContainer>
        {/* task toggle check box */}

        {/* 0,1 used to avoid styled component warning */}
        <StyledCheckboxContainer completed={completed ? 1 : 0}>
          <StyledCheckbox
            type="checkbox"
            checked={completed}
            onChange={() => handleStatusChange(id)}
          />
          {/* task completed icon */}
          {completed && (
            <StyledCheckMark viewBox="0 0 20 20">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </StyledCheckMark>
          )}
        </StyledCheckboxContainer>

        {/* task name and description  */}
        <StyledTaskContent>
          {/* 0,1 used to avoid styled component warning */}
          <StyledTitle completed={completed ? 1 : 0}>{text}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTaskContent>

        {/* task date  */}
        <StyledDate>{date}</StyledDate>

        {/* task update icon */}
        <StyledIcon
          onClick={() => setEditToggle(!editToggle)}
          src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png"
          alt="Edit"
        />
        {/* task delete icon */}
        <StyledIcon
          src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
          alt="Delete"
          onClick={() => handleDelete(id)}
        />
      </StyledTaskContainer>

      {/* Task update form  */}
      {editToggle && (
        <TaskForm
          btnText="Update"
          id={id}
          updateText={text}
          updateDescription={description}
          setEditToggle={setEditToggle}
        >
          Update
        </TaskForm>
      )}

      {/* delete confirmation modal */}
      {showConfirmationModal && (
        <ConfirmationModal
          message="Are you sure want to delete this task?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
