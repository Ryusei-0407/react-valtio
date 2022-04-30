import { useState } from "react";
import { useSnapshot } from "valtio";
import { devtools } from "valtio/utils";
import { addItem, state } from "./state/state";

export default function App() {
  const snap = useSnapshot(state);
  devtools(state, "state name");

  const [todo, setTodo] = useState<string>("");

  return (
    <div>
      <h2>TodoList</h2>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <input type="submit" value="ADD" onClick={() => addItem(todo)} />
      {snap.todoList.map(() => (
        <p key={todo}>・{todo}</p>
      ))}
    </div>
  );
}
