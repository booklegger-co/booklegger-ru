function http_request ( url, method )
{
    var xmlHttp = new XMLHttpRequest ( );
    xmlHttp.open(method, url, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getParam(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}