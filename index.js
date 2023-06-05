

// element variables
const webCollapse = document.getElementById("web-collapse");
const pythonCollapse = document.getElementById("python-collapse");
const csharpCollapse = document.getElementById("csharp-collapse");


const wdOnlineDiv = document.getElementById("wd-online");
const cyberPetDiv = document.getElementById("cyber-pet");
const wdLocalDiv = document.getElementById("wd-local");

const chatbotDiv = document.getElementById("chatbot");
const compVisionDiv = document.getElementById("comp-vision");

const vrMuseumDiv = document.getElementById("vr-museum");
const escapeRoomDiv = document.getElementById("escape-room");


// functions
webCollapse.addEventListener("click", () => {
    if(  wdOnlineDiv.style.display != "none"){
        wdOnlineDiv.style.display = "none";
        cyberPetDiv.style.display = "none";
        wdLocalDiv.style.display = "none";
        webCollapse.style.backgroundColor = "#5ABE80";
    }
    else{
        wdOnlineDiv.style.display = "grid";
        cyberPetDiv.style.display = "grid";
        wdLocalDiv.style.display = "grid";
        webCollapse.style.backgroundColor = "#f1f1f1";
    }  
});

pythonCollapse.addEventListener("click", () => {
    if(  chatbotDiv.style.display != "none"){
        chatbotDiv.style.display = "none";
        compVisionDiv.style.display = "none";
        pythonCollapse.style.backgroundColor = "#5ABE80";
    }
    else{
        chatbotDiv.style.display = "grid";
        compVisionDiv.style.display = "grid";
        pythonCollapse.style.backgroundColor = "#f1f1f1";
    }  
});

csharpCollapse.addEventListener("click", () => {
    if(  vrMuseumDiv.style.display != "none"){
        vrMuseumDiv.style.display = "none";
        escapeRoomDiv.style.display = "none";
        csharpCollapse.style.backgroundColor = "#5ABE80";
    }
    else{
        vrMuseumDiv.style.display = "grid";
        escapeRoomDiv.style.display = "grid";
        csharpCollapse.style.backgroundColor = "#f1f1f1";
    }  
});