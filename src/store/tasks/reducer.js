/* eslint-disable no-case-declarations */
import { initialState } from "./initialState";
import { ADDED, TOGGLED, DELETED, EDITED } from "./actionType";

function nextTaskId(tasks) {
  const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), -1);
  return maxId + 1;
}

const reducer = (state = initialState || [], action) => {
  switch (action.type) {
    // add task
    case ADDED:
      const allTask = [
        ...state,
        {
          id: nextTaskId(state),
          text: action.payload.taskText,
          description: action.payload.taskDescription,
          date: action.payload.date,
          completed: false,
        },
      ];
      // set data to localStorage
      localStorage.setItem("task-value", JSON.stringify(allTask));
      return JSON.parse(localStorage.getItem("task-value"));
    // toggle task
    case TOGGLED:
      const updatedTask = state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
      // set data to localStorage
      localStorage.setItem("task-value", JSON.stringify(updatedTask));
      return updatedTask;
    // edit task
    case EDITED:
      const editTask = state.map((task) => {
        if (task.id !== action.payload.taskId) {
          return task;
        }
        return {
          ...task,
          text: action.payload.taskText,
          description: action.payload.taskDescription,
          date: action.payload.date,
        };
      });
      localStorage.setItem("task-value", JSON.stringify(editTask));
      return editTask;
    // delete task
    case DELETED:
      const deletedItem = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("task-value", JSON.stringify(deletedItem));
      return deletedItem;

    default:
      return state;
  }
};

export default reducer;
