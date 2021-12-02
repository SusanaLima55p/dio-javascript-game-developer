$('html, body').animate({scrollTop: 0})

$('.carousel-destaque').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let link = $('.link')

link.on('click', function(){
let seletor = $(this).attr('href')
let posicao = $(seletor).offset().top
$('html, body').animate({scrollTop: posicao-60},1500)
})



