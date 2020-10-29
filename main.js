$(document).ready(function(){

    var currentImage = 0;
    var galleryImages = [
        'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ];


    function loadImage (index){
        $('#gallery img').attr('src', galleryImages[index]);
    }
    loadImage(0);

    $('#gallery button').click(function(){
        var direction = $(this).data('direction');
        if(direction === 'next'){
            currentImage++;
        } else if(direction === 'prev'){
            currentImage--;
        } else if(direction === 'rand'){
            currentImage = Math.floor( Math.random()*galleryImages.length);
        }
        if(currentImage >= galleryImages.length){
            currentImage = 0;
        }
        if(currentImage < 0){
            currentImage = galleryImages.length-1;
        }
        loadImage(currentImage);
        $('#gallery img').show("slide", { direction: "left" }, 1000);
    });



});

// $(window).load(function(){

// });

// $(this) показва конкретно къде съм кликнала