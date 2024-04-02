$(document).ready(function(){
    
        $(".circle2").click(function(){
            $('#exitAnther').show();
            $(this).css('background-color', 'black');
            $('#anther_kiley').fadeIn();
            $(this).animate({
                'border-radius': '10px',
                left: '100px',
                height: '700px',
                width: '1300px',
                'z-index': '1'
            
        });
        $("#exitAnther").click(function(){
            $('#exitAnther').hide();
            $("#anther_kiley").hide();
            $(".circle2").css('background-color', 'transparent');
                // $(".circle2").hover('background-color', 'black');

                $(".circle2").animate({
                    'z-index': '0',
                    'position': 'absolute',
                    'border': '3px solid black',
                    // 'background-color': 'transparent',
                    'width':'600px',
                    'height': '600px',
                    'top': '200px',
                    'left': '700px',
                    'border-radius': '500px',
                    'transform': 'rotate(-4deg)'
                })

        })
        }); k

        
        $('#triangle-up').click(function(){
            $(this).css('background-color', 'black');
            $(this).animate({
                // 'background-color': 'black',
                'z-index': 1,
                top: '200px',
                left: '250px',
                width: '700px',
                height: '1000px',
                'border-top': '0px',
                'border-right': '0px',
                transform: 'rotate(0)'
          });
          });

    $(".shape").click(function(){
        if ($(this).is('circle')) { 
            $(this).css('display', 'none'); 
            $("#recCircle").css('display', 'inline');
        } else if ($(this).is('#rhombus')) {
            $(this).attr('points', '300,10 900,10 720,490 100,490');
            var animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            animateElement.setAttribute("attributeName", "points");
            animateElement.setAttribute("dur", "2s");
            animateElement.setAttribute("repeatCount", "1");
            animateElement.setAttribute("values", "300,10 900,10 720,490 100,490;" +
            "100,50 1000,50  1000,710  100,710;");
            $("#titles").hide();

            $(this).append(animateElement);
        } else if ($(this).is('#pointyGuy')) {
            $(this).attr('points', '1270,10 1750,600 1590,900 1250,750');
            var animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            animateElement.setAttribute("attributeName", "points");
            animateElement.setAttribute("dur", "2s");
            animateElement.setAttribute("repeatCount", "1");
            animateElement.setAttribute("values", "1270,10 1750,600 1590,900 1250,750;" +
                                                   "100,50 2000,50  2000,910  100,910;");
            $("#titles").hide();

                                                   
            $(this).append(animateElement);
        } else if ($(this).is('#triangle')) {
        $(this).attr('points', '120,300 850,800 850,800 230,910');
        var animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animateElement.setAttribute("attributeName", "points");
        animateElement.setAttribute("dur", "2s");
        animateElement.setAttribute("repeatCount", "1");
        animateElement.setAttribute("values", "120,300 850,800 850,800 230,910;" +
                                               "100,50 1000,50  1000,710  100,710;");
                                               $("#titles").hide();

        $(this).append(animateElement);
    }
        $(this).css('fill', 'black');     
    });
});
