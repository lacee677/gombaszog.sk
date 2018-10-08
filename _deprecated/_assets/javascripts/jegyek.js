if ($(".ticket-form").length > 0) {
  var freeCities = [];
  captcha_reload = function() { // reload captcha image
    $('#ticket_captcha').css('background-image', 'url(/api/captcha?'+Date.now()+')');
    $('#ticket_captcha').val("");
  }
  getUrlVars = function() { // get url variables
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }
  loadVars = function() {
    $.getJSON("/api/ticket/available").done(function (data) {
      $.each(data.bus, function(k,v) {
        $("#ticket_bus").append(
          $('<option value="'+v.id+'" data-price="'+v.price+'">'+v.name+' (még '+v.free+' hely) +'+parseInt(v.price)+'&euro;</option>')
        );
      });
      $.each(data.housing, function(k,v) {
        $("#ticket_housing").append(
          $('<option value="'+v.id+'" data-price="'+v.price+'">'+v.name+(v.capacity > 0 ? ' ('+v.capacity+' ágyas)' : '')+' +'+parseInt(v.price)+'&euro;</option>')
        );
      });
      $.each(data.food, function(k,v) {
        $("#ticket_food").append(
          $('<option value="'+v.id+'" data-price="'+v.price+'">'+v.name+' +'+parseInt(v.price)+'&euro;</option>')
        );
      });
      $('#price').data('price', data.ticket).html(data.ticket);
    });
  }
  mark = function (e) {
    captcha_reload();
    $.each(e, function(k,v) {
      $("#ticket_"+k).addClass("has-error").change(function() {
        $(this).removeClass("has-error");
      });
    });
    if (e.email == "used") {
      alert("A megadott e-mail címet már használták egy jegyelővételhez! Minden megvásárolt jegyhez egyedi e-mail címet kell megadni!");
    } else if (e.email == "retry") {
      $("#ticket_email").removeClass("has-error");
      alert("Valamikor az elmúlt három órában már próbálkoztál egy jegyelővétellel, de nem jártál sikerrel. Az egyes újrapróbálkozások között minimum három órának kell eltelnie, tehát arra kérünk várd ki ezt az időt és később próbálkozz újra!");
    } else if (e.price) {
      alert("A fizetendő összeg nem lehet 0€!");
    } else alert("Hoppá! Az űrlapot hibásan töltötted ki, a javítandó mezőket megjelöltük pirossal!");
  }

  var addLeadingZeros = function(toWhat) {
    if (typeof toWhat !== "string" || toWhat.length > 1) {
      return toWhat;
    }
    return ("0" + toWhat);
  }

  var handleStupidBirtDateFormats = function() {
    var actDateTxt = $("#ticket_birth").val();
    if (!actDateTxt) return; // not yet filled
    if (/^(19[0-9]{2}|20[01][0-9])-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(actDateTxt)) return; // actually, good
    if (/^[^0-9]*(19[0-9]{2}|20[01][0-9])[^0-9]+(0?[1-9]|1[012])[^0-9]+(0?[1-9]|[12][0-9]|3[01])[^0-9]*$/.test(actDateTxt)) {
      // actually, almost good, correct it
      actDateTxt = actDateTxt.replace(/^.*(19[0-9]{2}|20[01][0-9])[^0-9]+(0?[1-9]|1[012])[^0-9]+(0?[1-9]|[12][0-9]|3[01])[^0-9]*$/, function(match, p1, p2, p3) {
        return addLeadingZeros(p1) + "-" + addLeadingZeros(p2) + "-" + addLeadingZeros(p3);
      });
      $("#ticket_birth").val(actDateTxt);
      calculateTicketPrice();
      return;
    }
    alert("A megadott dátum nem megfelelő formátumú. Kérlek, az alábbi módon add meg: ÉÉÉÉ-HH-NN, például 1991-04-21")
    return;
  }

  var calculateTicketPrice = function() {
    price = parseFloat($('#price').data('price'));
    var originalPrice = price;
    tmp = $("#ticket_housing option:selected").data('price');
    if (tmp) price += parseFloat(tmp);
    tmp = $("#ticket_food option:selected").data('price');
    if (tmp) price += parseFloat(tmp);
    tmp = $("#ticket_bus option:selected").data('price');
    if (tmp) price += parseFloat(tmp);
    tmp = $("#ticket_beer").data('price') * Math.abs($("#ticket_beer").val());
    if (tmp) price += parseFloat(tmp);
    // we keep this line with empty array to have it in the future
    // tmp = ($.inArray($("#ticket_zip").val(), freeCities) > -1 ? -originalPrice : 0);
    // free if the birth date is before 1990
    // tmp = (Date.parse($("#ticket_birth").val()) < 631148400000 ? -originalPrice : 0);
    if (tmp) price += parseFloat(tmp);
    $('#price').html(price);
  }

  window.fbAsyncInit = function() {
    // initialize facebook
    FB.init({
      appId: '267323596708516',
      xfbml: true,
      status: true,
      version: 'v2.9'
    });
    // scroller
    $('.btn-pricing').click(function() {
      $('body,html').animate({
        scrollTop: $('.roll-here').offset().top
      }, "slow");
    });
    // calculate price
    $('.influence').on("change", calculateTicketPrice);
    $('#ticket_birth').on("change", handleStupidBirtDateFormats);
    // autoload captcha
    $('.re-captcha').click(captcha_reload);
    // facebook
    $('.ticket-fb').click(function(e) {
      e.preventDefault();
      $('form')[0].reset();
      $('#ticket_voucher').val(getUrlVars().voucher);
      captcha_reload();
      FB.login(function(response) { // log in
        if (response.authResponse) { // logged in
          FB.api('/me', {
              fields: ['last_name', 'first_name', 'email', 'location', 'birthday']
            }, function(profile) { // get user data
            $('#ticket_fb_token').val(response.authResponse['accessToken']);
            $('#ticket_fbid').val(profile.id);
            $('#ticket_email').val(profile.email);
            $('#ticket_first_name').val(profile.first_name);
            $('#ticket_last_name').val(profile.last_name);
            //$('#ticket_city').val((profile.hometown ? profile.hometown.name : null));
            $('#ticket_where').val((profile.location ? profile.location.name : null));
            if (profile.birthday) {
              var date = profile.birthday.split("/").reverse(); // preparse date
              $('#ticket_birth').val([date[0],date[2],date[1]].join("-"));
            }
            // show the form
            loadVars();
            alert("Betöltöttük a Facebook adataidat, de kérünk még ellenőrizd, hogy megfelelnek-e a a valóságnak!");
            setTimeout(calculateTicketPrice, 1000);
            $(".ticket-hidden").slideToggle("slow");
          });
        }
      }, {scope: 'publish_actions,user_likes,email,user_birthday,user_hometown,user_location,public_profile'});
    });
    //manual
    $('.ticket-manual').click(function (e) {
      e.preventDefault();
      $('form')[0].reset();
      $('#ticket_voucher').val(getUrlVars().voucher);
      captcha_reload();
      loadVars();
      $(".ticket-hidden").slideToggle("slow");
    });
    // submit
    $('form#ticket').submit(function (e) {
      if (!$("#ticket_confirm_aszf").prop("checked")) {
        e.preventDefault();
        return alert("A továbblépéshez kérünk, fogadd el az általános szerződési feltételeinket és adatvédelmi irányelveinket.");
      }
      $('#buybutton').html("&nbsp;<i class=\"fa fa-spinner fa-spin\"></i>&nbsp;");
      ret = false;
      $.ajax({
        url: '/api/ticket',
        type: 'POST',
        timeout: 2000,
        async: false,
        data: $("form#ticket").serializeObject(),
        dataType: 'json'
      }).done(function (data) {
        if (data.ok) {
          $("#ticket_first_name").attr("name", "first_name");
          $("#ticket_last_name").attr("name", "last_name");
          $("#ticket_email").attr("name", "email");
          $("#ticket_address").attr("name", "address1");
          $("#ticket_city").attr("name", "city");
          $("#ticket_zip").attr("name", "zip");
          $("#ticket_country").attr("name", "country");
          $("#ticket_phone_a").val(data.phone_a)
          $("#ticket_phone").attr("name", "night_phone_b").val(data.phone_b);
          $("#ticket_custom").val(data.custom);
          $("#ticket_amount").val(data.amount);
          $("#ticket_name").val(data.name);
          $("form#ticket").attr("action", data.action);
          ret = data.ok;
        } else {
          mark(data);
          $('#buybutton').html("&nbsp;Tovább&nbsp;");
          e.preventDefault();
        }
      });
      return ret;
    });

    $('#ticket').bind("keyup keypress", function(e) {
      var code = e.keyCode || e.which;
      if (code == 13) {
        e.preventDefault();
        return false;
      }
    });
  };

  $('#ticket_city').on('keyup',function(){
    if(this.value.length >= 3 && $('#ticket_country').val() == 'SK'){
      try{
        $.getJSON("https://velemjaro.sk/api/settlementsearchpublic/"+this.value).done(function (data) {
          if(data.success == true){
            $('#settlement_fill').html('');
            $.each(data.result, function(key,value) {
              if(key >= 5){
                return 'five';
              }
              else{
                var setlRow = document.createElement('div');
                setlRow.className = 'setlRow';
                setlRow.setAttribute('id','setlRow_'+key);
                setlRow.setAttribute('onclick','fillSettlement("setlRow_'+key+'")');
                var setlDivOne = document.createElement('div');
                var setlDivTwo = document.createElement('div');
                var setlNameHU = document.createElement('strong');
                  setlNameHU.className = 'setlNameHU';
                  setlNameHU.innerHTML = value.magyarnev;
                var setlNameSK = document.createElement('strong');
                  setlNameSK.className = 'setlNameSK';
                  setlNameSK.innerHTML = ', '+value.szlovaknev;
                var setlPSC = document.createElement('small');
                  setlPSC.className = 'setlPSC';
                  setlPSC.innerHTML = value.iranyitoszam;
                var setlJaras = document.createElement('small');
                  setlJaras.innerHTML = ' - '+value.jarasmnevi;

                setlDivOne.appendChild(setlNameHU);
                setlDivOne.appendChild(setlNameSK);
                setlRow.appendChild(setlDivOne);

                setlDivTwo.appendChild(setlPSC);
                setlDivTwo.appendChild(setlJaras);
                setlRow.appendChild(setlDivTwo);

                document.getElementById('settlement_fill').appendChild(setlRow);
              }
            });
            $('#settlement_fill').slideDown(500);
          }
          else{
            $('#settlement_fill').html('');
            $('#settlement_fill').slideUp(500);
          }
        });
      }
      catch(err){
        console.log('test');
        $('#settlement_fill').html('');
        $('#settlement_fill').slideUp(500);
      }
    }
    else{
      $('#settlement_fill').html('');
      $('#settlement_fill').slideUp(500);
    }
  });

  $(document).click(function(){
    $('#settlement_fill').hide();
  });

  $('#ticket_country').on('change', function(){
    $('#settlement_fill').html('');
    $('#settlement_fill').hide();
  });

  function fillSettlement(value){
    $('#ticket_city').val( $('#'+value+' .setlNameHU').html() );
    $('#ticket_zip').val( $('#'+value+' .setlPSC').html() );
    $('#settlement_fill').hide();
    $('#settlement_fill').html('');
  }

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  } (document, 'script', 'facebook-jssdk'));
}

