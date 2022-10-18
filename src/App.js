import { useReducer } from "react";
import Todolist from "./components/Todo/Todolist";
import UserBar from "./components/User/Userbar";
import CreateTodo from "./components/Todo/CreateTodo";
import appReducer from "./Reducers";

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todo: [],
  });

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && (
        <CreateTodo user={state.user} todo={state.todo} dispatch={dispatch} />
      )}
      {state.user && <Todolist todo={state.todo} dispatch={dispatch} />}
    </div>
  );
}

export default App;
