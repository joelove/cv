(function() {
  var toggle_classes = 'experience__toggle--more experience__toggle--less',
      $experience = $('.experience__more-info'),
      $experience_toggle = $('.experience__toggle');

  $experience.hide();
  $experience_toggle.css('display', 'inline-block');
  $experience_toggle.on('click', function() {
    $(this).toggleClass(toggle_classes);
    $experience.toggle();
  });
}());