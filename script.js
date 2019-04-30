/* DROPDOWN MENU – Displays the dropdown menu when clicking 'Links' */

var dropdownContent = document.getElementsByClassName('dropdown-content')[0]
var dropdownTrigger = document.getElementsByClassName('dropdown-trigger')[0]

function menuDropsDown() {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
}
dropdownTrigger.addEventListener('click', menuDropsDown);


/* DROPDOWN MENU – Removes dropdown menu when clicking anywhere else */

document.addEventListener('click', function(e) {
    if (!dropdownTrigger.contains(e.target)&&!dropdownContent.contains(e.target)) {
      dropdownLks.style.display = 'none';
    }
});


/* IMAGE SLIDER */

var currentImage = document.getElementById('current-image');
var imageContainer = document.getElementsByClassName('image-container')[0];
var sliderContainer = document.getElementsByClassName('slider-container')[0];
var prev = document.getElementById('prev');
var next = document.getElementById('next');

/* IMAGE SLIDER - Creates mosaic of images */

var imageCount = 4;  /* Image count adjusted to 0-based numbering */

for (let i = 0; i <= imageCount; i++) {
  var newImage = currentImage.cloneNode(false);
  imageContainer.appendChild(newImage);
  var newSrc = 'imgfolder/img' + i + '.jpg';
  newImage.setAttribute('src', newSrc);
}

/* IMAGE SLIDER - Sliding left and right */

var j = 0;
var newMargin = 0;

function slideRight() {
  j++;
  if (j > imageCount) { j = 0; }
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left:' + newMargin + 'px');
}

function slideLeft() {
  j--;
  if (j < 0) { j = imageCount }
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left:' + newMargin + 'px');
}

/* IMAGE SLIDER - Sliding using keyboard */

window.addEventListener('keyup', function(e) {
  if (e.key == 'ArrowRight') {
    slideRight()
  }
  if (e.key == 'ArrowLeft') {
    slideLeft()
  }
})

/* IMAGE SLIDER - Sliding using clickable arrows */

prev.addEventListener('click', slideLeft);
next.addEventListener('click', slideRight);

/* IMAGE SLIDER - Adjusting image mosaic margin when resizing slider */

window.addEventListener('resize', function() {
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left:' + newMargin + 'px');
})

/* IMAGE SLIDER - Autoplay */

var autoplayButton = document.getElementById('autoplay-button')

var t = 1;
function autoplay() {
  t++;
  if (t % 2 === 0) {
    ongoing = window.setInterval(slideRight, 1500);
    autoplayButton.innerHTML = `&#9724;`;
    var newStyle = 'font-size: 1.3em; padding-left: 5px;';
    autoplayButton.setAttribute('style', newStyle);

    var hideBtns = 'visibility: hidden'; // not necessary?
    prev.setAttribute('style', hideBtns); // not necessary?
    next.setAttribute('style', hideBtns); // not necessary?
  } else {
    window.clearInterval(ongoing);
    autoplayButton.innerHTML = `&#9658;`;
    var newStyle = 'font-size: 1.2em; padding-left: 10px;';
    autoplayButton.setAttribute('style', newStyle);

    var hideBtns = 'visibility: visible'; // not necessary?
    prev.setAttribute('style', hideBtns); // not necessary?
    next.setAttribute('style', hideBtns); // not necessary?
  }
}

autoplayButton.addEventListener('click', autoplay)


/* IMAGE SLIDER - Photo credits hide/display */

var creditsTitle = document.getElementsByClassName('credits-title')[0];
var photoCreditsText = document.getElementsByClassName('photo-credits-text')[0];

function displayCredits() {
  if (photoCreditsText.style.display === 'block') {
    photoCreditsText.style.display = 'none';
  } else {
    photoCreditsText.style.display = 'block';
  }
}

creditsTitle.addEventListener('click', displayCredits);


