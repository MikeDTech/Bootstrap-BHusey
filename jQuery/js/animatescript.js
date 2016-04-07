/* ----------------
 jQUERY ANIMATE
 ---------------- */
//always start and end with function tags
$(function() {

    //Click Left Button
    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            // what happens once animation is complete (add , and new function vs just closing it

        });
    });


    //Click Right Button
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // what happens once animation is complete (add , and new function vs just closing it

        });
    });


    //Click Top Button
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // what happens once animation is complete (add , and new function vs just closing it

        });
    });

    //Click Bottom Button
    $('#down').click(function() {
        $('.box').animate({
            bottom: "-=40px",
            opacity: "-=0.1"
        }, function() {
            // what happens once animation is complete (add , and new function vs just closing it

        });
    });

}); //Ending Opening Tags