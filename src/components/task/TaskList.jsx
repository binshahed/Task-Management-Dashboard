import { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import {
  StyleSelect,
  StyledMessage,
  StyledTaskListContainer,
} from "./taskStyle";

const TaskList = () => {
  // get task list from redux
  const tasks = useSelector((state) => state.tasks);

  // filter state
  const [filter, setFilter] = useState("all"); // Default filter is 'all'

  const taskOderBy = [...tasks].reverse();

  // conditionally task filtering
  const filteredTasks = () => {
    switch (filter) {
      case "completed":
        return taskOderBy.filter((task) => task.completed);
      case "incomplete":
        return taskOderBy.filter((task) => !task.completed);
      default:
        return taskOderBy;
    }
  };

  // on change filter handler
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      {/* filter Option */}
      <StyleSelect
        id="filterSelect"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="all">All Task</option>
        <option value="completed">Completed Task</option>
        <option value="incomplete">Incomplete Task</option>
      </StyleSelect>

      {/* filter List */}
      <StyledTaskListContainer>
        {filteredTasks().length > 0 ? (
          filteredTasks().map((task) => <Task key={task.id} task={task} />)
        ) : (
          <StyledMessage>
            No {filter !== "all" && filter} tasks are available
          </StyledMessage>
        )}
      </StyledTaskListContainer>
    </>
  );
};

export default TaskList;
