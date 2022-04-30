
// start Clock Time

function showTime() {
    var date = new Date();

    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();

    var TimeZone = "AM";

    if (Hours === 0) {
        Hours = 12;       
}

    if (Hours > 12) {
        Hours = Hours - 12;
        TimeZone = "PM";
}

Hours = (Hours < 10) ? "0" + Hours : Hours;
Minutes = (Minutes < 10) ? "0" + Minutes : Minutes;
Seconds = (Seconds < 10) ? "0" + Seconds : Seconds;
 
var Time = Hours + ":" + Minutes + ":" + Seconds + " "+ TimeZone;

document.getElementById("myClockDisplay") .innerHTML =Time;

setTimeout (showTime, 1000);

}



showTime()

// End Clock Time







// start Side Bar

function opennav() {
    document.getElementById("MySideBar").style.width="250px";
    // document.getElementById("menu").style.marginLeft="250px";
    document.getElementById("welcome2").style.marginLeft="250px";
    document.getElementById("Mashro3y2").style.marginLeft="250px";

    // document.body.style.backgroundColor="";
}

function closenav() {
    document.getElementById("MySideBar").style.width="0px";
    // document.getElementById("menu").style.marginLeft="0px";
    document.getElementById("welcome2").style.marginLeft="0px";
    document.getElementById("Mashro3y2").style.marginLeft="0px";

    // document.body.style.backgroundColor="";
}


var dropdown = document.getElementsByClassName("TopLinksDiv");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

// End Side Bar











