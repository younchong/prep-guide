class Task{
    constructor(task) {
        const taskDiv = document.createElement('li');
        const doneItem = document.createElement('button');
        const taskItem = documnet.createElement('div');
        const delItem = document.createElement("button");
        let flag = false;

        doneItem.classList = 'done-item';
        taskItem.classList = 'task-item';
        delItem.classList = 'del-item';
        taskItem.innerHTML = task;
        taskDiv.appendChild(doneItem);
        taskDiv.appendChild(taskItem);
        taskDiv.appendChild(delItem);
        taskDiv.classList = 'task';
        this._taskDiv = taskDiv;
    }
    get makeTask() {
        return this._taskDiv;
    }
    get flagStatus(){
        return this._flag;
    }
    set reviseTask(task) {
        this._taskDiv.childNodes[1].innerHTML = task;
    }
    poleFlag() {
        this._flag = !(this._flag);
    }
}

