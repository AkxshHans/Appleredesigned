var tl = gsap.timeline()
tl.from("#main video ,.navpart1 a , #navpart2 h5 , #navpart3 button , #navpart3 #menu ",{
    y:-40,
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.2,
})
tl.from("#content h2 , #content p , #content h3 , #content button",{
    // x:30,
     opacity : 0,
   duration : 0.8,
   stagger : 0.3,
  
 })




 gsap.from("#main2 #img1 ",{
    x:-100,
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.2,
    scrollTrigger  : {
        trigger : "#main2",
        scroller : "body",
        markers : false ,
        start: "top 50%" ,
        
    }

 })
 gsap.from("#main2 #img2 ",{
    x:100,
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.2,
    scrollTrigger  : {
        trigger : "#main2",
        scroller : "body",
        markers : false ,
        start: "top 50%"
    }

 })
 gsap.from("#main2 h2 , #main2 button , #main2 p ",{
    
    opacity : 0,
    delay : 1,
    duration : 2,
    stagger : 0.2,
    scrollTrigger  : {
        trigger : "#main2",
        scroller : "body",
        markers : false ,
        start: "top 50%"
    }

 })



//  Shery.textAnimate("#main2 p" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 1,
//     y: 10,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });



Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



gsap.from("#main3 #imgaa , #main3 #imgbb , #main3 p ",{
    x:-50,
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#main3",
        scroller : "body",
        markers : false,
        start : "top 50%"
    }
})


gsap.from("#main4 img , #main4 h2 , #main4 p ",{
    y:50,
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#main4",
        scroller : "body",
        markers : false,
        start : "top 50%"
    }
})

gsap.from("#main5 #img1 , #main5 p  , #main5 h6",{
    x:-50,
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#main5",
        scroller : "body",
        markers : false,
        start : "top 50%"
    }
})



gsap.from("#main6 h1 , #main6 #img11 , #main6 #img22 , #main6 #img33 , #main6 #img44 , #main6 #img55",{
    x:-50,
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.2,
    scrollTrigger : {
        trigger : "#main6",
        scroller : "body",
        markers : false,
        start : "top 50%"
    }
})




gsap.from("#main7 #img1 , #main7 #img2",{
 
    opacity : 0,
    delay : 0.5,
    duration : 1,
    stagger : 0.2,
    scrollTrigger : {
        trigger : "#main7",
        scroller : "body",
        markers : false,
        start : "top 50%"
    }
})



gsap.from("#main6 h6 , #main9 img",{
    y:49,
    // scale : 0.1,
    opacity : 0,
    delay : 0.6,
    duration : 1,
    stagger : 0.2,
    scrollTrigger : {
        trigger : "#main9",
        scroller : "body",
        markers : false,
        start : "top 50%"
    }
})








