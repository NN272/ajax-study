function makeRequest(page) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${page}&count=1`);

    return promise.then((data) => {
        return data.data;
    });
}

function getTasks() {
    const tasks = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=5345235`);

    return tasks.then((response) => {
        return response.data;
    });
}

function createTasks(title) {
    const create = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=5345235&title=${title}`);

    return create.then((response) => {
        return response.data;
    });
}