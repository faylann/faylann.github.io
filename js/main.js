// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("farika");
var modalImg1 = document.getElementById("farika-gbr");
var captionText1 = document.getElementById("caption1");
img1.onclick = function () {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
}
modal1.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("tunggal");
var modalImg2 = document.getElementById("tunggal-gbr");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

modal2.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}


// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("zombie");
var modalImg3 = document.getElementById("zombie-gbr");
var captionText3 = document.getElementById("caption3");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
modal3.onclick = function () {
  modal3.style.display = "none";
}

// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("movie");
var modalImg4 = document.getElementById("movie-gbr");
var captionText4 = document.getElementById("caption4");
img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
modal4.onclick = function () {
  modal4.style.display = "none";
}




// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("recipes");
var modalImg5 = document.getElementById("recipes-gbr");
var captionText5 = document.getElementById("caption5");
img5.onclick = function () {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

window.onclick = function (event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
modal5.onclick = function () {
  modal5.style.display = "none";
}


// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("phone");
var modalImg6 = document.getElementById("phone-gbr");
var captionText6 = document.getElementById("caption6");
img6.onclick = function () {
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
modal6.onclick = function () {
  modal6.style.display = "none";
}
