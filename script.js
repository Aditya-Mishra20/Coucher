// animating navbar
var tl = gsap.timeline({
    delay: 1
});
tl.from(".navbar", {
    opacity: 0,
}, 'a')
tl.from(".navbar h1", {
    opacity: 0,
    y: -50,
}, 'a')
tl.from(".nav-part2 a, #left-dwn", {
    scale: 0,
    stagger: 0.1
}, 'a')
tl.from(".navbar > a", {
    opacity: 0,
    x: 50,
}, 'a')
tl.from("#left-dwn h3", {
    x: -50,
    opacity: 0,
    delay: 2,
    stagger: 0.3
}, 'a')

// animating left and right side 

gsap.from("#left h1", {
    x: -50,
    opacity: 0,
    delay: 2,
    stagger: 0.3
})
gsap.from("#right img", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: 1,
})
gsap.from("#demo", {
    opacity: 0,
    scale: 0,
    delay: 2,
})
gsap.from("#demo h3, button", {
    x: -50,
    opacity: 0,
    delay: 2.5,
})

// animating page2

gsap.from("#page2 .box", {
    opacity: 0,
    y: 50,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#page2 .box",
        scroller: "body",
        end: "top 60%",
        // markers: true,
        scrub: 1,
    }

})