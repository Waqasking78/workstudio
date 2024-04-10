gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});
document.querySelector(".page1 .pbt a").addEventListener("click",() => {
  locoScroll.scrollTo(document.body.scrollHeight);
  console.log("hwlkjhgc");
})

document.querySelector(".back-to-top a").addEventListener("click", () => {
  locoScroll.scrollTo(0);
});

function loader() {
  var tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });

  tl.from(
    ".yellow2",
    {
      top: "100%",
      duration: 0.5,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    ".loader h1",
    {
      color: "black",
      delay: 0.1,
    },
    "anim"
  );
  tl.to(".loader", {
    display: "none",
  });
}
loader();

gsap.to(".under,.nav svg path,.pop", {
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    // markers: true,
    start: "-10% top",
    end: "top 90%",
    scrub: true,
  },
  color: "#fff",
  fill: "#fff",
  duration: 10,
});
gsap.to(".under,.nav svg path,.pop", {
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    // markers: true,
    start: "-10% top",
    end: "top 90%",
    scrub: true,
  },
  color: "#000",
  fill: "#000",
  duration: 10,
});

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelectorAll(".page2");
elems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    var bgimg = elem.getAttribute("data-img");
    gsap.to(".page2", {});
    document.querySelector(".page2").style.backgroundImage = `url(${bgimg})`;
  });
});

var images = [
  "https://works.studio/assets/imager/images/chicago-blackhawks-best-day-ever/32977/W%C3%98RKS_Blackhawks_BestDayEver_00_Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/john-elliott-nepal/26169/21_john-elliott-nepal_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/boldly/25589/boldly-thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/converse/824/Converse-Basketball-Photography-02_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/jeen-yuhs/13608/jeen-yuhs-Film-Identity-Thumbnail_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/converse-basketball-explorations/10270/Converse-Basketball-Explorations-Typography-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
  "https://works.studio/assets/imager/images/Fear-of-God-Nike/9769/Nike-x-Fear-of-God-16_rectangle_1600_201124_014130_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
];
var title = [
  "chicago blackhawks best day ever",
  "john elliott",
  "boldy identity website",
  "l.e.d studio website",
  "converse basketball identity",
  "jeen-yuhs film identity",
  "u.s soccer campaign identity",
  "converse basketball explorations",
  "nike x fear of god identity",
];
let clutter = "";
images.forEach((img, index) => {
  clutter = `<div class="img-div">
  <div class="overlay">
      <p>${title[index]}</p>
  </div>
  <img src='${img}' alt="">
</div>`;
  // console.log(index);
  document.querySelector(".img-container").innerHTML += clutter;
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