getUrlVars = function() { // get url variables
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

jQuery(document).ready(function($){
  $(window).load(function() {
    if ($('#pay-form').length > 0) {
      $.getJSON("https://felho.gombaszog.sk/api/ticket/paynow/"+getParameterByName("q")).done(function (data) {
        var msg = "";
        if(data.status == "waiting") {
          msg = "Kedves "+data.last_name+" "+data.first_name+", <br />a megrendelt jegy ára: "+data.amount+"&euro;. A fizetéshez kattints a PayPal-os képre:";
          $.each( data, function( key, val ) {
              $("#"+key).val(val);
          });
          $("#pay-form").removeClass("hidden-form");
        } else if(data.status == "dropped") {
          msg = "Kedves "+data.last_name+" "+data.first_name+", <br />a fizetés nem kezdeményezhető, mert lejárt a rendelés utáni három órás időkeret. <a href=\"/jegyek/\">Kattints ide</a> új vásárlás indításához.";
        } else if(data.status == "completed") {
          msg = "Kedves "+data.last_name+" "+data.first_name+", <br />ezt a jegyet már kifizetted. Ha nem találod a jegyed a postaládádban, kérünk, nézd meg a SPAM mappában, ha ott sem találod, írj a jegyek@gombaszog.sk címre!";
        } else {
          msg = "A jegy nem található. Kérlek, ellenőrizd a linket, vagy lépj kapcsolatba velünk a jegyek@gombaszog.sk címen.";
        }
        $('#msg').html(msg);
      });
    }
  });
});
