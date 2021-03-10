var menu = $(".header-right");
var link = $(".hamburger-menu");
menu.click(function () {
  link.show()
});
var chiusura = $(".close");
var x = $(".hamburger-menu");
chiusura.click(function () {
  x.hide()
});
