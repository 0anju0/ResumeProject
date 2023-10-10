//Scroll function seprate so that use multiple time
var navMenuAnchortags = document.querySelectorAll('.nav-menu a');
var scrollInterval;
for ( let i=0; i < navMenuAnchortags.length; i++){
    navMenuAnchortags[i].addEventListener('click', function(){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        scrollInterval= setInterval(scrollVertically, 20, targetSection);         
        
    })
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(scrollInterval);
        return;
    }
    window.scrollBy(0, 50);
}


//--------------Scroll funtion-------------------

/*var navMenuAnchortags = document.querySelectorAll('.nav-menu a');

for ( let i=0; i < navMenuAnchortags.length; i++){
    navMenuAnchortags[i].addEventListener('click', function(){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        var scrollInterval= setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0, 50);
        }, 50);           
        
    })
}*/



// var targrtpo = 2000;
// var currpo = 0;
// var scrollInterval= setInterval(function(){
//     if(currpo >= targrtpo){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currpo += 60;
//     window.scrollBy(0, 60);
// }, 60);