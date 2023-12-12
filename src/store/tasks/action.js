import { ADDED, TOGGLED, DELETED, EDITED } from "./actionType";

export const added = (taskText, taskDescription, date) => {
  return {
    type: ADDED,
    payload: { taskText, taskDescription, date },
  };
};

export const toggled = (taskId) => {
  return {
    type: TOGGLED,
    payload: taskId,
  };
};
export const deleted = (taskId) => {
  return {
    type: DELETED,
    payload: taskId,
  };
};
export const edited = (taskId, taskText, taskDescription, date) => {
  return {
    type: EDITED,
    payload: { taskId, taskText, taskDescription, date },
  };
};
