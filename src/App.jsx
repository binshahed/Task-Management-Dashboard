import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/navBar/Navbar";
import { StyledCard, StyledContainer } from "./styles/containerStyle";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/task/TaskList";

function App() {
  return (
    <Provider store={store}>
      {/* nav bar  */}
      <Navbar />
      <StyledContainer>
        <StyledCard>
          {/* Task add form  */}
          <TaskForm />
          {/* task List  */}
          <TaskList />
        </StyledCard>
      </StyledContainer>
    </Provider>
  );
}

export default App;
