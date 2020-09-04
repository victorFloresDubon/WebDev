$(document).ready(function(){
    
    var limite = 100;
    var actual = $(this).val().length;
    $("#contcaracteres").text(actual+"/"+limite);

    /* Contador de caracteres */
    $("#mensaje").on("keypress", function(){
        $("#mensaje").attr("maxlength", limite);
        // Obtengo la longitud actual
        var inicio = $(this).val().length;
        if(inicio<limite){
            inicio++
            $("#contcaracteres").text(inicio+"/"+limite);
        }
    });

    /* Decrementa el número de caracteres */
    $("#mensaje").on("keydown", function(e){
        var actual = $(this).val().length;
        if(e.key === 'Backspace'){
            $("#contcaracteres").text(actual+"/"+limite);
        }
    });

});