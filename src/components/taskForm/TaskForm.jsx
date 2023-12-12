import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { added, edited } from "../../store/tasks/action";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledInputGroup,
} from "./taskFormStyle";

const TaskForm = ({
  children,
  id,
  updateText,
  updateDescription,
  updateDate,
  setEditToggle,
}) => {
  const dispatch = useDispatch();
  // from handling states
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setTask(updateText || "");
    setDescription(updateDescription || "");
    setDate(updateDate || "");
    setError("");
  }, [updateText, updateDescription, updateDate]);

  const handleTask = (e) => {
    setTask(e.target.value);
    setError("");
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    setError("");
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // form title validation
    if (!task.trim()) {
      setError("Task name is required");
      return;
    }

    if (children) {
      dispatch(edited(id, task, description, date));
      setEditToggle(false);
    } else {
      dispatch(added(task, description, date));
    }
    // Clear form fields after submission
    setTask("");
    setDescription("");
    setDate("");
  };

  // get min date value
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zero for months and days less than 10
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputGroup>
          {/* task Title  */}
          <StyledInput
            type="text"
            placeholder="Type your task"
            value={task}
            onChange={handleTask}
          />
          {/* task description */}
          <StyledInput
            type="text"
            placeholder="Type your task description"
            value={description}
            onChange={handleDescription}
          />
          {/* due date */}
          <StyledInput
            type="date"
            placeholder="Select date"
            value={date}
            min={getCurrentDate()}
            onChange={handleDate}
          />
          {/* add or update button  */}
          <StyledButton type="submit">{children || "Add"}</StyledButton>
        </StyledInputGroup>
      </StyledForm>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

TaskForm.propTypes = {
  children: PropTypes.any,
  id: PropTypes.number,
  updateText: PropTypes.any,
  updateDescription: PropTypes.any,
  updateDate: PropTypes.any,
  setEditToggle: PropTypes.any,
};

export default TaskForm;
