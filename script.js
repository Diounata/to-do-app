const todoList = {
    text: [],
    ID: [],
    taskDone: [],
},
    tbody = document.querySelector('tbody')

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
        let inputTask = prompt('Add the activity here:'), isAdded = false

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
                        <button onclick="functions.deleteTask('${this.splitString(`${inputTask}`)}')" id="ID-${this.splitString(`${inputTask}`)}"> <img src="images/trash-icon.svg" alt="Trash icon" /> </button>
                        <button onclick="functions.addTaskDone('${this.splitString(`${inputTask}`)}')"> <span></span> </button>
                    </td></tr>`
                );

                todoList.ID.unshift(this.splitString(`${inputTask}`));
                todoList.taskDone.unshift(false)
            } else {
                alert('The form field is empty.')
            }

            this.loadPage()
        }
    },

    mouseOverTd(td) {
        document.querySelector(`button#ID-${td}`).style.display = 'inherit'
    },

    mouseOutTd(td) {
        document.querySelector(`button#ID-${td}`).style.display = 'none'
    },

    deleteTask(task) {
        let index = todoList.ID.indexOf(task)

        if (index != -1) {
            for (pos in todoList) {
                todoList[pos].splice(index, 1)
            };
        }

        this.loadPage()
    },

    addTaskDone(task) {
        let index = todoList.ID.indexOf(task)

        todoList.taskDone[index] === true ? todoList.taskDone[index] = false : todoList.taskDone[index] = true
        this.loadPage()
    },

    splitString(string) {
        string = string.split(' ')
        string = string.join('-')
        return string
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
            <div id="div-day"> ${date.getDay()} </div>

            <div>
                <div id="div-month"> ${dateStrings.month[date.getMonth()]} </div>
                <div id="div-year"> ${date.getFullYear()} </div>
            </div>
        </div>

        <div id="div-weekday"> ${dateStrings.week[date.getDay()]} </div>`
});