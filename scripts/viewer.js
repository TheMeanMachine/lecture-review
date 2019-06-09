function goBack(){
    confirmThis("Confirm", "You need to confirm whether you want to confirm!", "CANCEL", "CONTINUE",function(){
      openToast("A problem occured - please try again in a few minutes");
    },function(){
        openToast("no");
    });
}

function getModules(){
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

getModules();

function submitForm_lecture(){
    var modules = document.getElementsByName("module_code")[0];
    var module_id = modules.options[modules.selectedIndex].value;
    var week = document.getElementsByName("week")[0].value;
    var title = document.getElementsByName("title")[0].value;
    
    submitForm_lecture_send(module_id,week,title);
}

function submitForm_lecture_send(module_id,week,title){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(this.responseText);
            if(this.responseText == ""){
                window.history.back();
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

function submitForm(){
    var code = document.getElementsByName("code")[0].value;
    var title = document.getElementsByName("title")[0].value;
    var year = document.getElementsByName("year")[0].value;
    var sem = document.getElementsByName("sem")[0].value;
    var desc = document.getElementById("desc").value;
    var leader = document.getElementsByName("leader")[0].value;
    var credits = document.getElementsByName("credits")[0].value;
    var examPer = document.getElementsByName("examPer")[0].value;
    var cwPer = document.getElementsByName("cwPer")[0].value;
    
    
    submitForm_send(code, title, year, sem, desc, leader, credits, examPer, cwPer);
}

function submitForm_send(code, title, year, sem, desc, leader, credits, examPer, cwPer){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(this.responseText);
            if(this.responseText == ""){
                window.history.back();
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