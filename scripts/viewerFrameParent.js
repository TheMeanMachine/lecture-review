// Send a message to the child iframe



function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

/*
Creates a viewer iframe
*/

function create_iframe(action, type, e){
    if(type == "Lecture"){
        var currentE = e;
        while(!currentE.hasAttribute("modID")){
            currentE = currentE.parentNode;
        }
        var modID = currentE.getAttribute("modID");
    }else if(type == "Module"){
        var year = document.getElementById("years").value;
        var sem = document.getElementById("semester").value;
    }
    var viewerIframe = document.getElementById("viewerIframe");
    if(viewerIframe != null){
        return;
    }
    //create_iframe("new", "Lecture")
    var iframeSource = action+type+".html";
    var outer = document.createElement('div');
    outer.setAttribute('class', 'viewerFrameOuter');
    
    var back = document.createElement('div');
    back.setAttribute('class', 'viewerFrameBackground');
    back.setAttribute('onclick', 'closeViewer()');
    
    var viewerIframe = document.createElement('iframe');
    viewerIframe.setAttribute('modID', modID);
    viewerIframe.setAttribute('year', year);
    viewerIframe.setAttribute('sem', sem);
    viewerIframe.setAttribute('src', iframeSource);
    viewerIframe.setAttribute('id', "viewerIframe");
    
    viewerIframe.setAttribute('class', 'vFrame');
    viewerIframe.style.width = 100 + '%';
    if(type == "Lecture"){
        viewerIframe.style.height = 300 + 'px';
        viewerIframe.style.marginBottom = "-300px";
    }else{
        viewerIframe.style.height = 500 + 'px';
        viewerIframe.style.marginBottom = "-500px";
    }

    outer.appendChild(back);
    outer.appendChild(viewerIframe);
   
    document.body.appendChild(outer);
    
    
    setTimeout(function(){ viewerIframe.style.marginBottom = "0px"; },100);
    
    
}

//Sends message
function sendMessage (msg) {
    var viewerIframe = document.getElementById("viewerIframe");
    
    // Make sure you are sending a string, and to stringify JSON
    viewerIframe.contentWindow.postMessage(msg, '*');
};




// Listen to message from child window
bindEvent(window, 'message', function (e) {
    if(e.data == "created"){
        var modID = document.getElementById("viewerIframe").getAttribute("modID");
        
        var year = document.getElementById("viewerIframe").getAttribute("year");
        var sem = document.getElementById("viewerIframe").getAttribute("sem");
        
        sendMessage('{ "modID": "'+ modID +'", "year": "'+year+'", "sem": "'+sem+'" }');
    }else if(e.data == "close"){
        closeViewer();
        
    }else if(e.data == "done"){
        window.location.reload(false); 
    }
    
});

function closeViewer(){
    
    var viewerIframe = document.getElementById("viewerIframe");
    //Stops the person from going back without making sure
    confirmThis("Are you sure?", "All changes will be lost", "CANCEL", "CONTINUE",function(){
        console.log("closing");
        viewerIframe.style.marginBottom = "-1000px";

        setTimeout(function(){ viewerIframe.parentNode.parentNode.removeChild(viewerIframe.parentNode); },100); 
    },function(){

    }); 
}
    
//Credit to : https://gist.github.com/pbojinov/8965299 