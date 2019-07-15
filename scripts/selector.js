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
                    var title = myArr[i]['title'];
                    var completed = myArr[i]['completed'];
                    var notes = myArr[i]['notes'];
                    var bookmark = myArr[i]['slideBookmark'];
                    
                    
                    var card = cardLecture(title, week, id, module, completed, notes, bookmark);
                    var contents = document.getElementById("module" + module);
                    contents.appendChild(card);
                    
                    
                }
                return myArr;
            }else{//Data doesn't exist

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

                    
                    
                    var card = cardModule(code, title, year, sem,  id);
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
selectModules(3,1);

//setInterval(functionToRefresh, 9000);//Refreshing code
        