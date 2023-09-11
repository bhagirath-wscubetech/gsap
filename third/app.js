const tl = gsap.timeline();

tl.from(
    ".main",
    {
        x: "-100%",
        duration: 1,
        opacity:0
    }
)
tl.from(
    "#box1",
    {
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: "back"
    }
)
tl.from(
    "#box2",
    {
        y: "100%",
        opacity: 0,
        scale: 0,
        duration: 2,
        ease: "bounce"
    }
)
tl.from(
    "#box3",
    {
        y: "-100%",
        opacity: 0,
        scale: 0,
        duration: 2,
        ease: "bounce"
    }
)
tl.from(
    "#box4",
    {
        y: "100%",
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "back"
    }
)
tl.from(
    "#box5",
    {
        y: "-100%",
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "back"
    }
)
tl.from(
    "#box6",
    {
        y: "100%",
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "back"
    }
)

tl.from(
    "#box7",
    {
        x: "100%",
        opacity: 0,
        ease: "back"
    }
)