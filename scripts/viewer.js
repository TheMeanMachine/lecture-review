


function setModuleList(){
    //Gets all the modules and creates a list array  - not incredibly modular and needs extra work
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            
            if(myArr.length > 0){//If data exists
                var list = document.getElementById("modules");
                
                for(var i = 0; i < myArr.length; i++){//Go through array
                    
                    var title = myArr[i]['title'];
                    var code = myArr[i]['code'];
                    var id =  myArr[i]['ID'];
                    var moduleString = code + " : " + title;
                    console.log(moduleString);

                    var option = document.createElement("option");
                    
                    option.value = id;
                    option.innerHTML = moduleString;
                    
                    list.appendChild(option);
                    
                }
                return myArr;
            }else{//Data doesn't exist

            }
        }else if(this.status == 404 || this.status == 403){
            openToast("A problem occured - please try again in a few minutes");
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/module/getModules.php"
                 , true);//URL
    xmlhttp.send();
}

//temp

function submitForm_lecture(type){
    //Gets all the elements' values
    var modules = document.getElementsByName("module_code")[0];
    var module_id = modules.options[modules.selectedIndex].value;
    var week = document.getElementsByName("week")[0].value;
    var title = document.getElementsByName("title")[0].value;
    
    if(type == "new"){
        submitForm_lecture_send(module_id,week,title);    
    }else if(type == "edit"){
        var lectureid = document.getElementById("submitter").getAttribute("lectureid");
        submitForm_lecture_send_edit(module_id,week,title,lectureid);    
    }
    
}

function submitForm_lecture_send_edit(module_id,week,title,lectureid){
    //Adds a new lecture
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(this.responseText);
            if(this.responseText == ""){
                sendMessage("done");
            }else{
                wentWrong();
            }
            
        }else if(this.status == 404 || this.status == 403){
            openToast("A problem occured - please try again in a few minutes");
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/lecture/updateLecture.php?moduleID=" + module_id +
                 "&week="+ week +
                 "&title=" + title + 
                 "&id=" + lectureid
                 , true);//URL
    xmlhttp.send();
    
}

function submitForm_lecture_send(module_id,week,title){
    //Adds a new lecture
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(this.responseText);
            if(this.responseText == ""){
                sendMessage("done");
            }else{
                wentWrong();
            }
            
        }else if(this.status == 404 || this.status == 403){
            openToast("A problem occured - please try again in a few minutes");
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/lecture/addLecture.php?moduleID=" + module_id +
                 "&week="+ week +
                 "&title=" + title
                 , true);//URL
    xmlhttp.send();
    
}

function submitForm(type){
    //Finds all of the elements' values for modules
    var code = document.getElementsByName("code")[0].value;
    var title = document.getElementsByName("title")[0].value;
    var year = document.getElementsByName("year")[0].value;
    var sem = document.getElementsByName("sem")[0].value;
    var desc = document.getElementById("desc").value;
    var leader = document.getElementsByName("leader")[0].value;
    var credits = document.getElementsByName("credits")[0].value;
    var examPer = document.getElementsByName("examPer")[0].value;
    var cwPer = document.getElementsByName("cwPer")[0].value;
    var modID = document.getElementById("submitter").getAttribute("modID");
    
    if(type == "edit"){
        submitForm_send_edit(code, title, year, sem, desc, leader, credits, examPer, cwPer, modID);    
    }else if(type == "new"){
        submitForm_send(code, title, year, sem, desc, leader, credits, examPer, cwPer);
    }
    
}

function submitForm_send(code, title, year, sem, desc, leader, credits, examPer, cwPer){
    //Adds a new module to the db
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(this.responseText);
            if(this.responseText == ""){
                sendMessage("done");
            }else{
                wentWrong();
            }
            
            /*if(myArr.length > 0){//If data exists

                for(var i = 0; i < myArr.length; i++){//Go through array

                }
                return myArr;
            }else{//Data doesn't exist

            }*/
        }else if(this.status == 404 || this.status == 403){
            openToast("A problem occured - please try again in a few minutes");
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/module/addModule.php?title=" + title +
                 "&code="+ code +
                 "&year=" + year +
                 "&sem=" + sem +
                 "&desc=" + desc+
                 "&leader="+ leader +
                 "&credits=" +credits + 
                 "&examPer=" + examPer +
                 "&cwPer=" + cwPer, true);//URL
    xmlhttp.send();
    
}

function submitForm_send_edit(code, title, year, sem, desc, leader, credits, examPer, cwPer, modID){
    //Adds a new module to the db
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(this.responseText);
            if(this.responseText == ""){
                sendMessage("done");
            }else{
                wentWrong();
            }
            
            /*if(myArr.length > 0){//If data exists

                for(var i = 0; i < myArr.length; i++){//Go through array

                }
                return myArr;
            }else{//Data doesn't exist

            }*/
        }else if(this.status == 404 || this.status == 403){
            openToast("A problem occured - please try again in a few minutes");
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/module/updateModule.php?title=" + title +
                 "&code="+ code +
                 "&year=" + year +
                 "&sem=" + sem +
                 "&desc=" + desc+
                 "&leader="+ leader +
                 "&credits=" +credits + 
                 "&examPer=" + examPer +
                 "&cwPer=" + cwPer +
                 "&id="+modID, true);//URL
    xmlhttp.send();
    
}

function wentWrong(){
    openToast("Make sure fields are correct and try again");
}