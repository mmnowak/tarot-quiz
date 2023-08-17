const baseURL = "https://raw.githubusercontent.com/howlCode/tarot_api/master/lib/cards.json";

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function showFullMeaning(obj) {
    document.getElementById("fullmeaning").innerText = obj[0].full_meaning;
};

getData(showFullMeaning);