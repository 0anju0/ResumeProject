//Scroll function seprate so that use multiple time
var navMenuAnchortags = document.querySelectorAll('.nav-menu a');
var scrollInterval;
for (let i = 0; i < navMenuAnchortags.length; i++) {
    navMenuAnchortags[i].addEventListener('click', function () {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        scrollInterval = setInterval(scrollVertically, 20, targetSection);

    })
}

function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(scrollInterval);
        return;
    }
    window.scrollBy(0, 50);
}

