const tasks =[]

const tasklistDiv = document.querySelector('#taskList');

function printTasks() {
    let htmlCode = '<ul>';
    tasks.forEach((task, index) => {
        if (task.done) {
            htmlCode += `<li>
                            ${task.description}
                            <button id="done-${index}">Ej klar</button>
                        </li>`;
        } else {
            htmlCode += `<li>
                            ${task.description}
                            <button id="done-${index}">Klar</button>
                        </li>`;
        }
    });

    htmlCode += '</ul>';

    tasklistDiv.innerHTML = htmlCode;

    addDontBtnClickEvents();
}
    function addDontBtnClickEvents() {
        const doneButtons = document.querySelectorAll('button');
        doneButtons.forEach((btn, index) => {
            btn.addEventListener('click', toggleTaskStatus);
        });
    }

function toggleTaskStatus(evt) {
    const whichDontBtn = evt.currentTarget.id;

    const index = whichDontBtn.replace('done-', '');
    tasks[index].done = !tasks[index].done;

    console.table(tasks);
    console.log('Task is done!', whichDontBtn)

    printTasks();
}

function createNewTask() {
    const newTaskDescription = document.querySelector('#taskName').value;

    const newTask = {
        description: newTaskDescription,
        done: false
    };
    tasks.push(newTask);

    console.table(tasks);

    printTasks();
}

const createTaskBtn = document.querySelector('#createTaskBtn');
createTaskBtn.addEventListener('click', createNewTask);
