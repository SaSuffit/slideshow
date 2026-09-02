/* Make a slideshow */

let pictureIndex = 0;
let show = document.querySelectorAll(".slideshow");
const length = show.length;

showPics(pictureIndex);
slideshow(length, pictureIndex);

function nextPicture(num) {
    let newSet = num
  let check = pictureIndex + num;

    if(check >= length){
        newSet = 0
                pictureIndex = newSet
        showPics(pictureIndex)

    }else if (check < 0) {
        newSet = length - 1
                pictureIndex = newSet
        showPics(pictureIndex)
    }else{
        newSet = check
                pictureIndex = newSet
        showPics(pictureIndex)
    }

}

function currentPic(num) {
  showPics(num);
}

function slideshow(size, num) {
    let diGet = num
  setTimeout(() => {
    if (diGet < size - 1) {
        diGet++
    } else {
      diGet = 0;
    }
    showPics(diGet)
    console.log("tick-tock");
    slideshow(size, diGet);
}, 1950);

}

function showPics(num) {
  let dots = document.querySelectorAll(".dot");

  for (pics of show) {
    pics.style.display = "none";
  }

  if (num < length && num >= 0) {
    show[num].style.display = "block";
  } 
// else {
//     show[0].style.display = "block";
//   }

//   slideshow()
  for (let x = 0; x < dots.length; x++) {
    // dots[x].innerHTML = "here";
  }
}
