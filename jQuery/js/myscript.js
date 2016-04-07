// my-custom-jquery.js

$(function() {

   // $('#box').hide(); //will hide ID box after load
    //$('.thing').fadeOut(); // hides a class named .thing
   // $('h1').css("color", "blue");
   // $("button").click(function () {
    ///    $('#box').fadeOut(1000);
        
 //   });
    
    
    // $('h2,h3,h4').css('border','solid 1px red');
 //   $('h2,h3,h4').css('border','solid 1px red');
  //  $('div > p').css('border','solid 1px red');

    $('#box').click(function () {
        alert('you just clicked the box');
    });

    $("input").blur(function () {

        if( $(this).val() == "") {

            $(this).css('border','solid 1px red');
            $('#box').text('forgot to add text?');
        }

    });


    $("input").keydown(function () {

        if( $(this))

    })
});