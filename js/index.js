var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

function chec(event) {
  let item = document.getElementById('chkPref');
  switch (item.getAttribute('aria-checked')) {
    case "true":
      item.setAttribute('aria-checked', "false");
      break;
    case "false":
      item.setAttribute('aria-checked', "true");
      break;
  }
}

$(function () {

  // accordion

  $("#accordion").accordion({
    collapsible: true
  });
  $("#accordion").accordion({
    heightStyle: "content"
  });

  // hamburger

  $('.hamburger-btn').click(function () {
    $('.hamburger-btn').toggleClass('open-hamburger-btn');
    $('.header-menu-mobail').toggleClass('open-header-menu-mobail');
    $('.header-wrapper').toggleClass('open-header-wrapper');
    $('.header-close').toggleClass('open-header-close');
  });

  $('.header-close').click(function () {
    $('.hamburger-btn').toggleClass('open-hamburger-btn');
    $('.header-menu-mobail').toggleClass('open-header-menu-mobail');
    $('.header-wrapper').toggleClass('open-header-wrapper');
    $('.header-close').toggleClass('open-header-close');
  });

  $('#chkPref').keyup(function (i) {
    if (i.key === "Space" || i.keyCode === 32) {
      if ($('#chec').is(':checked')) {
        document.getElementById('chec').checked = false;
      } else {
        document.getElementById('chec').checked = true;
      }
    }
  });

});
