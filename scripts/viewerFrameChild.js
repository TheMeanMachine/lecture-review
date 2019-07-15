 function bindEvent(element, eventName, eventHandler) {
            if (element.addEventListener) {
                element.addEventListener(eventName, eventHandler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventName, eventHandler);
            }
        }

// Send a message to the parent
function sendMessage (msg) {
    // Make sure you are sending a string, and to stringify JSON
    window.parent.postMessage(msg, '*');
};



// Listen to messages from parent window
bindEvent(window, 'message', function (e) {
    var data = JSON.parse(e.data);
    if(data["modID"] != "undefined"){
        var mods = document.getElementById("modules");
        mods.value = data["modID"];
        mods.setAttribute("disabled","");
    }
    if(data['year'] != "undefined"){
        var year = document.getElementById("year");
        year.value = data["year"];
        year.setAttribute("readonly","");
    }
    if(data['sem'] != "undefined"){
        var sem = document.getElementById("sem");
        sem.value = data["sem"];
        sem.setAttribute("readonly","");
    }
       
});

sendMessage("created");

//Credit to : https://gist.github.com/pbojinov/8965299