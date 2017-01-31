var menuClick = 0;
$(function() {




    
    /*----------  SVG  ----------*/
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
     /*----------  SVG  ----------*/







    /*----------  Slider home con Swiper  ----------*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        autoplay: 2000,
        loop: true,
        speed: 600
    });







    var controller = new ScrollMagic.Controller();

    /*----------  ScrollMagic FX  ----------*/
     if (!isMobile.any()) {
        
        /*----------  Menu pegajoso para escritorio ----------*/     
        var scene = new ScrollMagic.Scene( )
                    .setPin("#menu-sticky")
                    .addIndicators({name: "Menú"}) // add indicators (requires plugin)
                    .addTo(controller);
       /*----------  Sombra del menu  ----------*/
        var scene2 = new ScrollMagic.Scene({offset: 100})
                    .addIndicators({name: "debugger"}) // add indicators (requires plugin)
                    .addTo(controller);
        scene2.on("enter", function (event) {
            //console.log("Scene entered.");
            $("#sombra-emulada").css('opacity',1);
        });
        scene2.on("leave", function (event) {
            //console.log("Scene left." +event.state);
           $("#sombra-emulada").css('opacity',0);
        });
    }

    /*----------  Membresias  ----------*/
    /*
    var tweenMem = TweenMax.fromTo(".membresias", 3, {top: 300, rotationX:90,  transformOrigin:"center top"}, {top: 0,rotationX:0});
    var sceneMem = new ScrollMagic.Scene({triggerElement: "#trigger_sec3",triggerHook:0.7, duration: 400})
                    .setTween(tweenMem)
                    //.setPin("#membresias-final")
                    .addIndicators({name: "Membresias"}) // add indicators (requires plugin)
                    .addTo(controller);

    var tweenMemLiq = TweenMax.fromTo("#parallax2-img", 3, {opacity:0}, {opacity:1});
    var sceneMemLiq = new ScrollMagic.Scene({triggerElement: "#trigger_sec3",triggerHook:0.6, duration: 300})
                    .setTween(tweenMemLiq)
                    //.setPin("#membresias-final")
                    .addIndicators({name: "Membresias"}) // add indicators (requires plugin)
                    .addTo(controller);
*/
    var tweenMem = TweenMax.fromTo("#parallax2", 2, {x: "-20%"}, {x: "0%"});
    var sceneMem = new ScrollMagic.Scene({triggerElement: "#trigger_sec3",triggerHook:1, duration: 0})
                    .setTween(tweenMem)
                    //.setPin("#membresias-final")
                    .addIndicators({name: "Menú paralalx"}) // add indicators (requires plugin)
                    .addTo(controller);


    /*----------  Menu  ----------*/
    /*
     TweenMax.set("#parallax4",{x: "-60%"});
    var tweenMem = TweenMax.fromTo(".sec-menu", 0, {top: 300, rotationX:90,  transformOrigin:"center top"}, {top: 0,rotationX:0});
    var sceneMem = new ScrollMagic.Scene({triggerElement: "#trigger_sec4",triggerHook:0.7, duration: 400})
                    .setTween(tweenMem)
                    //.setPin("#membresias-final")
                    .addIndicators({name: "Menú"}) // add indicators (requires plugin)
                    .addTo(controller);

    */
    var tweenMenu = TweenMax.fromTo("#parallax4", 2, {x: "-20%"}, {x: "0%"});
    var sceneMenu = new ScrollMagic.Scene({triggerElement: "#trigger_sec4",triggerHook:1, duration: 0})
                    .setTween(tweenMenu)
                    //.setPin("#membresias-final")
                    .addIndicators({name: "Menú paralalx"}) // add indicators (requires plugin)
                    .addTo(controller);










   /*----------  Animación SVG ----------*/

    var scene3 = new ScrollMagic.Scene({triggerHook:0.7, triggerElement: "#trigger1", duration: 350})
                .addIndicators({name: "svg"}) // add indicators (requires plugin)
                .addTo(controller);

        scene3.on("leave", function (event) {
        //console.log("Scene: " +event.state);
        //console.log("scrollDirection: " +event.scrollDirection);
         if(event.state=='BEFORE'){
            myVivus.play(-1);
        }
        
        //$("#sombra-emulada").css('opacity',0);
        });

        scene3.on("enter", function (event) {
        //console.log("Scene entered.");
            myVivus.play();
        });

        if(isMobile.any()){
              scene3.triggerHook(0.6);
        }
      



    /*----------  Stiky menu  ----------*/
    new ScrollMagic.Scene({triggerElement: "#trigger_sec1", duration: 450})
                    .setClassToggle("#sec1", "active") // add class toggle
                    .addIndicators({name: "menu-sec1"}) // add indicators (requires plugin)
                    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#trigger_sec2", duration: 350})
                    .setClassToggle("#sec2", "active") // add class toggle
                    .addIndicators({name: "menu-sec2"}) // add indicators (requires plugin)
                    .addTo(controller);
    












    /*----------  Recargar si se escala  ----------*/
    if (!isMobile.any()) {
        $(window).resize(function(event) {
          location.reload();
        });
    } 




     
       var myIcons = new SVGMorpheus('#svg1-icon');
      //  myIcons.to('svg1-menu', {duration: 3000});
        
       

        $('#menu-movil-click').on('click touch', function(event) {
            if(menuClick==0){
                menuClick=1;
                myIcons.to('svg1-menu-cerrar', {duration: 300});
            }else{
                menuClick=0;
                 myIcons.to('svg1-menu', {duration: 300});
            }
          
        });

    /*----------  Capas de animacion animadas  ----------*/
    inicializaAnimaciones()
     animacionesHome();







      /*----------  Parallax home ----------*/
    if(!isMobile.any()){

        /*----------  Si no es un móvil, si es escritorio ----------*/


        var controller_p1 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 1"})
                        .addTo(controller_p1);

        var controller_p2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax2"})
                        .setTween("#parallax2 > div", {y: "50%",ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 2"})
                        .addTo(controller_p2);



        var controller_p3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax3"})
                        .setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 3"})
                        .addTo(controller_p3);

        var controller_p4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax4"})
                        .setTween("#parallax4 > div", {y: "50%", ease: Linear.easeNone})
                       // .setTween("#parallax4", {x:"0%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 4"})
                        .addTo(controller_p4);

    }else{

         var controller_p1 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 1"})
                        .addTo(controller_p1);

        var controller_p2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax2"})
                        .setTween("#parallax2 > div", {y: "50%",ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 2"})
                        .addTo(controller_p2);



        var controller_p3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax3"})
                        .setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 3"})
                        .addTo(controller_p3);


         var controller_p4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax4"})
                        .setTween("#parallax4 > div", {y: "50%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 4"})
                        .addTo(controller_p4);

    }



    /*----------  Foundation  ----------*/
    $(document).foundation();

    var timeScroll = 500;
    $('.ir-nosotros').on('click touch', function(event) {
        $('html, body').animate({
                    scrollTop: ($(".llegar-nosotros").offset().top)+-200
                }, timeScroll);
        event.preventDefault();
    });
     $('.ir-home').on('click touch', function(event) {
        $('html, body').animate({
                    scrollTop: 0
                }, timeScroll);
        event.preventDefault();
    });

})





/*----------  Funciones globales  ----------*/

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

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


