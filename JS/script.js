
$(document).ready(function(){
    $("#circle").click(function(){
        $(this).css('display', 'none'); 
        $("#recCircle").css('display', 'inline'); 
    });

    $(".shape").click(function(){
        if ($(this).is('circle')) { 
            $(this).css('display', 'none'); 
            $("#recCircle").css('display', 'inline');
        } else {
            $(this).attr('points', '100,50 1000,50  1000,710  100,710'); 
        }
        $(this).css('fill', 'black');     
    });
});

var canvas;
var ctx;
var w = 700;
var h = 700;

function setUpCanvas(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "1px solid black";
    }

    setUpCanvas();



// https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport