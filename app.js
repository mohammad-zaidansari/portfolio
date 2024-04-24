function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
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

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./waveform/000.png
  ./waveform/001.png
  ./waveform/002.png
  ./waveform/003.png
  ./waveform/004.png
  ./waveform/005.png
  ./waveform/006.png
  ./waveform/007.png
  ./waveform/008.png
  ./waveform/009.png
  ./waveform/010.png
  ./waveform/011.png
  ./waveform/012.png
  ./waveform/013.png
  ./waveform/014.png
  ./waveform/015.png
  ./waveform/016.png
  ./waveform/017.png
  ./waveform/018.png
  ./waveform/019.png
  ./waveform/020.png
  ./waveform/021.png
  ./waveform/022.png
  ./waveform/023.png
  ./waveform/024.png
  ./waveform/025.png
  ./waveform/026.png
  ./waveform/027.png
  ./waveform/028.png
  ./waveform/029.png
  ./waveform/030.png
  ./waveform/031.png
  ./waveform/032.png
  ./waveform/033.png
  ./waveform/034.png
  ./waveform/035.png
  ./waveform/036.png
  ./waveform/037.png
  ./waveform/038.png
  ./waveform/039.png
  ./waveform/040.png
  ./waveform/041.png
  ./waveform/042.png
  ./waveform/043.png
  ./waveform/044.png
  ./waveform/045.png
  ./waveform/046.png
  ./waveform/047.png
  ./waveform/048.png
  ./waveform/049.png
  ./waveform/050.png
  ./waveform/051.png
  ./waveform/052.png
  ./waveform/053.png
  ./waveform/054.png
  ./waveform/055.png
  ./waveform/056.png
  ./waveform/057.png
  ./waveform/058.png
  ./waveform/059.png
  ./waveform/060.png
  ./waveform/061.png
  ./waveform/062.png
  ./waveform/063.png
  ./waveform/064.png
  ./waveform/065.png
  ./waveform/066.png
  ./waveform/067.png
  ./waveform/068.png
  ./waveform/069.png
  ./waveform/070.png
  ./waveform/071.png
  ./waveform/072.png
  ./waveform/073.png
  ./waveform/074.png
  ./waveform/075.png
  ./waveform/076.png
  ./waveform/077.png
  ./waveform/078.png
  ./waveform/079.png
  ./waveform/080.png
  ./waveform/081.png
  ./waveform/082.png
  ./waveform/083.png
  ./waveform/084.png
  ./waveform/085.png
  ./waveform/086.png
  ./waveform/087.png
  ./waveform/088.png
  ./waveform/089.png
  ./waveform/090.png
  ./waveform/091.png
  ./waveform/092.png
  ./waveform/093.png
  ./waveform/094.png
  ./waveform/095.png
  ./waveform/096.png
  ./waveform/097.png
  ./waveform/098.png
  ./waveform/099.png
  ./waveform/100.png
  ./waveform/101.png
  ./waveform/102.png
  ./waveform/103.png
  ./waveform/104.png
  ./waveform/105.png
  ./waveform/106.png
  ./waveform/107.png
  ./waveform/108.png
  ./waveform/109.png
  ./waveform/110.png
  ./waveform/111.png
  ./waveform/112.png
  ./waveform/113.png
  ./waveform/114.png
  ./waveform/115.png
  ./waveform/116.png
  ./waveform/117.png
  ./waveform/118.png
  ./waveform/119.png
  ./waveform/120.png
  ./waveform/121.png
  ./waveform/122.png
  ./waveform/123.png
  ./waveform/124.png
  ./waveform/125.png
  ./waveform/126.png
  ./waveform/127.png
  ./waveform/128.png
  ./waveform/129.png
  ./waveform/130.png
  ./waveform/131.png
  ./waveform/132.png
  ./waveform/133.png
  ./waveform/134.png
  ./waveform/135.png
  ./waveform/136.png
  ./waveform/137.png
  ./waveform/138.png
  ./waveform/139.png
  ./waveform/140.png
  ./waveform/141.png
  ./waveform/142.png
  ./waveform/143.png
  ./waveform/144.png
  ./waveform/145.png
  ./waveform/146.png
  ./waveform/147.png
  ./waveform/148.png
  ./waveform/149.png
  ./waveform/150.png
  ./waveform/151.png
  ./waveform/152.png
  ./waveform/153.png
  ./waveform/154.png
  ./waveform/155.png
  ./waveform/156.png
  ./waveform/157.png
  ./waveform/158.png
  ./waveform/159.png
  ./waveform/160.png
  ./waveform/161.png
  ./waveform/162.png
  ./waveform/163.png
  ./waveform/164.png
  ./waveform/165.png
  ./waveform/166.png
  ./waveform/167.png
  ./waveform/168.png
  ./waveform/169.png
  ./waveform/170.png
  ./waveform/171.png
  ./waveform/172.png
  ./waveform/173.png
  ./waveform/174.png
  ./waveform/175.png
  ./waveform/176.png
  ./waveform/177.png
  ./waveform/178.png
  ./waveform/179.png
  ./waveform/180.png
  ./waveform/181.png
  ./waveform/182.png
  ./waveform/183.png
  ./waveform/184.png
  ./waveform/185.png
  ./waveform/186.png
  ./waveform/187.png
  ./waveform/188.png
  ./waveform/189.png
  ./waveform/190.png
  ./waveform/191.png
  ./waveform/192.png
  ./waveform/193.png
  ./waveform/194.png
  ./waveform/195.png
  ./waveform/196.png
  ./waveform/197.png
  ./waveform/198.png
  ./waveform/199.png
  ./waveform/200.png
  ./waveform/201.png
  ./waveform/202.png
  ./waveform/203.png
  ./waveform/204.png
  ./waveform/205.png
  ./waveform/206.png
  ./waveform/207.png
  ./waveform/208.png
  ./waveform/209.png
  ./waveform/210.png
  ./waveform/211.png
  ./waveform/212.png
  ./waveform/213.png
  ./waveform/214.png
  ./waveform/215.png
  ./waveform/216.png
  ./waveform/217.png
  ./waveform/218.png
  ./waveform/219.png
  ./waveform/220.png
  ./waveform/221.png
  ./waveform/222.png
  ./waveform/223.png
  ./waveform/224.png
  ./waveform/225.png
  ./waveform/226.png
  ./waveform/227.png
  ./waveform/228.png
  ./waveform/229.png
  ./waveform/230.png
  ./waveform/231.png
  ./waveform/232.png
  ./waveform/233.png
  ./waveform/234.png
  ./waveform/235.png
  ./waveform/236.png
  ./waveform/237.png
  ./waveform/238.png
  ./waveform/239.png
  ./waveform/240.png
  ./waveform/241.png
  ./waveform/242.png
  ./waveform/243.png
  ./waveform/244.png
  ./waveform/245.png
  ./waveform/246.png
  ./waveform/247.png
  ./waveform/248.png
  ./waveform/249.png
  ./waveform/250.png
  ./waveform/251.png
  ./waveform/252.png
  ./waveform/253.png
  ./waveform/254.png
  ./waveform/255.png
  ./waveform/256.png
  ./waveform/257.png
  ./waveform/258.png
  ./waveform/259.png
