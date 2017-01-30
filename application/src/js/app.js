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
        speed: 600
    });









    /*----------  ScrollMagic FX  ----------*/
    var controller = new ScrollMagic.Controller();
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
    $(window).resize(function(event) {
      location.reload();
    });






    /*----------  Capas de animacion animadas  ----------*/
    inicializaAnimaciones()
     animacionesHome();







      /*----------  Parallax home ----------*/


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





    /*----------  Foundation  ----------*/
    $(document).foundation();
})





/*----------  Funciones globales  ----------*/

function updateBox (e) {
    if (e.type == "enter") {
       alert(1);
    } 
}
function inicializaAnimaciones(){
     $('[target]').prepend("<div class='mascara-cont'><div class='mascara1 mascara'></div><div class='mascara2 mascara'></div></div>");
}
function animacionesHome(){
    var num = 0;
    $('.mascara-cont:visible').each(function(){
          TweenLite.fromTo($(this), 1.5, { x: '0%' }, { x: '101%', delay:num, ease: Expo.easeInOut});
           num += .08;
    })
   
}


