

// element variables
const webCollapse = document.getElementById("web-collapse");
const pythonCollapse = document.getElementById("python-collapse");
const csharpCollapse = document.getElementById("csharp-collapse");

// indicators
const webIndicator = document.getElementById("web-indicator");
const pythonIndicator = document.getElementById("python-indicator");
const csharpIndicator = document.getElementById("csharp-indicator");


// for web, python, csharp collapse funcs
const webDivs = document.querySelectorAll(".web-div");
const pythonDivs = document.querySelectorAll(".python-div");
const csharpDivs = document.querySelectorAll(".csharp-div");

// functions
webCollapse.addEventListener("click", () => {    
    for (let i = 0; i < webDivs.length; i++) {
        webDivs[i].classList.toggle("flex-col-centre");
        webDivs[i].classList.toggle("hide");        
    }
    toggleIndicator(webIndicator);
});

pythonCollapse.addEventListener("click", () => {    
    for (let i = 0; i < pythonDivs.length; i++) {
        pythonDivs[i].classList.toggle("flex-col-centre");
        pythonDivs[i].classList.toggle("hide");
    }
    toggleIndicator(pythonIndicator);
});

csharpCollapse.addEventListener("click", () => {
    for (let i = 0; i < csharpDivs.length; i++) {
        csharpDivs[i].classList.toggle("flex-col-centre");
        csharpDivs[i].classList.toggle("hide");
    }    
    toggleIndicator(csharpIndicator);
});

const toggleIndicator = (elm) => {
    if(elm.textContent == "+"){
        elm.textContent = "-";
    } else {
        elm.textContent = "+";
    }
}