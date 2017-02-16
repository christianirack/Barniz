var menuClick = 0;
$(function() {




  
/* --- controls --- */



    
    /*----------  SVG  ----------*/
    /*
    if ($("#svg1").attr('id')) {
        
        myVivus = new Vivus('svg1', {
            duration: 50

        }, vivusCall);
        myVivus.stop();
        function vivusCall() {
            //myVivus = new Vivus('my-svg-id',{duration: 200});
            // myVivus.play(1);
        }
        
    }
    */
     /*----------  SVG  ----------*/







    /*----------  Slider home con Swiper  ----------*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
         paginationClickable: true,
        //parallax: false,
        autoplay: 1500,
        slidesPerView: 1,
         loop: true
    });







    var controller = new ScrollMagic.Controller();

    /*----------  ScrollMagic FX  ----------*/
    var medida = $(window).width();
     if (!isMobile.any() && medida > 1020) {
        /*----------  Menu pegajoso para escritorio ----------*/     
        var scene2 = new ScrollMagic.Scene({offset: 0})
        .setPin("#menu-sticky")
        .addTo(controller);
        scene2.on("enter", function (event) {
        $("#sombra-emulada").css('opacity',1);
        });
        scene2.on("leave", function (event) {
        $("#sombra-emulada").css('opacity',0);
        });
    }

    /*----------  Membresias  ----------*/
    /*
    var tweenMem = TweenMax.fromTo(".membresias", 3, {top: 300, rotationX:90,  transformOrigin:"center top"}, {top: 0,rotationX:0});
    var sceneMem = new ScrollMagic.Scene({triggerElement: "#trigger_sec3",triggerHook:0.7, duration: 400})
                    .setTween(tweenMem)
                    //.setPin("#membresias-final")
                    //.addIndicators({name: "Membresias"}) // add indicators (requires plugin)
                    .addTo(controller);

    var tweenMemLiq = TweenMax.fromTo("#parallax2-img", 3, {opacity:0}, {opacity:1});
    var sceneMemLiq = new ScrollMagic.Scene({triggerElement: "#trigger_sec3",triggerHook:0.6, duration: 300})
                    .setTween(tweenMemLiq)
                    //.setPin("#membresias-final")
                    //.addIndicators({name: "Membresias"}) // add indicators (requires plugin)
                    .addTo(controller);
*/
/*
    var tweenMem = TweenMax.fromTo("#parallax2", 2, {x: "-20%"}, {x: "0%"});
    var sceneMem = new ScrollMagic.Scene({triggerElement: "#trigger_sec3",triggerHook:1, duration: 0})
                    .setTween(tweenMem)
                    //.setPin("#membresias-final")
                    //.addIndicators({name: "Menú paralalx"}) // add indicators (requires plugin)
                    .addTo(controller);

*/
    /*----------  Menu  ----------*/
    /*
     TweenMax.set("#parallax4",{x: "-60%"});
    var tweenMem = TweenMax.fromTo(".sec-menu", 0, {top: 300, rotationX:90,  transformOrigin:"center top"}, {top: 0,rotationX:0});
    var sceneMem = new ScrollMagic.Scene({triggerElement: "#trigger_sec4",triggerHook:0.7, duration: 400})
                    .setTween(tweenMem)
                    //.setPin("#membresias-final")
                    //.addIndicators({name: "Menú"}) // add indicators (requires plugin)
                    .addTo(controller);

    */
    /*
    var tweenMenu = TweenMax.fromTo("#parallax4", 2, {x: "-20%"}, {x: "0%"});
    var sceneMenu = new ScrollMagic.Scene({triggerElement: "#trigger_sec4",triggerHook:1, duration: 0})
                    .setTween(tweenMenu)
                    //.setPin("#membresias-final")
                    //.addIndicators({name: "Menú paralalx"}) // add indicators (requires plugin)
                    .addTo(controller);
    */

/*
var tweenMenu = TweenMax.fromTo("#parallax8", 2, {x: "10%"}, {x: "0%"});
    var sceneMenu = new ScrollMagic.Scene({triggerElement: "#trigger_sec8",triggerHook:1, duration: 0})
                    .setTween(tweenMenu)
                    //.setPin("#membresias-final")
                    //.addIndicators({name: "Menú paralalx"}) // add indicators (requires plugin)
                    .addTo(controller);
*/







   /*----------  Animación SVG ----------*/
/*
    var scene3 = new ScrollMagic.Scene({triggerHook:0.7, triggerElement: "#trigger1", duration: 350})
                //.addIndicators({name: "svg"}) // add indicators (requires plugin)
                //.setClassToggle("#sec1", "activo")
                .addTo(controller);

        scene3.on("leave", function (event) {
        //console.log("Scene: " +event.state);
        //console.log("scrollDirection: " +event.scrollDirection);
             if(event.state=='BEFORE'){
                //myVivus.play(-1);
               // subraya("sec1");
            }
        
        //$("#sombra-emulada").css('opacity',0);
        });

        scene3.on("enter", function (event) {
        //console.log("Scene entered.");
            //myVivus.play();
            //subraya("sec2");
        });

        if(isMobile.any()){
              scene3.triggerHook(0.6);
        }
        */
      



    /*----------  Stiky menu  ----------*/

    








    /*----------  Recargar si se escala  ----------*/
    if (!isMobile.any()) {
        $(window).resize(function(event) {
          location.reload();
        });
    } 




     
       //var myIcons = new SVGMorpheus('#svg1-icon');
      //  myIcons.to('svg1-menu', {duration: 3000});
        
       

        $('#menu-movil-click').on('click touch', function(event) {
            if(menuClick==0){
                menuClick=1;
               // myIcons.to('svg1-menu-cerrar', {duration: 300});
            }else{
                menuClick=0;
                 //myIcons.to('svg1-menu', {duration: 300});
            }
          
        });

    /*----------  Capas de animacion animadas  ----------*/
    inicializaAnimaciones()
     animacionesHome();







      /*----------  Parallax home ----------*/
    if(!isMobile.any()){

        /*----------  Si no es un móvil, si es escritorio ----------*/
        /*

        var controllerParallax = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        var es_1 =  new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween($(".imagenParallax"), {y: "80%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 1"})
                        //  .setClassToggle("#sec2", "activo")
                        .addTo(controllerParallax);

    


/*
        var controller_p2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "240%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax2"})
                        .setTween("#parallax2 > div", {y: "50%",ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 2"})
                         .setClassToggle("#sec3", "activo")
                        .addTo(controller_p2);



        var controller_p3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax3"})
                        .setTween("#parallax3 > div", {y: "70%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 3"})

                        .addTo(controller_p3);

        var controller_p4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax4"})
                        .setTween("#parallax4 > div", {y: "50%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 4"})
                         .setClassToggle("#sec4", "activo")
                        .addTo(controller_p4);


         var controller_p5 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax5"})
                        .setTween("#parallax5 > div", {y: "50%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 5"})
                        .addTo(controller_p5);

          var controller_p6 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "150%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax6"})
                        .setTween("#parallax6 > div", {y: "20%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 6"})
                        .addTo(controller_p6);

            var controller_p7 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax7"})
                        .setTween("#parallax7 > div", {y: "100%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 7"})
                        .addTo(controller_p7);
*/
                        /*

              var controller_p8 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "150%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax8"})
                        .setTween("#parallax8 > div", {y: "20%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 8"})
                        .addTo(controller_p8);
                        */

    }else{
        /*

         var controller_p1 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 1"})
                        .addTo(controller_p1);

        var controller_p2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax2"})
                        .setTween("#parallax2 > div", {y: "50%",ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 2"})
                        .addTo(controller_p2);



        var controller_p3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax3"})
                        .setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 3"})
                        .addTo(controller_p3);


         var controller_p4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax4"})
                        .setTween("#parallax4 > div", {y: "50%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 4"})
                        .addTo(controller_p4);


         var controller_p5 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax5"})
                        .setTween("#parallax5 > div", {y: "50%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 5"})
                        .addTo(controller_p5);

          var controller_p6 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax6"})
                        .setTween("#parallax6 > div", {y: "50%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 6"})
                        .addTo(controller_p6);

            var controller_p7 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax7"})
                        .setTween("#parallax7 > div", {y: "90%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 7"})
                        .addTo(controller_p7);
/*
                        /*

         var controller_p8 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "250%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax8"})
                        .setTween("#parallax8 > div", {y: "100%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        //.addIndicators({name: "home parallax 8"})
                        .addTo(controller_p8);
                        */

    }
    /*----------  Picker  ----------*/
        if(!isMobile.any()){
            var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            $('#dp1').fdatepicker({
                //'02-12-1989' format: 'mm-dd-yyyy',
                initialDate: utc,
                format: 'yyyy-mm-dd',
                disableDblClickSelection: true,
                leftArrow:'<<',
                rightArrow:'>>',
                closeIcon:'X',
                closeButton: true
            });

        }





    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#bloque-home"})
                    .setClassToggle("#sec1", "activo") // add class toggle
                   // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#bloque-nosotros"})
                    .setClassToggle("#sec2", "activo") // add class toggle
                   // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#bloque-membresias"})
                    .setClassToggle("#sec3", "activo") // add class toggle
                   // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sec-menu"})
                    .setClassToggle("#sec4", "activo") // add class toggle
                   // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
        new ScrollMagic.Scene({triggerElement: "#sec-servicios"})
                    .setClassToggle("#sec5", "activo") // add class toggle
                   // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
        new ScrollMagic.Scene({triggerElement: "#sec-citas"})
                    .setClassToggle("#sec6", "activo") // add class toggle
                   // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);



  
    /*----------  Foundation  ----------*/
    $('#menu-movil-click').on("click touch", function(event){
        if($('#svg1-menu').is(':visible')){
            $('.menu-movil-desplegado').show();
            $('#svg1-menu-cerrar').show();
            $('#svg1-menu').hide();  
        }else{
            $('.menu-movil-desplegado').hide();
            $('#svg1-menu-cerrar').hide();
            $('#svg1-menu').show();
        }
        
    })
    $('.opcion').on("click touch", function(event){
        var ir = $(this).attr('ir');
      // animacionesHome();
        //alert(ir);
       //alert('#'+ir);
        $('html, body, #vbody').animate({
                    scrollTop: $('#'+ir).offset().top-200
        }, timeScroll);

        $('.menu-movil-desplegado').hide();
            $('#svg1-menu-cerrar').hide();
            $('#svg1-menu').show();
            event.preventDefault();
        
    })




    $(document).foundation();

    var timeScroll = 800;
    $('.ir').on('click touch', function(event) {
        var ir = $(this).attr('ir');
        //alert(ir);
        $('html, body').animate({
                    scrollTop: $('#'+ir).offset().top-200
        }, timeScroll);
        event.preventDefault();
    });

})





/*----------  Funciones globales  ----------*/



function updateBox (e) {
    if (e.type == "enter") {
       alert(1);
    } 
}
function inicializaAnimaciones(){
     $('[target]').prepend("<div class='mascara-cont'><div class='mascara1 mascara' /><div class='mascara2 mascara' /><div class='mascara3 mascara' /></div>");
}
function animacionesHome(){
    var num = 0;
    $('.mascara-cont:visible').each(function(){
          TweenLite.fromTo($(this), 2.5, { x: '0%' }, { x: '101%', delay:num, ease: Expo.easeInOut});
           num += .09;
    })
   
}





