$(document).ready(function(){

  // mobile menu
  setupMobileMenu();

  function setupMobileMenu() {

    var button = $(this);
    var icon = button.find('i');
    var menu = $('#mobileMenu');
    var contentWrap = $('#contentWrap');

    // hamburger button click
    $('#hamburgerButton').click(function(e){
      e.preventDefault();
      openMenu();
    });

    // mobile menu close button
    $('#closeButton').click(function(e){
      e.preventDefault();
      closeMenu();
    });

    function openMenu() {
      button.addClass('open');
      menu.addClass('open');
      contentWrap.prepend('<div id="overlayForMobileMenu" />');
      $('#overlayForMobileMenu').click(function(){
        closeMenu();
      });
    }
    
    function closeMenu() {
      button.removeClass('open');
      menu.removeClass('open');
      $('#overlayForMobileMenu').detach();
    }

    }

})
