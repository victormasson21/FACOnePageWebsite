var dropdownLks = document.getElementById('ddlinks')
var dropdownBtn = document.getElementById('linksBtn')


function menuDropsDown() {
  if (dropdownLks.style.display == 'block') {
    dropdownLks.style.display = 'none';
  } else {
    dropdownLks.style.display = 'block';
  }
}



dropdownBtn.addEventListener('click', menuDropsDown);
