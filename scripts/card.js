function cardCheck(card){

    
    var children = card.children;
    var child = children[0];
   
    if(child.innerHTML == "check_box"){
        //checked
        
        child.innerHTML = "check_box_outline_blank";
        card.setAttribute("check", 0);
    }else{
        child.innerHTML = "check_box";
        card.setAttribute("check", 1);
    }
    updateLectureInfo(card);
}

function expandCard(card){
    var cardOuter = card.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    
    cardChildren = cardOuter.children;
    
    var contents = cardChildren[1];

    var children = card.children;
    var child = children[0];
    
    if(contents.style.display == "none"){
        //contents not shown
        child.innerHTML = "remove";
        contents.style.display = "block";
    }else{
        contents.style.display = "none";
        child.innerHTML = "add";
    }
    
    
}

function findLectureID(card){
    var moduleID;
    while(!card.hasAttribute("lectureID")){
        
        card = card.parentElement;
        moduleID = card.getAttribute("lectureID");
    }
    
    return moduleID;
}

function updateLectureInfo(card){
    var lectureID = 0;
    var notes = "";
    var bookmark = 0;
    var complete = 0;
    
    (card.getAttribute('name') == "notes") ? notes = card.value : null;
    (card.getAttribute('name') == "bookmark") ? bookmark = card.value : null;
    (card.getAttribute('name') == "check") ? complete = card.getAttribute("check") : null;
    console.log(complete);
    
    lectureID = findLectureID(card);
    console.log(lectureID);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }else{//Data doesn't exist
        }
    };
    xmlhttp.open("GET", "http://localhost/lecRev/lecture/editLectureInformation.php?lectureID=" + lectureID + "&complete=" + complete + "&bookmark=" + bookmark + "&notes=" + notes, true);//URL
    xmlhttp.send();
}
