$(document).ready(function() {
    function gridCreation(column_n, row_n){
        $(".column").remove();
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

    /* Variaveis */
    const board = document.getElementsByClassName("board");

    const button1 = document.getElementById("clear");
    const button2 = document.getElementById("erase");
    const button3 = document.getElementById("random");
    const button4 = document.getElementById("reset");
    const button5 = document.getElementById("black");

    const slider = document.getElementById("myRange");

    grid = document.getElementsByClassName("grid");

    let mode = 0;

    /* Tamano da tela */
    let column_n = slider.value;
    let row_n = slider.value;

    /* Cria a tela pela primeira vez */
    gridCreation(column_n, row_n);
    
    /* Limpa a tela */
    $(button1).click(function(){
        for(i = 0; i < 18; i++){
            $(grid).css("background-color", "white");
        }
    });

    /* Apaga um quadrado */
    $(button2).click(function(){
        mode = 1;
    });

    /* Cor aleatória */
    $(button3).click(function(){
        mode = 2;
    });

    /* Reseta toda a imagem */
    $(button4).click(function(){
        gridCreation(column_n, row_n);
    });

    /* Retorna a cor padrão */
    $(button5).click(function(){
        mode = 0;
    });

    /* Aplica a função de "mouseover" */
    $(document).on('mouseover','.grid', function(){
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

    /* Aplica a alteração do slider */
    $(".slider").change(function(){
        column_n = slider.value;
        row_n = slider.value;
    });
});