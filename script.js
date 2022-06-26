$(document).ready(function() {
    const board = document.getElementsByClassName("board");
    const button = document.getElementById("clear");

    for(i = 0; i < 18; i++){
        const grid = document.createElement("div");
        grid.className = "grid";
        $(grid).appendTo(board);
    }

    $(".grid").on('mouseover', function(){
        $(this).addClass("black_grid");
    });
});