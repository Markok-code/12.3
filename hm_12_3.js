const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');
const input = document.getElementById('task');
const arrayOfTask = [];

addBtn.addEventListener("click", () => {
    if (arrayOfTask[arrayOfTask.length - 1] !== input.value) {
        arrayOfTask.push(input.value);
    }

    updateList();
    input.value = '';
});

function updateList() {
    list.innerHTML = '';
    arrayOfTask.forEach((e, i) => {       
        list.innerHTML += `<li>${e} <button onClick="deleteElem(${i})">Удалить</button></li>`;
    });
}

function deleteElem(index) {
    arrayOfTask.splice(index, 1);
    updateList();
}

