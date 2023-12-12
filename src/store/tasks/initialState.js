const getInitialState = () => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('task-value'))
    } else {
      return []
    }
  }
  export const initialState = getInitialState()
  