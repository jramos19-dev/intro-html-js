const todos = [];


// replaced the element inside the get() with an array and called it elements
const get = (elements) =>
 elements.map(element => document.getElementById(element));


const [pendingList,completedList,addForm,newTodo] = get([
  "pendingList", "completedList", "addForm", "newTodo"]);

// CHANGED THE 2 CLASSES TO A CSSCLASSES 
const cssClasses = {
  pending:  "bg-white w-full text-center text-green-500 rounded py-4 border-2 border-green-500 transition transform ease-in-out duration-300 hover:bg-green-500 hover:text-white hover:scale-110 hover:rotate-1 cursor-pointer",
  done:  "bg-white w-full text-center text-red-500 rounded py-4 border-2 border-red-500 transition transform ease-in-out duration-300 hover:bg-red-500 hover:text-white hover:scale-110 hover:-rotate-1 cursor-pointer"

}

// changed the title of the constant
const updateTodos = (listElement,status) => {
  const filteredTodos = todos.filter((todo) => todo.status == status === "pending");
listElement.innerHTML =""
filteredTodos.forEach((todo) => {
const item = document.createElement("li");
item.className = cssClasses[status];
item.innerText = todo.text;
item.id = todo.id;
listElement.appendChild(pendingItem);

});

};

const showTodos = () => {
  const pendingTodos = todos.filter((todo) => todo.status === "pending");

  pendingList.innerHTML = "";
  pendingTodos.forEach((todo) => {
    const pendingItem = document.createElement("li");
    pendingItem.className = cssClasses.pending;
    pendingItem.innerText = todo.text;
    pendingItem.id = todo.id;
    pendingList.appendChild(pendingItem);
  });

  const completedTodos = todos.filter((todo) => todo.status === "done");

  completedList.innerHTML = "";
  completedTodos.forEach((todo) => {
    const completedItem = document.createElement("li");
    completedItem.className = cssClasses.done;
    completedItem.innerText = todo.text;
    completedItem.id = todo.id;
    completedList.appendChild(completedItem);
  });
};


addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todos.push({
    id: Math.floor(Math.random() * 100000).toString(),
    text: newTodo.value,
    status: "pending",
  });
  newTodo.value = "";
  updateTodos(pendingList,"pending");
});

pendingList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "done";
  showTodos();
});

completedList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "pending";
  showTodos();
});
