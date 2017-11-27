$(document).ready(function() {

    var padOne = new Audio('../sounds/60 guitar loop 095 Fmin.wav');
    $('.pad-1').mousedown(function() {
        padOne.load();
        padOne.play();
    });

    var padTwo = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3');
    $('.pad-2').mousedown(function() {
        padTwo.load();
        padTwo.play();
    });

    var padThree = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3');
    $('.pad-3').mousedown(function() {
        padThree.load();
        padThree.play();
    });

    var padFour = new Audio('../sounds/18 guitar loop 088 Gmin.wav');
    $('.pad-4').mousedown(function() {
        padFour.load();
        padFour.play();
    });

    var padFive = new Audio('../sounds/Kick06 Drums1DOTcom.wav');
    $('.pad-5').mousedown(function() {
        padFive.load();
        padFive.play();
    });

    var padSix = new Audio('../sounds/JJ - C1.wav');
    $('.pad-6').mousedown(function() {
        padSix.load();
        padSix.play();
    });


    var padSeven = new Audio('../sounds/epiano-two-chords.wav');
    $('.pad-7').mousedown(function() {
        padSeven.load();
        padSeven.play();
    });

    var padEight = new Audio('../sounds/JJ - Kick1.wav');
    $('.pad-8').mousedown(function() {
        padEight.load();
        padEight.play();
    });

    var padNine = new Audio('../sounds/Snare22 Drums1DOTcom.wav');
    $('.pad-9').mousedown(function() {
        padNine.load();
        padNine.play();
    });


    $(window).keydown(function(e) {
        var code = e.keyCode;
        var kc = String.fromCharCode(e.keyCode);
        $("div[data-code='"+code+"']").addClass("active");
        console.log(code);

        switch(kc) {
            case "R":
                padOne.load();
                padOne.play();
                break;
            case "T":
                padTwo.load();
                padTwo.play();
                break;
            case "Y":
                padThree.load();
                padThree.play();
                break;
            case "F":
                padFour.load();
                padFour.play();
                break;
            case "G":
                padFive.load();
                padFive.play();
                break;
            case "H":
                padSix.load();
                padSix.play();
                break;
            case "V":
                padSeven.load();
                padSeven.play();
                break;
            case "B":
                padEight.load();
                padEight.play();
                break;
            case "N":
                padNine.load();
                padNine.play();
                break;
        }
    });

    $(window).keyup(function(e) {
        var code = e.keyCode;
        $("div[data-code='"+code+"']").removeClass("active");
    });

});