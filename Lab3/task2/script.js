let addButton = document.getElementById("add-button");
let todoList = document.getElementById("list");
let input = document.getElementById("new-item");

function addTask() {
    let text = input.value.trim();
    if (text) {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="task">
                <input type="checkbox" class="done-checkbox">
                <span>${text}</span>
                <button class="delete-button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="delete-button" viewBox="0 0 16 16" color="red">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
            </div>`;
        todoList.append(li);
        input.value = '';
    }
    else {
        alert("You should type smth");
    }
};

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-checkbox')) {
        event.target.closest('li').classList.toggle('done');
    }
    if (event.target.classList.contains('delete-button')) {
        event.target.closest('li').remove();
    }
});