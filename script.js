let todoList = {
    text: [],
    ID: [],
    taskDone: [],
}, tbody = document.querySelector('tbody')

const functions = {
    loadPage() {
        tbody.innerHTML = ''

        todoList.text.length == 0 ?
            tbody.innerHTML = `
                <tr>
                    <td id="without-task">
                        <img src="./images/exclamation-icon.svg" alt="Exclamation icon" id="exclamation-icon" />
                        The activities will be here when added.
                    </td>
                </tr>`
            : todoList.text.forEach((element, index) => {
                if (todoList.taskDone[index] == true) {
                    tbody.innerHTML += `<tr class="task-done" onmouseover="functions.mouseOverTd('${todoList.ID[index]}')" onmouseout="functions.mouseOutTd('${todoList.ID[index]}')"> ${element}`
                } else {
                    tbody.innerHTML += `<tr onmouseover="functions.mouseOverTd('${todoList.ID[index]}')" onmouseout="functions.mouseOutTd('${todoList.ID[index]}')"> ${element}`
                }
            });
    },

    addTask() {
        let inputTask = document.querySelector('input#input-task').value,
            code = this.createID(),
            isAdded = false

        for (let index = 0; index < todoList.ID.length; index++) {
            if (todoList.ID[index] == inputTask) {
                index = todoList.ID.length
                isAdded = true
            }
        }

        if (isAdded) {
            alert('There is a task equal to this added already.')
        } else {
            if (inputTask.length > 0) {
                todoList.text.unshift(`
                    <td> <p> ${inputTask} </p> </td>
                    <td>
                        <button onclick="functions.deleteTask('${code}')" id="${code}"> <img src="images/trash-icon.svg" alt="Trash icon" /> </button>
                        <button onclick="functions.addTaskDone('${code}')"> <span></span> </button>
                    </td></tr>`
                );

                todoList.ID.unshift(code);
                todoList.taskDone.unshift(false)

                document.querySelector('input#input-task').value = ''
                this.closeModal()
                this.loadPage()
            } else {
                alert('The form field is empty.')
            }
        }

        this.saveData()
    },

    mouseOverTd(td) {
        document.getElementById(`${td}`).style.display = 'inherit'
    },

    mouseOutTd(td) {
        document.getElementById(`${td}`).style.display = 'none'
    },

    deleteTask(task) {
        let index = todoList.ID.indexOf(task)

        if (index != -1) {
            for (pos in todoList) {
                todoList[pos].splice(index, 1)
            };
        }

        this.loadPage()
        this.saveData()
    },

    addTaskDone(task) {
        let index = todoList.ID.indexOf(task)

        todoList.taskDone[index] === true ? todoList.taskDone[index] = false : todoList.taskDone[index] = true
        this.loadPage()
        this.saveData()
    },

    createID() {
        let code = ''
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        for (let t = 0; t < 6; t++) {
            code += `${letters[Math.floor(Math.random() * 23 + 1)]}`
        }

        return `ID-${code}`
    },

    openModal() {
        document.querySelector('div#bg-modal').classList.add('modal-actived')
    },

    closeModal() {
        document.querySelector('div#bg-modal').classList.remove('modal-actived')
    },

    saveData() {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
}

// Add some stuffs to the website, such as day.
window.addEventListener('load', () => {
    const dateStrings = {
        week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    }, date = new Date

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
        todoList = JSON.parse(localStorage.getItem('todoList'))
    }
    functions.loadPage()
});