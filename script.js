$(document).ready(function() {
    const board = document.getElementsByClassName("board");
    const button1 = document.getElementById("clear");
    const button2 = document.getElementById("erase");
    const button3 = document.getElementById("random");

    grid = document.getElementsByClassName("grid");

    let mode = 0;

    for(i = 0; i < 18; i++){
        const grid = document.createElement("div");
        grid.className = "grid";
        $(grid).appendTo(board);
    }

    $(button1).click(function(){
        for(i = 0; i < 18; i++){
            $(grid).css("background-color", "white");
        }
    });

    $(button2).click(function(){
        console.log("yay");
        if(mode === 0){
            mode = 1;
            console.log("mode = 1");
            return;
        }

        if(mode === 1){
            mode = 0;
            console.log("mode = 0");
            return;
        }

        if(mode === 2){
            mode = 1;
            return;
        }
    });

    $(button3).click(function(){
        console.log("yay");
        mode = 2;
    });

    $(".grid").on('mouseover', function(){
        if(mode === 0){
            $(this).css("background-color", "black");
        }
        if(mode === 1){
            $(this).css("background-color", "white");
        }
        if(mode === 2){
            rand = Math.floor(Math.random() * 16777215);
            $(this).css("background-color", "#"+rand);
        }
    });
});