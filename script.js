const newlistInput = document.getElementById('newlist');
const addbtn = document.getElementById('addbtn');
const tasklist = document.getElementById('tasklist');
const resetbtn = document.getElementById('resetbtn'); 

function todolist() {
    const newlisttext = newlistInput.value;
    newlistInput.value = '';
    const listItem = document.createElement('li');
    const todolisttext = document.createElement('span');
    const editbtn = document.createElement('button');
    const deletebtn = document.createElement('button');

    listItem.appendChild(todolisttext);
    listItem.appendChild(editbtn);
    listItem.appendChild(deletebtn);

    todolisttext.textContent = newlisttext;
    editbtn.textContent = 'Edit';
    deletebtn.textContent = 'Delete';

    tasklist.appendChild(listItem);

    editbtn.addEventListener('click', function () {
        const newTaskText = prompt('Edit your task:', listItem.textContent.replace('EditDelete', '').trim());
        if (newTaskText) {
            listItem.firstChild.textContent = newTaskText;
        }
    });

    deletebtn.addEventListener('click', function () {
        const confirmDelete = confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            tasklist.removeChild(listItem);
        }
    });
}

    addbtn.addEventListener('click', todolist);

    resetbtn.addEventListener('click', function () {
        const confirmReset = confirm('Are you sure you want to reset all tasks? This will remove all tasks.');
        if (confirmReset) {
            while (tasklist.firstChild) {
            tasklist.removeChild(tasklist.firstChild);
        }
    }
});