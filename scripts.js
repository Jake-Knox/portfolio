
let testFunc = () => {
    // console.log("test")
}



// carousels
// based on https://www.w3schools.com/howto/howto_js_slideshow.asp

let albumsIndex = 0;

const  albumCoversNodeList = document.querySelectorAll(".album");
const albumCovers = Array.from(albumCoversNodeList);
// console.log(albumCovers)

const albumsArrowLeft = document.getElementById("albums_arrow_left");
const albumsArrowRight = document.getElementById("albums_arrow_right");

albumsArrowRight.addEventListener("click", () => {

    albumsIndex += 1;    
    if(albumsIndex+5 > albumCovers.length){
        albumsIndex = 0;
    }
    // console.log("index: "+albumsIndex)

    for(let i = 0; i < albumCovers.length; i ++)
    {
        //to make it easier to read
        albumCarouselIndex = albumCovers.indexOf(albumCovers[i])

        // if i =normalised or < normalised + 5 >> visible >> else invisible
        if((albumCarouselIndex >= albumsIndex) && (albumCarouselIndex < albumsIndex + 6))  {
            albumCovers[i].style.display = "block";
        }     
        else{
            albumCovers[i].style.display = "none";
        }
    }
})

albumsArrowLeft.addEventListener("click", () => {

    albumsIndex -= 1;    
    if(albumsIndex < 0 ){
        albumsIndex = albumCovers.length - 5;
    }
    // console.log("index: "+albumsIndex)

    for(let i = 0; i < albumCovers.length; i ++)
    {
        albumCarouselIndex = albumCovers.indexOf(albumCovers[i])

        // if i =normalised or < normalised + 5 >> visible >> else invisible
        if((albumCarouselIndex >= albumsIndex) && (albumCarouselIndex < albumsIndex + 6))  {
            albumCovers[i].style.display = "block";
        }     
        else{
            albumCovers[i].style.display = "none";
        }
    }
})











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