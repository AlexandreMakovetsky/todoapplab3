import Todo from "./Todo";

export default function Todolist({ todo = [], dispatch }) {
  return (
    <div>
      {todo.map((p, i) => (
        <Todo {...p} key={p.id} dispatch={dispatch} />
      ))}
    </div>
  );
}
