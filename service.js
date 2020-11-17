function getImages(page) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${page}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}
    
function getTasks() {
    const tasks = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=5345235`);

    return tasks.then((response) => {
        return response.data;
    });
}

function createTasks(title) {
    const create = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 5345235,
        title: title
    });

    return create.then((response) => {
        return response.data;
    });
}

function updateTasks(title) {
    const upd = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 5345235,
        title: title
    });

    return upd.then((response) => {
        return response.data;
    });
}

function deleteTasks(id) {
    const del = axios.delete(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 5345235,
        taskId: id
    });

    return del.then((response) => {
        return response.data;
    });
}