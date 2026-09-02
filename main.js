/* Make a slideshow */

let pictureIndex = 0;
let show = document.querySelectorAll(".slideshow");
const length = show.length;

showPics(pictureIndex);
slideshow(length);

function nextPicture(num) {
  let check = pictureIndex + num;

  if (check < length && check >= 0) {
    showPics((pictureIndex += num));
  }
}

function currentPic(num) {
  showPics(num);
}

function slideshow(size) {
  setTimeout(() => {
    if (pictureIndex <= size + 1) {
        pictureIndex++
    } else {
      pictureIndex = 0;
    }
    showPics(pictureIndex)
    console.log("tick-tock");
    slideshow(size);
}, 1250);

}

function showPics(num) {
  let dots = document.querySelectorAll(".dot");

  for (pics of show) {
    pics.style.display = "none";
  }

  if (num < length && num >= 0) {
    show[num].style.display = "block";
  } else {
    show[0].style.display = "block";
  }

//   slideshow()
  for (let x = 0; x < dots.length; x++) {
    // dots[x].innerHTML = "here";
  }
}