./waveform/258.png
./waveform/257.png
./waveform/256.png
./waveform/255.png
./waveform/254.png
./waveform/253.png
./waveform/252.png
./waveform/251.png
./waveform/250.png
./waveform/249.png
./waveform/248.png
./waveform/247.png
./waveform/246.png
./waveform/245.png
./waveform/244.png
./waveform/243.png
./waveform/242.png
./waveform/241.png
./waveform/240.png
./waveform/239.png
./waveform/238.png
./waveform/237.png
./waveform/236.png
./waveform/235.png
./waveform/234.png
./waveform/233.png
./waveform/232.png
./waveform/231.png
./waveform/230.png
./waveform/229.png
./waveform/228.png
./waveform/227.png
./waveform/226.png
./waveform/225.png
./waveform/224.png
./waveform/223.png
./waveform/222.png
./waveform/221.png
./waveform/220.png
./waveform/219.png
./waveform/218.png
./waveform/217.png
./waveform/216.png
./waveform/215.png
./waveform/214.png
./waveform/213.png
./waveform/212.png
./waveform/211.png
./waveform/210.png
./waveform/209.png
./waveform/208.png
./waveform/207.png
./waveform/206.png
./waveform/205.png
./waveform/204.png
./waveform/203.png
./waveform/202.png
./waveform/201.png
./waveform/200.png
./waveform/199.png
./waveform/198.png
./waveform/197.png
./waveform/196.png
./waveform/195.png
./waveform/194.png
./waveform/193.png
./waveform/192.png
./waveform/191.png
./waveform/190.png
./waveform/189.png
./waveform/188.png
./waveform/187.png
./waveform/186.png
./waveform/185.png
./waveform/184.png
./waveform/183.png
./waveform/182.png
./waveform/181.png
./waveform/180.png
 `;
  return data.split("\n")[index];
}

const frameCount = 339;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `1100% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `1100% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page5", {
  scrollTrigger: {
    trigger: `#page5`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  toggleButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
    toggleButton.querySelectorAll(".toggle-line").forEach((line) => {
      line.classList.toggle("active");
    });
  });
});

let typed = new Typed("#element", {
  strings: ["Frontend Developer", "Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
