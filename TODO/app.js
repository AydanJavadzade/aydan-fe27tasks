
const container = document.querySelector(".container")
const taskInput = document.getElementById("task-input")
const addBtn = document.getElementById("btn")
const todoList = document.getElementById("todo-list")


const url = "http://localhost:3000/todos/"


const addTodoItem = (() => {

  // CREATE NEW DATA OBJ
  const newId = (Date.now()).toString();
  let newTodo = "";
  if (taskInput.value !== "" && taskInput.value.trim() !== "") {
    newTodo = taskInput.value
  } else {
    alert("todo nu taxil edin!")
    todoItem.remove()
  }
  const newData = { id: newId, todo: newTodo };
  console.log(newData);

  // AXIOS.POST
  axios.post(url, newData).then((response) => {
    console.log(response)
    const { id, todo } = response.data;
    console.log(id, todo);


    //CREATE  TODO ITEM
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // DONE BUTTON
    const done = document.createElement("button");
    done.innerText = "✔️";
    const doneTask = (() => todotext.classList.toggle("done-todo"));
    done.addEventListener("click", doneTask);

    // TODOTEXT
    const todotext = document.createElement("li");
    todotext.classList.add('todo');
    todotext.innerText = todo;

    // EDIT BUTTON AXIOS.PATCH
    const edit = document.createElement("button");
    edit.innerText = "🖊️";
    const editTodo = () => {
      const editTodotext = prompt("edit todo", todotext.innerText)
      const newTodo = { editTodotext }
      axios.patch(url + id, newTodo).then((resp) => {
        console.log(resp.data)
        todotext.innerText = editTodotext
      })
    }
    edit.addEventListener("click", editTodo)

    // DEL BUTTON AXIOS.DELETE
    const del = document.createElement("button");
    del.innerText = "❌";
    // console.log(id)
    const delTodo = () => {
      axios.delete(url + id).then((resp) => {
        todoItem.remove()
        console.log(resp.data)
      })
    }
    del.addEventListener("click", delTodo)

    // APPENDCHILD
    todoItem.appendChild(done);
    todoItem.appendChild(todotext);
    todoItem.appendChild(edit);
    todoItem.appendChild(del);
    container.appendChild(todoItem);

    taskInput.value = "";
  });
});

addBtn.addEventListener("click", addTodoItem);