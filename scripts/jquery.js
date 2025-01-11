$(document).ready(function(){
    $("#closeup-text").hover(
        function(){
            $(this).animate({fontSize:"3em"}, 400);
            },
        function(){
            $(this).animate({fontSize:"1em"}, 400);
        }
    );
    $("#closeup-image").hover(
        function(){
            $(this).animate({width:"20em"}, 400);
        },
        function(){
            $(this).animate({width:"5em"}, 400);
        }
    );
    $("#slideBtn").click(function(){
        $("#slidedText").slideToggle(400);
        if($(this).text()==="Rozwiń tekst!"){
            $(this).text("Zwiń tekst!");
        } else {
            $(this).text("Rozwiń tekst!");
        }
    });
});




