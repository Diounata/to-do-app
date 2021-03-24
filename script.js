let todoList = {
    text: [],
    button: [],
    ID: [],
    taskDone: [],
}, tbody = document.querySelector('tbody')

const functions = {
    loadPage() {
        tbody.innerHTML = ''

        todoList.text.length === 0 ?
            tbody.innerHTML = `
                <tr>
                    <td id="without-task">
                        <img src="./images/exclamation-icon.svg" alt="Exclamation icon" id="exclamation-icon" />
                        The activities will be here when added.
                    </td>
                </tr>`
            : todoList.text.forEach((element, index) => {
                let classTaskDone = todoList.taskDone[index] === true ? 'class="task-done"' : ''

                tbody.innerHTML += `
                    <tr ${classTaskDone} onmouseover="functions.mouseOverTd('${todoList.ID[index]}')" onmouseout="functions.mouseOutTd('${todoList.ID[index]}')">
                        <td> <p> ${element} <p> </td>
                        <td> ${todoList.button[index]} </td>
                    </tr>`
            });
    },

    addTask() {
        let inputTask = document.querySelector('input#input-task').value,
            divMessageTaskAdded = document.querySelector('div.message-task-added'),
            code = this.createID();

        if (inputTask.length > 0) {
            todoList.text.unshift(inputTask);
            todoList.ID.unshift(code);
            todoList.taskDone.unshift(false);
            todoList.button.unshift(`
                    <button onclick="functions.deleteTask('${code}')" id="${code}"> <img src="images/trash-icon.svg" alt="Trash icon" /> </button>
                    <button onclick="functions.addTaskDone('${code}')"> <span></span> </button>
            `);

            document.querySelector('input#input-task').value = ''
            this.closeModal();
            this.loadPage();
            this.saveData();

            divMessageTaskAdded.style.display = 'flex'
            setTimeout(() => {
                divMessageTaskAdded.style.display = 'none'
            }, 4000);
        } else {
            alert('The form field is empty. Try again.');
        };
    },

    mouseOverTd(td) {
        document.getElementById(`${td}`).style.display = 'inherit'
    },

    mouseOutTd(td) {
        document.getElementById(`${td}`).style.display = 'none'
    },

    deleteTask(task) {
        let index = todoList.ID.indexOf(task);

        if (index !== -1) {
            for (pos in todoList) {
                todoList[pos].splice(index, 1);
            };
        }

        this.loadPage();
        this.saveData();
    },

    addTaskDone(task) {
        let index = todoList.ID.indexOf(task);

        todoList.taskDone[index] === true ? todoList.taskDone[index] = false : todoList.taskDone[index] = true
        this.loadPage();
        this.saveData();
    },

    createID() {
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let code = '';

        for (let t = 0; t < 6; t++) {
            code += `${letters[Math.floor(Math.random() * 23 + 1)]}`
        }

        return `ID-${code}`
    },

    openModal() {
        document.querySelector('div#bg-modal').classList.add('modal-actived');
    },

    closeModal() {
        document.querySelector('div#bg-modal').classList.remove('modal-actived');
    },

    redefineTasks() {
        todoList.taskDone.forEach((element, index) => {
            todoList.taskDone[index] === true ? todoList.taskDone[index] = false : ''
        });

        this.saveData();
        this.loadPage();
    },

    saveData() {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    },

    addDate: window.addEventListener('load', () => {
        const dateStrings = {
            week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        }, date = new Date;

        document.querySelector('header').innerHTML = `
            <div id="date-container">
                <div id="div-day"> ${date.getDate()} </div>
    
                <div>
                    <div id="div-month"> ${dateStrings.month[date.getMonth()]} </div>
                    <div id="div-year"> ${date.getFullYear()} </div>
                </div>
            </div>
    
            <div id="div-weekday"> ${dateStrings.week[date.getDay()]} </div>`

        if (localStorage.getItem('todoList').length !== 0) {
            todoList = JSON.parse(localStorage.getItem('todoList'));
        }

        functions.loadPage();
    })
}