$(document).ready(function(){

    let down = document.querySelectorAll('.down');
let up = document.querySelectorAll('.up');
let show = document.querySelectorAll('.item h3')
let menu = document.querySelectorAll('.item p')

show.forEach(btn => {
    btn.addEventListener('click', function(e){
        $('item h3').removeClass('blue')
        $('.item p').addClass('hide')
        $('button.down').removeClass('hide')
        $('button.up').addClass('hide')
        $(this).addClass('blue')
        $(this).siblings('button.up').removeClass('hide')
        $(this).siblings('p').removeClass('hide')
        $(this).siblings('button.down').addClass('hide')
      
    })
})

})

// i will complet this task with jquery



