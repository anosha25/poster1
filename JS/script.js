var rhombusClicked = false; 
var circleClicked = false;
var triClicked = false;  
var diClicked = false;

function setupHoverR($element) {
        $element.hover(function () {
            $(this).css("background-color", "black");
        }, function () {
            if (!rhombusClicked) {
                $(this).css("background-color", "transparent");
            }
        });

        $element.click(function() {
            $(this).css('background-color', 'black');
            rhombusClicked = true; 
        });

        $("#exitSeb, #circle, #tri, #diamond").click(function() {
            $element.css('background-color', 'transparent');
            rhombusClicked = false;
        });
    }

    function setupHoverC($element) {
            $element.hover(function () {
                $(this).css("background-color", "black");
            }, function () {
                if (!circleClicked) {
                    $(this).css("background-color", "transparent");
                }
            });
    
            $element.click(function() {
                $(this).css('background-color', 'black');
                circleClicked = true; 
            });
    
            $("#exitAnther, #rhombusNew, #tri, #diamond").click(function() {
                $element.css('background-color', 'transparent');
                circleClicked = false;
            });
        }

        function setupHoverT($element) {
                $element.hover(function () {
                    $(this).css("background-color", "black");
                }, function () {
                    if (!triClicked) {
                        $(this).css("background-color", "transparent");
                    }
                });
        
                $element.click(function() {
                    $(this).css('background-color', 'black');
                    triClicked = true; 
                });
        
                $("#exitERoon, #circle,  #rhombusNew, #diamond").click(function() {
                    $element.css('background-color', 'transparent');
                    triClicked = false;
                });
            }

            function setupHoverD($element) {
                $element.hover(function () {
                    $(this).css("background-color", "black");
                }, function () {
                    if (!diClicked) {
                        $(this).css("background-color", "transparent");
                    }
                });
        
                $element.click(function() {
                    $(this).css('background-color', 'black');
                    diClicked = true; 
                });
        
                $("#exitEmi, #circle, #tri, #rhombusNew").click(function() {
                    $element.css('background-color', 'transparent');
                    diClicked = false;
                });
            }

            function myFunction(x) {
                if (x.matches) { // If media query matches
                    $(document).ready(function() {
                        setupHoverR($("#rhombusNew"));
                        $("#rhombusNew").click(function() {
                            $(this).css('background-color', 'black');
                            $(this).css('transform', 'skew(0rad)');
                            $(this).animate({
                                'height': '300px',
                                'width' : '400px'
                            }, function(){
                                $('#sebastian_aubin').fadeIn(1000);
                            });
                    });
                        $("#exitSeb, #circle, #tri, #diamond").click(function(){
                            $('#sebastian_aubin').hide();
                            $("#rhombusNew").css('background-color', 'transparent');
                            $("#rhombusNew").css('transform', 'skew(-.4rad)');
                            $("#rhombusNew").animate({
                                'height': '200px',
                                'width' : '300px'
                            });
                        });
                    
                    
                    
                    
                    
                    setupHoverT($("#tri"));
                    
                        $("#tri").click(function() {
                            $(".tri-line").hide();
                            $(this).css({
                                'background-color': 'black',
                                'width':'400', 
                                'transform': 'rotate(0deg)'
                            }).animate({
                                
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                            }, function() {
                                $("#e_roon_kang").fadeIn();
                            });
                        });
                        $("#exitERoon, #circle,  #rhombusNew, #diamond").click(function() {
                            $(".tri-line").fadeIn();
                             $("#e_roon_kang").hide();
                            $("#tri").removeClass('clicked');
                            $('#tri').css('background', 'transparent')
                            $("#tri").css('width', '300');
                            $("#tri").css('transform', 'rotate(-10deg)');

                           });
                        
                        
                    setupHoverC($("#circle"));
                    
                    $("#circle").click(function() {
                        $(this).animate({
                            'border-radius': '0px',
                            'width': '400px',
                        }, function(){
                            $('#anther_kiley').fadeIn();
                        });
                    });
                    $("#exitAnther, #rhombusNew, #tri, #diamond").click(function() {
                        $("#circle").css('background-color', 'transparent');
                        $("#anther_kiley").hide();
                        $("#circle").animate({
                            'border-radius': '500px',
                            'width': '300px',
                        });
                    });
                 
                       
                       setupHoverD($("#diamond"));
                    
                       $("#diamond").click(function() {
                        $(this).css('transform', 'skewY(0deg) scale(90%)');

                        $(this).animate({
                            'transform' : 'rotate(20deg)',
                            'width' : '400px'

                        }, function(){
                            $('#takahashi_kuan').fadeIn('fast');
                        });
                    });
                    
                    $("#exitEmi, #circle, #tri, #rhombusNew").click(function(){
                        $('#takahashi_kuan').hide();
                        $("#diamond").css('background-color', 'transparent');
                        $("#diamond").css('width', '300px');
                        $("#diamond").css('transform', 'scale(60%) skewY(40deg)');
                    });
                    
                    
                    
                    });
                    
                } else {
                    $(document).ready(function() {
                        setupHoverR($("#rhombusNew"));
                        $("#rhombusNew").click(function() {
                            $(this).css('background-color', 'black');
                            $(this).css('transform', 'skew(0rad)');
                            $(this).animate({
                                'height': '610px',
                                'width' : '750px'
                            }, function(){
                                $('#sebastian_aubin').fadeIn(1000);
                            });
                    });
                        $("#exitSeb, #circle, #tri, #diamond").click(function(){
                            $('#sebastian_aubin').hide();
                            $("#rhombusNew").css('background-color', 'transparent');
                            $("#rhombusNew").css('transform', 'skew(-.4rad)');
                            $("#rhombusNew").animate({
                                'height': '500px',
                                'width' : '600px'
                            });
                        });
                    
                    
                    
                    
                    
                    setupHoverT($("#tri"));
                    
                        $("#tri").click(function() {
                            $(".tri-line").hide();
                            $(this).css({
                                'background-color': 'black',
                            }).animate({
                                'width':'800', 
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                            }, function() {
                                $("#e_roon_kang").fadeIn();
                            });
                        });
                        
                    setupHoverC($("#circle"));
                    
                    $("#circle").click(function() {
                        $(this).animate({
                            'border-radius': '0px',
                            'width': '800px',
                            'z-index': '1'
                        }, function(){
                            $('#anther_kiley').fadeIn();
                        });
                    });
                    
                    
                    $("#exitAnther, #rhombusNew, #tri, #diamond").click(function() {
                        $("#circle").css('background-color', 'transparent');
                        $("#anther_kiley").hide();
                        $("#circle").animate({
                            'border-radius': '500px',
                            'width': '600px',
                        });
                    });
                    $("#exitERoon, #circle,  #rhombusNew, #diamond").click(function() {
                        $(".tri-line").fadeIn();
                         $("#e_roon_kang").hide();
                        $("#tri").removeClass('clicked');
                        $('#tri').css('background', 'transparent')
                        $("#tri").css('width', '700');
                       });
                    
                       
                       setupHoverD($("#diamond"));
                    
                       $("#diamond").click(function() {
                        $(this).css('transform', 'skewY(0deg) scale(90%)');
                        $(this).animate({
                            'transform' : 'rotate(20deg)'
                        }, function(){
                            $('#takahashi_kuan').fadeIn('fast');
                        });
                    });
                    
                    $("#exitEmi, #circle, #tri, #rhombusNew").click(function(){
                        $('#takahashi_kuan').hide();
                        $("#diamond").css('background-color', 'transparent');
                        $("#diamond").css('transform', 'scale(60%) skewY(40deg)');
                    });
                    
                    
                    
                    });
                                    }
                
              }
              
              // Create a MediaQueryList object
              var x = window.matchMedia("(max-width: 800px)")
              
              // Call listener function at run time


document.addEventListener('mousemove', function(e) {
    const widthPercentage = e.clientX / window.innerWidth;
    const maxWidthVariation = 50; 
    const minWidthVariation = 140; 
    const calculatedWidth = minWidthVariation + (maxWidthVariation - minWidthVariation) * widthPercentage;

    const titles = document.querySelectorAll('.titles');
    titles.forEach(title => {
        title.style.fontVariationSettings = `'wdth' ${calculatedWidth}`;
    });
});

myFunction(x);
              
// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});