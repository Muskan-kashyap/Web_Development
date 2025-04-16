const btnE1 = document.getElementById("btn");
const appE1 = document.getElementById("App");

let notes =[];

function createNoteE1(id,content){

    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;


    return element;
}

function addNote(){
    //id, content

const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: ""
};

const noteE1 = createNoteE1(noteObj.id,noteObj.content);
appE1.insertBefore(noteE1,btnE1);

notes.push(noteObj);
}

btnE1.addEventListener("click", addNote);