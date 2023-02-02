

let testFunc = () => {
    console.log("test")
}



// for vr museum carousel
// based on https://www.w3schools.com/howto/howto_js_slideshow.asp
let museumIndex = 1;
// showMuseumSlides(projectMuseumIndex);

let plusMuseumSlides = (n) =>{
    console.log("test 1")
    showMuseumSlides(museumIndex+= n)
}

let showMuseumSlides = (n) => {
    console.log("test 2")
    let i;
    let slides = document.getElementsByClassName("museum_image")
    if(n > slides.length){
        museumIndex = 1
    }
    if(n < 1) {museumIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[museumIndex-1].style.display = "block";  
}
