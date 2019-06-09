function cardCheck(card){

    
    var children = card.children;
    var child = children[0];
   
    if(card.getAttribute("check") == 2){
        //checked
        
        child.innerHTML = "check_box_outline_blank";
        card.setAttribute("check", 1);
    }else{
        child.innerHTML = "check_box";
        card.setAttribute("check", 2);
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
    var xmlhttp = new XMLHttpRequest();
    var lectureID = findLectureID(card);
    var notes;
    var bookmark;
    var complete;
    
    if(card.getAttribute('name') == "notes"){
        notes = card.value;
        xmlhttp.open("GET", "http://localhost/lecRev/lecture/editLectureInformation.php?lectureID=" + lectureID + "&notes=" + notes, true);
        xmlhttp.send();
    }
    if(card.getAttribute('name') == "bookmark"){
        bookmark = card.value;
        xmlhttp.open("GET", "http://localhost/lecRev/lecture/editLectureInformation.php?lectureID=" + lectureID + "&bookmark=" + bookmark, true);
        xmlhttp.send();
    }
    if(card.getAttribute('name') == "check"){
        complete = card.getAttribute("check");
        xmlhttp.open("GET", "http://localhost/lecRev/lecture/editLectureInformation.php?lectureID=" + lectureID + "&complete=" + complete, true);
        xmlhttp.send();
    }
   
        
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
           
        }else{//Data doesn't exist
        }
    
    }
    
    
}
