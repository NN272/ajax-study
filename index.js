const button = document.querySelector("#click-me");
const result = document.querySelector("#result");
const input = document.querySelector("#input");
const createinput = document.querySelector("#create-input");
const createbutton = document.querySelector("#create-tasks");
const res = document.querySelector("#res");
const getTsks = document.querySelector("#get-tasks");

button.addEventListener("click", () => {
    const promise = makeRequest(input.value);
    promise
        .then(onDataRecieved);
});

createbutton.addEventListener("click", () => {
    const promise = createTasks(createinput.value);
});

getTsks.addEventListener("click", () => {
    const promise = getTasks();
    promise.then(onTasksRecieved);
});

function onDataRecieved(data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}

function onTasksRecieved(tasks) {
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        document.querySelector('#res').appendChild(li);
    });
}