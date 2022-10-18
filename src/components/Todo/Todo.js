export default function Todo({
  title,
  description,
  author,
  dateCreated,
  id,
  dispatch,
}) {
  return (
    <div>
      <h3>----------------</h3>
      <h3>Title: {title}</h3>
      <h3>Description: {description}</h3>
      <br />
      <i>
        Written by: <b>{author}</b>
      </i>
      <br></br>
      <br></br>
      <div>
        <input
          type="checkbox"
          id="complete"
          onChange={() =>
            dispatch({
              type: "TOGGLE_TODO",
              title,
              description,
              author,
              dateCompleted: Date.now(),
              dateCreated,
              complete: true,
              id,
            })
          }
        />
        Complete
      </div>
      <br></br>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "DELETE_TODO", id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
