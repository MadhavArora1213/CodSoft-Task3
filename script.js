// NAVBAR SECTION

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const text = document.querySelector('.about h1');
    sidebar.style.display = 'flex';
    text.style.display = 'none';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const text = document.querySelector('.about h1');
    sidebar.style.display = 'none';
    text.style.display = 'flex';

}

let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('nav a');
window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    const nav = document.querySelector("nav");
    nav.style.opacity = '0.5';
};

// JAVASCRIPT

function mouseOver() {
    const images = document.querySelector(".img1");
    const Boxes = document.querySelector(".Pbox1");
    const hidden = document.querySelector(".hidden");
    images.style.opacity = 0.3;
    Boxes.style.boxShadow = "none";
    hidden.style.opacity = 1;
}
function mouseOut() {
    const images = document.querySelector(".img1");
    const Boxes = document.querySelector(".Pbox1");
    const hidden = document.querySelector(".hidden");
    images.style.opacity = 1;
    Boxes.style.boxShadow = "8px 8px 28px #aaaaaa",
        "-8px -8px 28px #ffffff";
    hidden.style.opacity = 0;
}
function mouseOver1() {
    const images = document.querySelector(".img2");
    const Boxes = document.querySelector(".Pbox2");
    const hidden = document.querySelector(".hidden1");
    images.style.opacity = 0.3;
    Boxes.style.boxShadow = "none";
    hidden.style.opacity = 1;
}
function mouseOut1() {
    const images = document.querySelector(".img2");
    const Boxes = document.querySelector(".Pbox2");
    const hidden = document.querySelector(".hidden1");
    images.style.opacity = 1;
    Boxes.style.boxShadow = "8px 8px 28px #aaaaaa",
        "-8px -8px 28px #ffffff";
    hidden.style.opacity = 0;
}
function mouseOver2() {
    const images = document.querySelector(".img3");
    const Boxes = document.querySelector(".Pbox3");
    const hidden = document.querySelector(".hidden2");
    images.style.opacity = 0.3;
    Boxes.style.boxShadow = "none";
    hidden.style.opacity = 1;
}
function mouseOut2() {
    const images = document.querySelector(".img3");
    const Boxes = document.querySelector(".Pbox3");
    const hidden = document.querySelector(".hidden2");
    images.style.opacity = 1;
    Boxes.style.boxShadow = "8px 8px 28px #aaaaaa",
        "-8px -8px 28px #ffffff";
    hidden.style.opacity = 0;
}
function mouseOver3() {
    const images = document.querySelector(".img4");
    const Boxes = document.querySelector(".Pbox4");
    const hidden = document.querySelector(".hidden3");
    images.style.opacity = 0.3;
    Boxes.style.boxShadow = "none";
    hidden.style.opacity = 1;
}
function mouseOut3() {
    const images = document.querySelector(".img4");
    const Boxes = document.querySelector(".Pbox4");
    const hidden = document.querySelector(".hidden3");
    images.style.opacity = 1;
    Boxes.style.boxShadow = "8px 8px 28px #aaaaaa",
        "-8px -8px 28px #ffffff";
    hidden.style.opacity = 0;
}
function mouseOver4() {
    const images = document.querySelector(".img5");
    const Boxes = document.querySelector(".Pbox5");
    const hidden = document.querySelector(".hidden4");
    images.style.opacity = 0.3;
    Boxes.style.boxShadow = "none";
    hidden.style.opacity = 1;
}
function mouseOut4() {
    const images = document.querySelector(".img5");
    const Boxes = document.querySelector(".Pbox5");
    const hidden = document.querySelector(".hidden4");
    images.style.opacity = 1;
    Boxes.style.boxShadow = "8px 8px 28px #aaaaaa",
        "-8px -8px 28px #ffffff";
    hidden.style.opacity = 0;
}

function mouseOver5() {
    const images = document.querySelector(".img6");
    const Boxes = document.querySelector(".Pbox6");
    const hidden = document.querySelector(".hidden5");
    images.style.opacity = 0.3;
    Boxes.style.boxShadow = "none";
    hidden.style.opacity = 1;
}
function mouseOut5() {
    const images = document.querySelector(".img6");
    const Boxes = document.querySelector(".Pbox6");
    const hidden = document.querySelector(".hidden5");
    images.style.opacity = 1;
    Boxes.style.boxShadow = "8px 8px 28px #aaaaaa",
        "-8px -8px 28px #ffffff";
    hidden.style.opacity = 0;
}

function change(){
    const img = document.querySelector(".location i");
    img.style.backgroundColor = "#f1f1f1";
    img.style.color = "#37b3ed";
}
function noChange(){
    const img = document.querySelector(".location i");
    img.style.backgroundColor = "#37b3ed";
    img.style.color = "#f1f1f1"; 
}
function change1(){
    const img = document.querySelector(".email i");
    img.style.backgroundColor = "#f1f1f1";
    img.style.color = "#37b3ed";
}
function noChange1(){
    const img = document.querySelector(".email i");
    img.style.backgroundColor = "#37b3ed";
    img.style.color = "#f1f1f1"; 
}
function change2(){
    const img = document.querySelector(".phone i");
    img.style.backgroundColor = "#f1f1f1";
    img.style.color = "#37b3ed";
}
function noChange2(){
    const img = document.querySelector(".phone i");
    img.style.backgroundColor = "#37b3ed";
    img.style.color = "#f1f1f1"; 
}

// TYPED JAVASCRIPT

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Designer", "Freelancer"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// SHERY JS

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet("li a");

Shery.textAnimate(".about h1", {
    style: 1,
    y: 10,
    delay: 0.4,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.makeMagnet(".btn button");

// GSAP

var tl = gsap.timeline()

function time() {
    var a = 0;
    setInterval(function () {
        a = a + Math.floor((Math.random() * 20));

        if (a < 100) {
            document.querySelector(".loader h1").innerHTML = a + "%";
        } else {
            a = 100;
            document.querySelector(".loader h1").innerHTML = a + "%";
        }
    }, 100);
    const nav = document.querySelector("nav");
    nav.style.zIndex = 0;
}

time();

tl.to(".loader h1", {
    duration: 1,
    onStart: time(),
});
tl.to(".loader", {
    top: "-100vh",
    duration: 1,
});

tl.from(".about h2", {
    x: -200,
    duration: 1,
    opacity: 0,
    stagger: 0.5
});

tl.from(".about p", {
    x: 200,
    duration: 1,
    opacity: 0,
    stagger: 1,
});

gsap.from("#about p,#skills .para", {
    x: 200,
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#about p",
        scroller: "body",
    }
});

gsap.from(".Aleft img,.Aright h2", {
    x: -200,
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".Aleft img",
        scroller: "body",
    }
});

gsap.from(".Aright li", {
    x: -500,
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".Altright li",
        scroller: "body",
    }
});

gsap.from(".box,#projects p,.Pbox1,.Pbox2,.Pbox3,.Pbox4,.Pbox5,.Pbox6", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".box",
        scroller: "body",
    }
});

gsap.from("#para", {
    scale: 0,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#para",
        scroller: "body",
    }
});

gsap.from(".SerBox,.SerBox img,.Serbox h3,.SerBox p", {
    x: -500,
    scale: 0,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".SerBox",
        scroller: "body",
    }
});

gsap.from(".para1,.Cleft,.Cright,.location,.email,.phone,.Cright label,.Cright button ", {
    x: -500,
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".para1",
        scroller: "body",
    }
});
