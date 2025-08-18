const input = document.getElementById("username");
const hackBtn = document.getElementById("hackBtn");
const terminal = document.getElementById("terminal-screen");


const hackingSteps = [
    "Initializing Hackerman Protocol...",
    "Bypassing firewall...",
    "Accessing secure server...",
    "Extracting encrypted passwords...",
    "Decrypting data...",
    "Injecting backdoor...",
    "Uploading tracking malware...",
    "Stealing cookies...",
    "Gathering private messages...",
    "Finalizing hack..."
];

function delay(milliseconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },milliseconds)
    })
}
 
async function typeLine(line){
    for(let char of line){
        terminal.innerHTML += char;  //terminal.innerHTML + char;
        await delay(40);            //typing illusion
    }
    terminal.innerHTML += "\n";     
}

async function fakeHack(username) {
    terminal.innerHTML = "";

    for(let step of hackingSteps){
        await typeLine(`[+] ${step} for user "${username}"........` );
        await delay(500);
    }
    await typeLine(`\n ✅ Hack complete! Access granted to "${username}"'s account.`);
}

hackBtn.addEventListener("click",()=>{
    const username = input.value.trim();
    if(!username){
        alert('Username is required !');
        return;
    }
    fakeHack(username);
});