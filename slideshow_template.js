/* Make a slideshow */

let pictureIndex = 1
showPics(pictureIndex)

function nextPicture(num){
    showPics(pictureIndex += num)
}

function currentPic(num) {
    showPics(pictureIndex = num)
}

function showPics(num){
    let show = document.querySelectorAll(".slideshow")
    let dots = document.querySelectorAll(".dot")

    if(num > show.length){
        pictureIndex = 1
    }
    if(num < 1){
        pictureIndex = show.length
    }

    for(let i = 0; i < show.length; i++){
        show[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }    
    if(pictureIndex > show.length){
        pictureIndex = 1
    }
    show[pictureIndex - 1].style.display = "block"
}

