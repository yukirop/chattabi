function fadeInAnime(){

    $('.fadeInTrigger').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll>=elemPos - windowHeight){
            $(this).addClass('fadeIn');
        }else{
            $(this).removeClass('fadeIn');
        }
    });
}

$(window).scroll(function(){
    fadeInAnime();
});