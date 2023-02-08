
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











