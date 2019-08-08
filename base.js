$(function(){
  $("#navigation").load("top-nav.html");
  $("#footer").load("footer.html");
  $("#contact").load("contact-modal.html");
});

var toggleMenu = function() {
    $("#navbarMenu").toggleClass("open-menu");
}

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
