import { useState } from "react";
function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

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

  console.log(todos);
  //   console.log("InputValue", inputValue);
  return (
    <>
      <div>
        {/* //controlled component */}
        <input type="text" value={inputValue} onChange={handleChange} />

        {/* onclick=> add inputValue to array Todos */}
        <button onClick={() => addTodo(inputValue)}>Add todo 🖊️</button>
      </div>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item.todo} <span onClick={() => DeleteTodo(item.id)}>❌</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
