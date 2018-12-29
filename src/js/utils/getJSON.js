
function getJSON(url, callback){
    const xHTTP = new XMLHttpRequest();
    xHTTP.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            callback(this.responseText)
        }
    };
    xHTTP.open("GET", url, true);
    xHTTP.send();
}

module.exports = {
    "getJSON": getJSON
};