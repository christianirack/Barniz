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
    ///////////////////////////////////FOUNDATIONO
    $(document).foundation();
})
