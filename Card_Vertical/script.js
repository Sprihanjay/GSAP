var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        markers: true, // turn on markers to see the trigger, comment it out when done
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2, // animation can scroll up and back. Takes 2 second
        pin: true // pin the element when the scroll is in the range
    }
})
tl
.to(".text",{
    top: "-7%", // move the text up to -7%
}, 'a')
.to("#card-one",{
    top: "35%",
}, 'a')
.to("#card-two",{
    top: "130%",
}, 'a') // we set all to a. It means set all to start at the same time
.to("#card-two",{
    top: "42%",
}, 'b')
.to("#card-one",{
    width: "65%",
    height: "65vh",
}, 'b') // Only decrease size of card one when card two arrives
.to("#card-three",{
    top: "130%",
}, 'b')
.to("#card-three",{
    top: "50%",
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh",
}, 'c')