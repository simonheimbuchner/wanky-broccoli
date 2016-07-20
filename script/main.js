var app = angular.module('main', []);

function initFunc() {
  window.setTimeout(function() {
    $(window).scrollTop(0);
  }, 0);
}

app.controller('mainCtrl', function($scope) {
  // data-behaviour=singleSelect
  $(document).on('change', "input[type=checkbox]", function() {
    $(this).closest('ul[data-behaviour=singleSelect]').find('input[type=checkbox]').not(this).prop('checked', false);
    // TO DO
    if ($(this).prop('checked', true)) {
      // && $(this).closest('ul[data-behaviour=singleSelect').has(this)
      $(this).parent().find("input[type=text]").focus();
      return false;
    }

  })

  //data-behaviour=toggleNext
  $(document).on('change', "input[type=checkbox][data-behaviour=toggleNext]", function() {
    var targetel = $(this).data('behaviourtarget');
    toggleState($(targetel), 'inactive', 'active')
  });


  // klick scroll
  $(document).on('click', ".scr-btnnext", function() {
    var thisel = $(this).closest('section[role=scr-wrapper]');
    var nextel = thisel.next();
    nextelScroll = nextel.offset().top;

    $("html, body").animate({
      scrollTop: nextelScroll
    }, 1200);
  });




});





function toggleState(el, one, two) {
  el.attr('data-state', el.attr('data-state') === one ? two : one);
}
