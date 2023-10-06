$(function () {
  render_size();
  var url = window.location.href;
  $('.menu-item  a[href="' + url + '"]')
    .parent()
    .addClass("active");
});

$(window).resize(function () {
  render_size();
});

function render_size() {
  // prod

  var h_6840 = $(".h_6840 img").width();
  $(".h_6840 img").height(0.684 * parseInt(h_6840));

  var h_584 = $(".h_584 img").width();
  $(".h_584 img").height(0.584 * parseInt(h_584));

  // var h_7461 = $('.h_7461 img').width();
  // $('.h_7461 img').height(0.7461 * parseInt(h_7461));

  // var h_8041 = $('.h_8041 img').width();
  // $('.h_8041 img').height(0.8041 * parseInt(h_8041));

  // var h_5135 = $('.h_5135 img').width();
  // $('.h_5135 img').height(0.5135 * parseInt(h_5135));

  // var h_6871 = $('.h_6871 img').width();
  // $('.h_6871 img').height(0.6871 * parseInt(h_6871));
}
