var dropdownLks = document.getElementById('ddlinks')
var dropdownBtn = document.getElementById('linksBtn')

/* Displays the dropdown menu when clicking 'Links' */
function menuDropsDown() {
  if (dropdownLks.style.display == 'block') {
    dropdownLks.style.display = 'none';
  } else {
    dropdownLks.style.display = 'block';
  }
}

dropdownBtn.addEventListener('click', menuDropsDown);

/* Hides the dropdown menu when clicking anywhere else on the page */
document.addEventListener('click', function(e) {
    if (!dropdownBtn.contains(e.target)&&!dropdownLks.contains(e.target)) {
      dropdownLks.style.display = 'none';
    }
});
