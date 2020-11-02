function makeRequest(page) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${page}&count=1`);

    return promise.then((data) => {
        return data.data;
    });
}