function Todos({ todos, handleDelete }) {
  const list = todos.map(({ todo, id }) => (
    <li key={id}>
      <p>{todo}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
}

export default Todos;
