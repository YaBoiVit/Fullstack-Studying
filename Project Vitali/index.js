var Saved = []
if(localStorage.Saved){
    Saved=JSON.parse(localStorage.Saved)
    PrintSavedNotes()
    var k = Saved.length
}
function SaveTextArea(){
    var container = {
    Task:TextDV.value ,
    Date:DateDV.value ,
    Time:TimeDV.value
    }
    Saved.push(container)
    createSticky(Saved)
    formEL.reset();
    localStorage.setItem("Saved", JSON.stringify(Saved))
}
function createSticky(Saved){
    console.log(Saved)
    console.log(k)
    var postnotes = `<div class="stickynote col-2" id="stickynote${k}">
        <button type="button" class="btn-close" onclick="CloseNote(${k})"aria-label="Close"></button>
    <p class="stickytask"> ${Saved[k].Task} </p>
    <p class="stickydate"> ${Saved[k].Date} </p><br/>
    <p class="stickytime"> ${Saved[k].Time} </p>
    </div>`
    notesRow.innerHTML += postnotes
    k++;
}
function ResetTextArea() {
    formEL.reset();
}
function CloseNote(num) {
Saved.splice(num,1)
localStorage.setItem("Saved", JSON.stringify(Saved))
document.getElementById(`stickynote${num}`).remove();
console.log(Saved)
}
function PrintSavedNotes() {
notesRow.innerHTML = ''
for (var i = 0; i < Saved.length; i++) {
    var postnotes = `<div class="stickynote col-2" id="stickynote${i}">
        <button type="button" class="btn-close" onclick="CloseNote(${i})"aria-label="Close"></button>
    <p class="stickytask"> ${Saved[i].Task} </p>
    <p class="stickydate"> ${Saved[i].Date} </p><br/>
    <p class="stickytime"> ${Saved[i].Time} </p>
    </div>`
    notesRow.innerHTML += postnotes
    console.log(Saved)
}
}