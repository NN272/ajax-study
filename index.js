const button = document.querySelector("#click-me");
const result = document.querySelector("#result");
const input = document.querySelector("#input");
button.addEventListener("click", () => {
    const promise = makeRequest(input.value);
    promise
        .then(onDataRecieved);
});

function onDataRecieved(data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}