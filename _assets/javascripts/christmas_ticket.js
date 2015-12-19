jQuery(document).ready(function($){
  $(window).load(function() {
    if ($("form#christmas_ticket").length > 0) {
      captcha_reload = function() { // reload captcha image
        $('#christmas_ticket_captcha').css('background-image', 'url(/api/captcha?'+Date.now()+')');
        $('#christmas_ticket_captcha').val("");
      };
    
      $('.re-captcha').click(captcha_reload);
    
      // $('#christmas_ticket').on("click", "button", "event", function(evt) {
      //   evt.preventDefault();
      // });

      $('#christmas_ticket').bind("keyup keypress", function(e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
          e.preventDefault();
          return false;
        }
      });
    
      $('#christmas_ticket').submit(function (e) {
        console.log($("form#christmas_ticket").serializeObject());

        $.ajax({
          url: '/api/christmas_ticket',
          type: 'POST',
          timeout: 2000,
          async: false,
          data: $("form#christmas_ticket").serializeObject(),
          dataType: 'json'
        }).done(function (data) {
			if(1){
				alert("Rendelés sikeresen elküldve!");
				$(".form-control").attr('disabled','disabled');
				$("#sendchristmasticketbutton").attr('disabled','disabled');
				$("#sendchristmasticketbutton").text("Rendelés elküldve")
				console.log(data);
			}else{
				
			}
        });

        e.preventDefault();
      });

      captcha_reload();
    }
  });
});
