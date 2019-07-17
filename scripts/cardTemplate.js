
function cardModule(code, title, year, sem, id, desc, leader, credits, examPer, cwPer){
    var cardTemplate = document.createElement('div');
    cardTemplate.setAttribute('class', 'card');
    cardTemplate.setAttribute('sem', sem);
    cardTemplate.setAttribute('year', year);
    cardTemplate.setAttribute('code', code);
    cardTemplate.setAttribute('title', title);
    cardTemplate.setAttribute('modID', id);
    cardTemplate.setAttribute('leader', leader);
    cardTemplate.setAttribute('credits', credits);
    cardTemplate.setAttribute('examPer', examPer);
    cardTemplate.setAttribute('cwPer', cwPer);
    cardTemplate.setAttribute('desc', desc);
    
    var titleString = code + " : " + title;

    cardTemplate.innerHTML = `
          <div class="cHandle">
                        <div class="cHandleOuter">
                            <div class="cHandleInner">
                                <div class="ch_lCheck">
                                    <div class="ch_lCheckbox" onclick="create_iframe('view','Module',this)">
                                        <i class="material-icons" style="user-select: none;">
                                            info
                                        </i>
                                    </div>
                                </div>
                                <div class="ch_lText">
                                    <div class="ch_lTextInner">
                                        
                                    </div>
                                    <div class="ch_mTextInner">
                                        `+titleString+`
                                    </div>

                                </div>
                                <div class="ch_rExpand" >
                                    <div class="ch_rExpandInner">
                                        <div class="ch_rExpandInnerText" onclick="expandCard(this)">
                                            <i class="material-icons" style="" >
                                                add
                                            </i>

                                        </div>
                                    </div>

                                </div>
                            </div>  
                        </div>

                    </div>
                    <div class="cContents" id="module`+id+`" style="display: none">
                        
                        <!--For specific uses-->
                        <div class="ccNavbar">
                            <div class="ccNavbarInner">
                                <div class="ccNBbookmarkOuter">
                                    <div class="ccNBbookmarkInner" style="display: none">
                                        Slide
                                        <input class="ccNBbookmark" type="number" name="" value="0" onblur="updateLectureInfo(this);" min="0" max="150">
                                    </div>
                                </div>
                                <div class="ccNBactionOuter">
                                    <div class="ccNBactionInner">
                                        <div class="ccNBactionbut" onclick="create_iframe('new','Lecture', this)">
                                            <i class="material-icons" id="centretext" style="" >
                                                add
                                            </i>
                                        </div>
                                        <div class="ccNBactionbut" onclick="create_iframe('edit','Module',this)">
                                            <i class="material-icons" id="centretext" style="" >
                                                edit
                                            </i>
                                        </div>
                                        <!--<div class="ccNBactionbut">
                                            <i class="material-icons" id="centretext" style="" >
                                                delete
                                            </i>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ccTitle">
                            Lectures
                        </div>
                        <div class="ccTitleUnderline">
                            
                        </div>
                        <p style="text-align: center; height: 50px; line-height:50px; padding: 0; margin: 0;" id="nolectures`+id+`">No lectures to show</p>
                        <div class="ccTextNotesOuter" style="display: none;">
                            <textarea class="ccTextNotes" name="notes" placeholder="Notes" onblur="updateLectureInfo(this);"></textarea>

                        </div>
                        
                        
                    </div>
    `;
    return cardTemplate;
}


function cardTemplate(){
    var cardTemplate = document.createElement('div');
    cardTemplate.setAttribute('class', 'card');
    
    cardTemplate.innerHTML = `
        <div class="cHandle">
            <div class="cHandleOuter">
                <div class="cHandleInner">
                    <div class="ch_lCheck">
                        <div class="ch_lCheckbox" onclick="cardCheck(this)">
                            <i class="material-icons" style="user-select: none">
                                check_box_outline_blank
                            </i>
                        </div>
                    </div>
                    <div class="ch_lText">
                        <div class="ch_lTextInner">
                            Year 1
                        </div>

                    </div>
                    <div class="ch_rExpand" >
                        <div class="ch_rExpandInner">
                            <div class="ch_rExpandInnerText" onclick="expandCard(this)">
                                <i class="material-icons" style="" >
                                    add
                                </i>

                            </div>
                        </div>

                    </div>
                </div>  
            </div>
        </div>
        <div class="cContents">
            <!--For specific uses-->
            <div class="ccNavbar">
                <div class="ccNavbarInner">

                </div>
            </div>
            
        </div>
    `;
    return cardTemplate;
}

function cardLecture(title, week, id, module, completed, notes, bookmark, lectureid){
    var checkText;
    (completed == 1) ? checkText = "check_box_outline_blank" : checkText = "check_box";
    (notes == "") ? notes = "" : null;
    
    var cardTemplate = document.createElement('div');
    cardTemplate.setAttribute('weekid', week);
    cardTemplate.setAttribute('lectureid', lectureid);
    cardTemplate.setAttribute('modid', module);
    cardTemplate.setAttribute('title', title);
    cardTemplate.setAttribute('week', week);
    cardTemplate.innerHTML = `
        <div class="cHandle">
            <div class="cHandleOuter">
                <div class="cHandleInner">
                    <div class="ch_lCheck">
                        <div class="ch_lCheckbox" name="check" check="` + completed + `" onclick="cardCheck(this)">
                            <i class="material-icons" style="user-select: none">
                                `+ checkText + `
                            </i>
                        </div>
                    </div>
                    
                    <div class="ch_lText">
                        <div class="ch_lTextInner">
                            ` + week + `
                        </div>
                        <div class="ch_mTextInner">
                            ` + title + `
                        </div>

                    </div>

                
                    <div class="ch_rExpand" >
                        <div class="ch_rExpandInner">
                            <div class="ch_rExpandInnerText" onclick="expandCard(this)">
                                <i class="material-icons" style="" >
                                    add
                                </i>

                            </div>
                        </div>

                    </div>
                </div>  
            </div>
        </div>
        <div class="cContents" id="module1" style="display: none">
                        <!--For specific uses-->
                        <div class="ccNavbar">
                            <div class="ccNavbarInner">
                                <div class="ccNBbookmarkOuter">
                                    <div class="ccNBbookmarkInner">
                                        Slide
                                        <input class="ccNBbookmark" type="number" name="bookmark" value="` + bookmark + `" onblur="updateLectureInfo(this);" min="0" max="150">
                                    </div>
                                </div>
                                <div class="ccNBactionOuter">
                                    <div class="ccNBactionInner">
                                        <div class="ccNBactionbut" onclick="create_iframe('edit','Lecture',this)">
                                            <i class="material-icons" id="centretext" style="" >
                                                edit
                                            </i>
                                        </div>
                                        <div class="ccNBactionbut" onclick="deleteLecture(this)">
                                            <i class="material-icons" id="centretext" style="" >
                                                delete
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ccTextNotesOuter">
                            <textarea class="ccTextNotes" name="notes" placeholder="Notes"  onblur="updateLectureInfo(this);">` + notes + `</textarea>
                        </div>
                        
                        
                    </div>
    `;
    return cardTemplate;
}


