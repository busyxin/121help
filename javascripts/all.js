$(document).ready(function() {

  $('.js-heart-count').on('click', function() {
    var $self = $(this);
    var $count = $self.siblings('.example-box__counter').find('.example-box__count');
    var $heart = $self.find('.js-heart');

    console.log($self.siblings())

    $count.text(1 + parseInt($count.text()));
    $self.removeClass('example-box--clickable').off('click');
    $heart.addClass('animate-heart');
  });

});
