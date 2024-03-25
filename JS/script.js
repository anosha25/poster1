
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
