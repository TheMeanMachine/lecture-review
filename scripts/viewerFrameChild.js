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
    var edit = data["edit"];
    var view = data["view"];
    
    
    if(data["modID"] != "undefined"){
        if(edit == "true" || view == "true"){
            var el = document.getElementById("submitter");
            el.setAttribute("modID", data['modID']);    
        }else{
            var el = document.getElementById("modules");
            el.value = data["modID"];

            (edit)? null : el.setAttribute("disabled","") ;
        }
        
        
    }
    if(data['year'] != "undefined"){
        var el = document.getElementById("year");
        el.value = data["year"];
        (edit == "true")?  null : el.setAttribute("readonly","");
    }
    
    if(data['week'] != "undefined" && data['week'] != "null"){
        var el = document.getElementById('week');
        el.value = data["week"];
        

    }
    
    if(data['title'] != "undefined"  && data['title']){
        var el = document.getElementById('title');
        el.value = data["title"];
        console.log(data['title']);
    }
    
    if(data['sem'] != "undefined"){
        var el = document.getElementById("sem");
        el.value = data["sem"];
        (edit == "true")?  null : el.setAttribute("readonly","");
    }
    
    if(data['lectureid'] != "undefined"){
        var el = document.getElementById("submitter");
        el.setAttribute("lectureid", data['lectureid']);
    }
    
    var t = "leader";
    if(data[t] != "undefined"&& data[t] != null){
        var el = document.getElementById(t);
        el.value =  data[t];
    }

    
    var t = "code";
    if(data[t] != "undefined"&& data[t] != null){
        var el = document.getElementById(t);
        el.value =  data[t];
    }
    
    
    var t = "desc";
    if(data[t] != "undefined"&& data[t] != null){
        var el = document.getElementById(t);
        el.value =  data[t];
    }
    
    var t = "examPer";
    if(data[t] != "undefined"&& data[t] != null){
        var el = document.getElementById(t);
        el.value =  data[t];
    }
    
    var t = "cwPer";
    if(data[t] != "undefined" && data[t] != null){
        var el = document.getElementById(t);
        el.value =  data[t];
    }


    var t = "credits";
    if(data[t] != "undefined" && data[t] != null){
        var el = document.getElementById(t);
        el.value =  data[t];
    }
       
});


//Credit to : https://gist.github.com/pbojinov/8965299