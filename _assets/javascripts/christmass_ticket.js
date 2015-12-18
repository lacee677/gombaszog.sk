if ($("div#christmass_ticket").length > 0) {
  captcha_reload = function() { // reload captcha image
    $('#christmass_ticket_captcha').css('background-image', 'url(/api/captcha?'+Date.now()+')');
    $('#christmass_ticket_captcha').val("");
  };

  $('.re-captcha').click(captcha_reload);

  $('#christmass_ticket').bind("keyup keypress", function(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
      e.preventDefault();
      return false;
    }
  });

  $('christmass_ticket').submit(function (e) {
    console.log($("form#christmass_ticket").serializeObject());
  });

}
