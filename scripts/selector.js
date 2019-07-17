/*
Gets a list of all the lectures
@param module - the module parent of the lecture
*/
function selectLecture(module){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs

            if(myArr.length > 0){//If data exists

                for(var i = 0; i < myArr.length; i++){//Go through array
                    var id = myArr[i]['id'];
                    var week = myArr[i]['week'];
                    var lectureID = myArr[i]['lectureID'];
                    var title = myArr[i]['title'];
                    var completed = myArr[i]['completed'];
                    var notes = myArr[i]['notes'];
                    var bookmark = myArr[i]['slideBookmark'];
                    
                    
                    var card = cardLecture(title, week, id, module, completed, notes, bookmark,lectureID);
                    
                    var contents = document.getElementById("module" + module);
                    contents.appendChild(card);
                    
                    var nolecture = document.getElementById("nolectures" + module)
                    nolecture.style.display = "none";
                    
                }
                return myArr;
            }else{//Data doesn't exist
                 var nolecture = document.getElementById("nolectures" + module)
                 nolecture.style.display = "";
                 
            }
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/lecture/getLecture.php?moduleID=" + module, true);//URL
    xmlhttp.send();
    
}

function selectModules(year,sem){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(myArr);
            if(myArr.length > 0){//If data exists

                for(var i = 0; i < myArr.length; i++){//Go through array
                    var id = myArr[i]['ID'];
                    var code = myArr[i]['code'];
                    var title = myArr[i]['title'];
                    
                    var desc = myArr[i]['description'];
                    var leader = myArr[i]['leader'];
                    var credits = myArr[i]['credits'];
                    var examPer = myArr[i]['examPercent'];
                    var cwPer = myArr[i]['cwPercent'];
                    
                    var card = cardModule(code, title, year, sem,  id,desc, leader, credits, examPer, cwPer);
                    var contents = document.getElementById("pc");
                    contents.appendChild(card);
                    selectLecture(id);
                    
                }
                return myArr;
            }else{//Data doesn't exist

            }
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/module/getModuleByYearSem.php?year=" + year + "&sem=" + sem, true);//URL
    xmlhttp.send();
    
}
//selectModules(3,1);
function updateModules(){
    var year = document.getElementById("years").value;
    var sem = document.getElementById("semester").value;
    
    var pageContents = document.getElementById('pc');
    
    var openArr =[];//Some code for the replacing open stuff but class would be easier to make modules open when they were open previously
    var temp = [];
    var amtChildren = pageContents.childElementCount;
    for(i = 0; i < amtChildren; i++){
        
        temp[i] = pageContents.children[i];
        var currentMod = temp[i].getAttribute("modid");
        if(temp[i].getAttribute("expanded") == "true"){
            openArr.push(currentMod);
        }
    }
    
    deleteChildren(pageContents);
    
    selectModules(year, sem);
    
    for(i = 0; i < openArr.length; i++){
        
        var curModule = document.getElementById("module" + openArr[i]);
        
        //expandCard(curModule);
    }
}



function deleteChildren(e){
    var amtChildren = e.childElementCount;
    
        
    for(i = 0; i < amtChildren; i++){
        e.removeChild(e.children[0]);
    }
}

function deleteLecture(e){
    confirmThis("Are you sure?", "You're permenantly deleting this lecture","CANCEL", "CONTINUE",function(){
    var currentE = e;
    while(!currentE.hasAttribute("lectureID")){
        currentE = currentE.parentNode;
    }
    var id = currentE.getAttribute("lectureID");


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            
            if(this.responseText.length <= 0){//If data exists
                currentE.parentElement.removeChild(currentE);
                console.log("lectureID");
            }else{
                openToast("Something went wrong - try again later");
            }
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/lecture/removeLecture.php?id=" + id, true);//URL
    xmlhttp.send();
        
        
        
    },function(){
        console.log("No");
    });
}

//setInterval(functionToRefresh, 9000);//Refreshing code
        