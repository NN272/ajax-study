function makeRequest(page, callback) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=1`, {
        success: function(data) {
            callback(data);
        }
    });
}