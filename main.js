const title = document.getElementById("treegfx");
    
title.addEventListener("mouseenter", () => {
    gsap.to(title, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
        fontFamily: "Lostar, serif",
        textContent: "tr##gfx"
    });
});
    
title.addEventListener("mouseleave", () => {
    gsap.to(title, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", sans-serif",
        textContent: "treegfx"
    });
});
    
document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    gsap.to(title, {
        rotateX: (y - window.innerHeight / 2) / -20,
        rotateY: (x - window.innerWidth / 2) / 20,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.1
    });
});