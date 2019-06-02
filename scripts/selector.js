

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
                    
                    var card = cardLecture(title, week, id, module);
                    var contents = document.getElementById("module1");
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
selectLecture(9);

//setInterval(functionToRefresh, 9000);//Refreshing code
        