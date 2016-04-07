/* -------------------
 jQUERY CAR RACR 2.0
 ------------------- */
//Video 10-12 https://www.youtube.com/watch?v=jhZ4SiIajPc&index=9&list=PLUoqTnNH-2Xwmr2GvOdZMJnrp6b51ndZE#t=277.925083
//always start and end with function tags
$(function() {

    // Click the Go Button
   $('#go').click(function () {

       // Get width of Cards

      var carWidth = $('#car1').width();

       // Get width of the racetrack

       var raceTrackWidth = $(window).width() - carWidth;

       //generate random number between 1-5000

       var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
       var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );

       // set flag var to false
       
       var isComplete = false;
       
       //set a flag var to FIRST by default;
       
       $('#car'
   });









}); //Ending Opening Tags