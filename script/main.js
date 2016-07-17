var app = angular.module('main', []);
app.controller('mainCtrl', function($scope) {

  // data-behaviour=singleSelect
  $(document).on('change', "input[type=checkbox]", function() {
    $(this).closest('ul[data-behaviour=singleSelect]').find('input[type=checkbox]').not(this).prop('checked', false);
    if( $(this).prop('checked', true) ) {
      $(this).parent().find("input[type=text]").focus();
      return false;
    }

  })

  //data-behaviour=toggleNext
  $(document).on('change', "input[type=checkbox][data-behaviour=toggleNext]", function() {
    var targetel = $(this).data('behaviourtarget');
    toggleState($(targetel), 'inactive', 'active')
  });


});





function toggleState(el, one, two) {
  el.attr('data-state', el.attr('data-state') === one ? two : one);
}
