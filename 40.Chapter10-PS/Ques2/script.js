const emailInput = document.getElementById("gmail");
const noteInput = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const delBtn = document.getElementById("deleteBtn");

const delNoteGmail = document.getElementById("gmailforDelete");

saveBtn.addEventListener("click",(e)=>{
    const email = emailInput.value.trim();
    const userNote = noteInput.value.trim();

    if(!email || !userNote){
        alert("Please enter your email and note....");
        return;
    }

    localStorage.setItem(email,userNote);

    alert("Note saved successfully");

    emailInput.value = "";
    noteInput.value = "";
});

delBtn.addEventListener("click",(e)=>{

    const delEmail = delNoteGmail.value.trim();    

    if(localStorage.getItem(delEmail)){
        localStorage.removeItem(delEmail);
        alert('Note Deleted successfully');
    }else{
        alert("Note doesn't Exist!");
    }
    
    delNoteGmail.value = "";
})

