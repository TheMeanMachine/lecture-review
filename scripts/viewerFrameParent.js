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
        while(!currentE.hasAttribute("title")){
            currentE = currentE.parentNode;
        }
        var modID = currentE.getAttribute("modID");
        var week = currentE.getAttribute("week");
        var title = currentE.getAttribute("title");
        var lectureID = currentE.getAttribute("lectureID");
    }else if(type == "Module"){
        if(action=="edit" || action == "view"){
            var currentE = e;
            while(!currentE.hasAttribute("modID")){
                currentE = currentE.parentNode;
            }
            var modID = currentE.getAttribute("modID");
            var week = currentE.getAttribute("week");
            var code = currentE.getAttribute("code");
            var title = currentE.getAttribute("title");
            var lectureID = currentE.getAttribute("lectureID");
            var desc = currentE.getAttribute("desc");
            var leader = currentE.getAttribute("leader");
            var credits = currentE.getAttribute("credits");
            var examPer = currentE.getAttribute("examPer");
            var cwPer = currentE.getAttribute("cwPer");
        }
        
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
    viewerIframe.setAttribute("week", week);
    viewerIframe.setAttribute("title", title);
    viewerIframe.setAttribute("lectureID", lectureID);
    viewerIframe.setAttribute("code", code);
    viewerIframe.setAttribute("leader", leader);
    viewerIframe.setAttribute("credits", credits);
    viewerIframe.setAttribute("examPer", examPer);
    viewerIframe.setAttribute("cwPer", cwPer);
    viewerIframe.setAttribute("desc", desc);
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
    var data = e.data.split(" ");
    if(data[0] == "created"){
        var viewerIframe = document.getElementById("viewerIframe");
        var modID = viewerIframe.getAttribute("modID");
        var title = viewerIframe.getAttribute("title");
        var week = viewerIframe.getAttribute("week");
        var code = viewerIframe.getAttribute("code");
        var year = viewerIframe.getAttribute("year");
        var sem = viewerIframe.getAttribute("sem");
        var leader = viewerIframe.getAttribute("leader");
        var desc = viewerIframe.getAttribute("desc");
        var credits = viewerIframe.getAttribute("credits");
        var examPer = viewerIframe.getAttribute("examPer");
        var cwPer = viewerIframe.getAttribute("cwPer");
        var lectureid = viewerIframe.getAttribute("lectureid");
        var editable;
        (data[1] == "edit") ? editable = "true" : editable = "false";
        var view;
        (data[1] == "view") ? view = "true" : view = "false";
        
        sendMessage('{ "modID": "'+ modID +'", "title": "'+title+ '", "week": "'+week+'", "year": "'+year+'", "sem": "'+sem+'", "edit": "'+editable+'", "lectureid": "'+ lectureid +'", "code": "'+code+'", "leader" : "' + leader + '", "desc": "'+desc+'", "credits": "'+credits+'", "examPer":"'+examPer+'","cwPer":"'+cwPer+'", "view": "'+view+'"  }');
    }else if(e.data == "close"){
        closeViewer();
        
    }else if(e.data == "done"){
        //window.location.reload(false);
        closeViewer(false);
        updateModules();
    }
    
});

function closeViewer(ask){
    
    var viewerIframe = document.getElementById("viewerIframe");
    //Stops the person from going back without making sure
    if(ask){
        confirmThis("Are you sure?", "All changes will be lost", "CANCEL", "CONTINUE",function(){
        console.log("closing");
        viewerIframe.style.marginBottom = "-1000px";

        setTimeout(function(){ viewerIframe.parentNode.parentNode.removeChild(viewerIframe.parentNode); },500); 
            },function(){

        });
    }else{
        viewerIframe.style.marginBottom = "-1000px";

        setTimeout(function(){ viewerIframe.parentNode.parentNode.removeChild(viewerIframe.parentNode); },500); 
    }
}
     
    
//Credit to : https://gist.github.com/pbojinov/8965299 