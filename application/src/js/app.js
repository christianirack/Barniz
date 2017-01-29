$(function() {



    ///////////////////////////////////SVG 
    if ($("#svg1").attr('id')) {
        myVivus = new Vivus('svg1', {
            duration: 200,
            reverseStack: false,
            animTimingFunction: Vivus.EASE

        }, vivusCall);
        myVivus.play(1);

        function vivusCall() {
            //myVivus = new Vivus('my-svg-id',{duration: 200});
            // myVivus.play(1);
        }
    }
    ////////////////////////////////////BANNER SLIDER HOME
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        autoplay: 2000,
        speed: 600
    });   
    
    ///////////////////////////////////FOUNDATIONO
    $(document).foundation();
})
