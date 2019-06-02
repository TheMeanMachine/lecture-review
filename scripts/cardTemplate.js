
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

function cardLecture(title, week, id, module){
    var cardTemplate = document.createElement('div');
    cardTemplate.setAttribute('weekid', id);
    cardTemplate.setAttribute('moduleid', module);
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
                                        <input class="ccNBbookmark" type="number" name="bookmark" value="0" onblur="updateLectureInfo(this);" min="0" max="150">
                                    </div>
                                </div>
                                <div class="ccNBactionOuter">
                                    <div class="ccNBactionInner">
                                        <div class="ccNBactionbut">
                                            <i class="material-icons" id="centretext" style="" >
                                                edit
                                            </i>
                                        </div>
                                        <div class="ccNBactionbut">
                                            <i class="material-icons" id="centretext" style="" >
                                                delete
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ccTextNotesOuter">
                            <textarea class="ccTextNotes" name="notes" placeholder="Notes"  onblur="updateLectureInfo(this);"></textarea>
                        </div>
                        
                        
                    </div>
    `;
    return cardTemplate;
}
