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
        cardOuter.setAttribute("expanded","true");
    }else{
        contents.style.display = "none";
        child.innerHTML = "add";
        cardOuter.setAttribute("expanded","false");
    }
    
   
    
}

function findLectureID(card){
    var moduleID;
    while(!card.hasAttribute("lectureid")){
        
        card = card.parentElement;
        moduleID = card.getAttribute("lectureid");
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


function randomInspiration(){
    var inspirations = [
        "Smile! Dianabasi loves you!", "At least you'll be dead ONE day...", "Oh... inspiration... come back another day. You're terrible today", "If you try to fail, and succeed, which have you done?", "People say nothing is impossible, but I do nothing every day... just like you now :)", "Even if you are on the right track, you’ll get run over if you just sit there.", "A diamond is merely a lump of coal that did well under pressure.", "If you hit the target every time it’s too near or too big.", "I didn’t fail the test. I just found 100 ways to do it wrong. (Hazar)" 
    ];
    var number = Math.floor(Math.random() * inspirations.length); 
    openToast(inspirations[number]);
}