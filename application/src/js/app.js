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
        
        /*----------  Menu pegajoso ----------*/     
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

        var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 1"})
                        .addTo(controller2);

        var controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax2"})
                        .setTween("#parallax2 > div", {y: "50%",ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 2"})
                        .addTo(controller3);



        var controller4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax3"})
                        .setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 3"})
                        .addTo(controller3);

    }else{

         var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax1"})
                        .setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 1"})
                        .addTo(controller2);

        var controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "300%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax2"})
                        .setTween("#parallax2 > div", {y: "50%",ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 2"})
                        .addTo(controller3);



        var controller4 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
        new ScrollMagic.Scene({triggerElement: "#parallax3"})
                        .setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
                        .addIndicators({name: "home parallax 3"})
                        .addTo(controller3);

    }



    /*----------  Foundation  ----------*/
    $(document).foundation();
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


