function Input({ todo, handleInput, handleAddTodo }) {
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todo.todo}
          onChange={handleInput}
          placeholder="add todo..."
        />
        <button type="submit">add todo</button>
      </form>
    </>
  );
}

export default Input;
