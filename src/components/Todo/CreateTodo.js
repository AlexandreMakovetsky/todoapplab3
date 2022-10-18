import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateTodo({ user, dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "CREATE_TODO",
          title,
          description,
          author: user,
          dateCreated: Date.now(),
          complete: "false",
          id: uuidv4(),
        });
      }}
    >
      <br></br>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <label htmlFor="create-description">Description:</label>
      <br></br>
      <textarea
        name="create-description"
        id="create-description"
        description={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br></br>
      <input type="submit" value="Create" disabled={title.length === 0} />
    </form>
  );
}
