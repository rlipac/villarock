$(document).foundation()


$('[data-toggle-dia]').click(function (ev){
    const panel= $(this).data('toggleDia')
    $('#lineup-tabs').foundation('selectTab', panel) /* cambia los paneles sabado y domingo y viernes*/
})

const $offCanvas = $('#offCanvas')
$offCanvas.find('li').click(function (ev){
$offCanvas.foundation('close') 
    
})
