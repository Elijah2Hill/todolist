const ul = document.querySelector("ul");
let todoListArr = [];

todoListForm.addEventListener("submit", function(event) {
  event.preventDefault();
});

function addTodoList() {
	let todoItem = document.getElementById("todo").value;
	let obj = {};
	obj['list_item'] = todoItem;
	todoListArr.push(obj);
	const template = todoListArr.map(todo => `
		<li>${todo.list_item}</li>`);
	ul.innerHTML = template.join('');
}