let tasksToDo = [];
let completedTasks = [];
let currentId = 0;

class Task
{
    constructor(task)
    {
        this.id = currentId;
        this.task = task;
    }
};

function HTMLTaskToDo(task)
{
    return "<div class='task'>\n<h3>" + task.task
    + "</h3>\n<div class='buttons'>\n<button class='complete' id='complete"
    + task.id +  "'>COMPLETE</button>\n<button class='delete' id='delete"
    + task.id + "'>DELETE</button>\n</div>\n</div>\n";
}

function HTMLCompletedTask(task)
{
    return "<div class='task'>\n<h3>" + task.task
    + "</h3>\n<div class='buttons'>\n<button class='delete' id='delete"
    + task.id + "'>DELETE</button>\n</div>\n</div>\n";
}

function RefreshTasksToDo()
{
    let finalHTML = "";
    for(let i = 0; i < tasksToDo.length; i++) finalHTML += HTMLTaskToDo(tasksToDo[i]);
    document.getElementById("listToDo").innerHTML = finalHTML;
    if(tasksToDo.length == 0) document.getElementById("listToDo").innerHTML = 
    '<div class="task">\n<h3>No tasks left</h3>\n</div>';

    for(let i = 0; i < tasksToDo.length; i++)
    {
        document.getElementById("complete" + tasksToDo[i].id.toString()).onclick = 
        function(){CompleteTask(tasksToDo[i].id)};
        document.getElementById("delete" + tasksToDo[i].id.toString()).onclick =
        function(){DeleteTaskToDo(tasksToDo[i])};
    }
}

function RefreshCompletedTasks()
{
    let finalHTML = "";
    for(let i = 0; i < completedTasks.length; i++) finalHTML += HTMLCompletedTask(completedTasks[i]);
    document.getElementById("completedList").innerHTML = finalHTML;
    if(completedTasks.length == 0) document.getElementById("completedList").innerHTML = 
    '<div class="task">\n<h3>No completed tasks</h3>\n</div>';
    for(let i = 0; i < completedTasks.length; i++)
    {
        document.getElementById("delete" + completedTasks[i].id.toString()).onclick =
        function(){DeleteCompletedTask(completedTasks[i])};
    }
}

function DeleteTaskToDo(task)
{
    for(let i = 0; i < tasksToDo.length; i++)
    {
        if(tasksToDo[i] == task) 
        {
            tasksToDo.splice(i, 1);
            RefreshTasksToDo();
            return;
        }
    }
}
function DeleteCompletedTask(task)
{
    for(let i = 0; i < completedTasks.length; i++)
    {
        if(completedTasks[i] == task)
        {
            completedTasks.splice(i, 1);
            RefreshCompletedTasks();
            return;
        }
    }
}

function CompleteTask(id)
{
    console.log("id = " + id);
    for(let i = 0; i < tasksToDo.length; i++)
    {
        if(tasksToDo[i].id == id)
        {
            completedTasks.push(tasksToDo[i]);
            tasksToDo.splice(i, 1);
            break;
        }
    }
    RefreshTasksToDo();
    RefreshCompletedTasks();
}

function AddTask()
{
    let input = document.getElementById("inputTask").value;
    document.getElementById("inputTask").value = "";
    if(input === "") return;
    tasksToDo.push(new Task(input));
    RefreshTasksToDo();
    currentId++;
}

document.getElementById("addButton").addEventListener("click", AddTask);