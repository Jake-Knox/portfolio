

let testFunc = () => {
    // console.log("test")
}



// for facial recog

let kotlinFRIndex = 1;
// showMuseumSlides(museumIndex);

let plusKotlinFRSlides = (n) =>{
    showKotlinFRSlides(kotlinFRIndex+= n)
}
let showKotlinFRSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("facial_recog_image")
    if(n > slides.length){
        kotlinFRIndex = 1
    }
    if(n < 1) {kotlinFRIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[kotlinFRIndex-1].style.display = "block";  
}


// for museum

let museumIndex = 1;
// showMuseumSlides(museumIndex);

let plusMuseumSlides = (n) =>{
    showMuseumSlides(museumIndex+= n)
}

let showMuseumSlides = (n) => {
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


// for escape room

let escapeRoomIndex = 1;
// showEscapeRoomSlides(escapeRoomIndex);

let plusEscapeRoomSlides = (n) =>{
    showEscapeRoomSlides(escapeRoomIndex+= n)
}

let showEscapeRoomSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("escape_image")
    if(n > slides.length){
        escapeRoomIndex = 1
    }
    if(n < 1) {escapeRoomIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[escapeRoomIndex-1].style.display = "block";  
}