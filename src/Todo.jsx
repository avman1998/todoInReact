import { useState } from "react";
function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState({
    id: null,
    status: false,
  });

  //   Input Change
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  // SetTodo Function]
  function addTodo(value) {
    setTodos((prev) => {
      return [
        ...prev,
        {
          todo: value,
          id: prev.length + 1,
        },
      ];
    });
  }

  function DeleteTodo(id) {
    const todo = todos.find((item) => item.id === id);
    console.log(todo);
    const index = todos.indexOf(todo);
    console.log(index);
    const newArray = [...todos];

    newArray.splice(index, 1);
    console.log(newArray);
    setTodos(newArray);
  }

  function EditTodo(index) {
    console.log(todos[index]);
    setInputValue(todos[index].todo);
    setIsEdit({
      id: todos[index].id,
      status: true,
    });
  }

  function updateTodo(inputValue) {
    const value = todos.find((item) => item.id === isEdit.id);
    const index = todos.indexOf(value);
    const newArray = [...todos];
    newArray[index].todo = inputValue;
    setTodos(newArray);
    setIsEdit({
      id: null,
      status: false,
    });
    setInputValue("");
  }

  console.log(todos);
  //   console.log("InputValue", inputValue);
  return (
    <>
      <div>
        {/* //controlled component */}
        <input type="text" value={inputValue} onChange={handleChange} />

        {/* onclick=> add inputValue to array Todos */}
        {isEdit.status === false ? (
          <button onClick={() => addTodo(inputValue)}>Add todo </button>
        ) : (
          <button onClick={() => updateTodo(inputValue)}>Update todo </button>
        )}
      </div>
      <ul>
        {todos.map((item, index) => {
          return (
            isEdit.id != item.id && (
              <li key={index}>
                {item.todo}
                <span onClick={() => EditTodo(index)}>🖊️</span>
                <span onClick={() => DeleteTodo(item.id)}>❌</span>
              </li>
            )
          );
        })}
      </ul>
      <button onClick={() => setTodos([])}>Clear all</button>
    </>
  );
}

export default Todo;
