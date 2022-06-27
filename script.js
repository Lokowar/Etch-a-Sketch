$(document).ready(function() {
    function gridCreation(column_n, row_n){
        for(j = 0; j < column_n; j++){
            const column = document.createElement("div");
            column.className = "column";
            $(column).appendTo(board);
            for(i = 0; i < row_n; i++){
                const grid = document.createElement("div");
                grid.className = "grid";
                $(grid).appendTo(column);
            }
        }
        return;
    }

    const board = document.getElementsByClassName("board");

    const button1 = document.getElementById("clear");
    const button2 = document.getElementById("erase");
    const button3 = document.getElementById("random");

    const slider = document.getElementById("myRange");

    grid = document.getElementsByClassName("grid");

    let mode = 0;

    let column_n = slider.value;
    let row_n = slider.value;

    gridCreation(column_n, row_n);
    

    $(button1).click(function(){
        for(i = 0; i < 18; i++){
            $(grid).css("background-color", "white");
        }
    });

    $(button2).click(function(){
        if(mode === 0){
            mode = 1;
            return;
        }

        if(mode === 1){
            mode = 0;
            return;
        }

        if(mode === 2){
            mode = 1;
            return;
        }
    });

    $(button3).click(function(){
        mode = 2;
    });

    $(".grid").on('mouseover', function(){
        if(mode === 0){
            $(this).css("background-color", "black");
            console.log(slider.value);
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