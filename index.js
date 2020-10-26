const button = document.querySelector("#click-me");
const result = document.querySelector("#result");
const input = document.querySelector("#input");
button.addEventListener("click", makeRequest);

function makeRequest() {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${input.value}&count=1`, {
        success: function(data) {
            data.forEach(el => {
                const img = document.createElement('img');
                img.src = el.thumbnail;
                document.querySelector('#result').appendChild(img);
            });
        }
    });
}