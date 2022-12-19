$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        
        $(`<p id="${novaTarefa}">${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul'); 
        
        $("li").click(function() {
            $(this).toggleClass("riscado");
        });
        
        $('#nova-tarefa').val('');
    });
});