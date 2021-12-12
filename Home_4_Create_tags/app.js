let todos = [];


const getValue = () => {
  const userId = document.getElementById("userId")
  const id = document.getElementById("id")
  const title = document.getElementById("title")
  const completed = document.getElementById("completed")
  todos.push({
    userId: userId.value,
    id: id.value,
    title: title.value,
    completed: completed.value
  });
  renderTodosList(todos);
  userId.value = "";
  id.value = "";
  title.value = "";
  completed.value = "";
}

function renderTodosList(todos) {
  let todosElem = ""
  let todo_1 = document.getElementById("todos")

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i]
    todosElem += `<div id="todo">
                        <p>UserId: ${todo.userId}</p>
                        <p>Id: ${todo.id}</p>
                        <p>Title: ${todo.title}</p>
                        <p>Completed: ${todo.completed}</p>
                        <p><button onclick="deleteArr(${i})">Delete</button></p>
                        </div>`

  }
  todo_1.innerHTML = todosElem
}

function deleteArr(i) {
  todos.splice(i, 1)
  renderTodosList(todos)
}


const todosSort = () => {
    const choiseTodo = document.getElementById("choise").value

    todos = todos.sort((a, b) => {
      let fa = a[choiseTodo].toLowerCase(),
          fb = b[choiseTodo].toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });

  renderTodosList(todos)


}
