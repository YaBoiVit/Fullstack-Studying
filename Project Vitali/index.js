var Saved = []
if(localStorage.Saved){
    Saved=JSON.parse(localStorage.Saved)
    createSticky(Saved)
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
    notesRow.innerHTML = ''
    for (var i = 0; i < Saved.length; i++) {
    var postnotes = `<div class="stickynote col-1">
        <button type="button" class="btn-close" onclick="CloseNote(${i})"aria-label="Close"></button>
    <p class="stickytask"> ${Saved[i].Task} </p>
    <p class="stickydate"> ${Saved[i].Date} </p><br/>
    <p class="stickytime"> ${Saved[i].Time} </p>
    </div>`
    notesRow.innerHTML += postnotes
}
}
function ResetTextArea() {
    formEL.reset();
}
function ResetNotes(){
    notesRow.innerHTML = '';
    while (Saved.length)
    var poppedElement = Saved.pop();
    localStorage.setItem("Saved", JSON.stringify(Saved))
    console.log(Saved)
}
function CloseNote(num) {
Saved.splice(num,1)
localStorage.setItem("Saved", JSON.stringify(Saved))
createSticky(Saved)
}