 const btn = document.getElementById("btn");
  const navLinks = document.getElementById("navLinks");
  const icon = document.getElementById("menu-icon");

  btn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
// hero slider start here
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.getElementById("indicators");

let index = 0;

//indicator dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
    resetInterval();
  });
  indicatorsContainer.appendChild(dot);
});

const indicators = indicatorsContainer.children;
console.log(indicators)

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.toggle("active", i === index);
  }
}

let autoSlide = setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 3000);

function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 3000);
}

updateSlider();

// hero slider end here

// success slider start here
const successSlider=document.getElementById("successSlider")
const successSlide=document.querySelectorAll(".successStory")
const successIndicatorContainer=document.getElementById("success-indicators")

let successIndex = 0;

//  indicator dots
successSlide.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.addEventListener("click", () => {
    successIndex = i;
    updateSuccessSlider();
    resetSuccessInterval();
  });
  successIndicatorContainer.appendChild(dot);
});

const successIndicators = successIndicatorContainer.children;

function updateSuccessSlider() {
  successSlider.style.transform = `translateX(-${successIndex * 33.33}%)`;
  for (let i = 0; i < successIndicators.length; i++) {
    successIndicators[i].classList.toggle("active", i === successIndex);
  }
}

let autoSuccessSlide = setInterval(() => {
  successIndex = (successIndex + 1) % successSlide.length;
  updateSuccessSlider();
}, 3000);

function resetSuccessInterval() {
  clearInterval(autoSuccessSlide);
  autoSuccessSlide = setInterval(() => {
    successIndex = (successIndex + 1) % successSlide.length;
    updateSuccessSlider();
  }, 3000);
}

updateSuccessSlider();
// success slider end here


// iframe video start here
function playVideo(){
  const thumbnail=document.getElementById("thumbnail")
  const playBtn=document.getElementById("play-btn")
  const iframe=document.getElementById("video")
  document.getElementById("play-btn").addEventListener("click",()=>{
    iframe.src="https://www.youtube.com/embed/5GKzR0rjFvM?si=TCBZWBl2KxsajE2e"
    iframe.style.display='block'
    thumbnail.style.display="none"
    playBtn.style.display="none"
  })
}
playVideo()

// count
  document.addEventListener("DOMContentLoaded", function () {
  const duration = 2000; 
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    console.log(target)
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); 
      const currentValue = Math.floor(progress * target);
      counter.innerText = currentValue+ "+";

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+"; 
      }
    }

    requestAnimationFrame(update);
  });
});