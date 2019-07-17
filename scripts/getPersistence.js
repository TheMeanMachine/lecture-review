function getPersistence(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);//Parses API json into key-value pairs
            console.log(myArr);
            if(myArr.length > 0){//If data exists
    
                for(var i = 0; i < myArr.length; i++){//Go through array
                    var year = myArr[i]['currentYear'];
                    var sem = myArr[i]['currentSem'];

                    document.getElementById("years").value = year;
                    document.getElementById("semester").value = sem;
                    updateModules();
                }
                return myArr;
            }else{//Data doesn't exist
                 
                 
            }
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/persistence/getAppPersist.php", true);//URL
    xmlhttp.send();
    
}

function setPersistence(type, value){
    if(type == "year"){
         var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);

                if(this.responseText.length > 0){//If data exists

                }else{//Data doesn't exist


                }
            }
        };
        xmlhttp.open("GET", "http://localhost/lecRev/persistence/changeYear.php?year="+value, true);//URL
        xmlhttp.send();    
    }else if(type == "semester"){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);

                if(this.responseText.length > 0){//If data exists

                }else{//Data doesn't exist


                }
            }
        };
        xmlhttp.open("GET", "http://localhost/lecRev/persistence/changeSem.php?semester="+value, true);//URL
        xmlhttp.send();    
    }
    
}

getPersistence();