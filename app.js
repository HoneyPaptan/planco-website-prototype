TweenMax.from(".logo", 2, {
    opacity: 0,
    y:-20,
    ease:Expo.easeInOut
})
TweenMax.to(".logo", 2, {
    opacity: 1,
    y:0,
    ease:Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li", 2, {
    delay: 0.5,
    opacity: 0,
    y:-20,
    ease:Expo.easeInOut
}, 0.20)

TweenMax.from(".big-text h1", 3, {
    delay:1,
    opacity: 0,
    y:-20,
    ease:Expo.easeInOut
})
TweenMax.to(".big-text h1", 3, {
    delay:1,
    opacity: 1,
    y:0,
    ease:Expo.easeInOut
})
TweenMax.from(".big-text p", 3, {
    delay:1.2,
    opacity: 0,
    y:-20,
    ease:Expo.easeInOut
})
TweenMax.to(".big-text p", 3, {
    delay:1.2,
    opacity: 1,
    y:0,
    ease:Expo.easeInOut
})
TweenMax.from(".btn", 3, {
    delay:1.5,
    opacity: 0,
    y:-20,
    ease:Expo.easeInOut
})
TweenMax.to(".btn", 3, {
    delay:1.5,
    opacity: 1,
    y:0,
    ease:Expo.easeInOut
})
TweenMax.from(".small-text h3", 3, {
    delay:2,
    opacity: 0,
    y:-20,
    ease:Expo.easeInOut
})
TweenMax.to(".small-text h3", 3, {
    delay:2,
    opacity: 1,
    y:0,
    ease:Expo.easeInOut
})

TweenMax.staggerFrom(".butt", 3, {
    delay:3,
    opacity: 0,
    y:-20,
    ease:Expo.easeInOut
}, 0.30)



let tl= gsap.timeline({
    scrollTrigger: {
        trigger: ".places",
        ease:Power3.easeInOut,
        start:"top center"
    }
})

tl.from(".head h2", { x: -200, opacity: 0, duration: 1})
tl.from(".card", { x: 200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")
tl.from(".illus", { x: -200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")

let tl1= gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        ease:Power3.easeInOut,
        start:"top center"
    }
})


tl1.from(".heading h2", { x: -200, opacity: 0, duration: 1})
tl1.from(".heading p", { x: 200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")
tl1.from(".heading svg", { x: -200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")


let tl2= gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonials",
        ease:Power3.easeInOut,
        start:"top bottom"
    }
})
tl2.from(".header h2", { x: -200, opacity: 0, duration: 1})
tl2.from(".circle1", { x: -200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")
tl2.from(".circle2", { x: -200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")
tl2.from(".circle3", { x: -200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")

let tl3= gsap.timeline({
    scrollTrigger: {
        trigger: ".faq",
        ease:Power3.easeInOut,
        start:"top bottom"
    }
})

tl3.from(".head2 h2", { x: -200, opacity: 0, duration: 1})
tl3.from(".quest", { y: -50, opacity: 0, duration: 1, stagger:0.20}, "-=0.5")


let tl4= gsap.timeline({
    scrollTrigger: {
        trigger: ".cta",
        ease:Power3.easeInOut,
        start:"top bottom"
    }
})

tl4.from(".head3 h2", { x: -200, opacity: 0, duration: 1})
tl4.from(".head3 button", { x: -200, opacity: 0, duration: 1, stagger:0.50}, "-=0.5")
tl4.from(".head3 svg", { x: 200, opacity: 0, duration: 1})


let tl5= gsap.timeline({
    scrollTrigger: {
        trigger: "footer",
        ease:Power3.easeInOut,
        start:"top bottom"
    }
})

tl5.from("footer", { opacity: 0, duration: 1})