// const menuBtn = document.querySelector(".menu-btn");
// const navigation = document.querySelector(".navigation");

// menuBtn.addEventListener("click", () => {
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active");
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const btns = document.querySelectorAll(".nav-btn");
//     const slides = document.querySelectorAll(".img-slide");
//     const contents = document.querySelectorAll(".content");
//     const homeSection = document.querySelector(".home");

//     let currentSlide = 0;
//     const slideInterval = 5000; // Change this value to adjust the interval between slides (in milliseconds)

//     const sliderNav = function (manual) {
//         btns.forEach((btn) => {
//             btn.classList.remove("active");
//         });

//         slides.forEach((slide) => {
//             slide.classList.remove("active");
//         });

//         contents.forEach((content) => {
//             content.classList.remove("active");
//         });

//         btns[manual].classList.add("active");
//         slides[manual].classList.add("active");
//         contents[manual].classList.add("active");

//         // Update background image dynamically based on the current slide
//         const backgroundImage = `url(../../assets/image/${manual + 1}.jpg)`;
//         homeSection.style.backgroundImage = backgroundImage;
//     };

//     const nextSlide = function () {
//         currentSlide++;
//         if (currentSlide >= slides.length) {
//             currentSlide = 0;
//         }
//         sliderNav(currentSlide);
//     };

//     let slideIntervalId = setInterval(nextSlide, slideInterval);

//     btns.forEach((btn, i) => {
//         btn.addEventListener("click", () => {
//             clearInterval(slideIntervalId);
//             currentSlide = i;
//             sliderNav(currentSlide);
//             slideIntervalId = setInterval(nextSlide, slideInterval);
//         });
//     });
// });

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".img-slide");
    const contents = document.querySelectorAll(".content");
    const homeSection = document.querySelector(".home");

    let currentSlide = 0;
    const slideInterval = 15000; // Change this value to adjust the interval between slides (in milliseconds)

    const sliderNav = function (manual) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });

        slides.forEach((slide) => {
            slide.classList.remove("active");
            slide.classList.remove("zoom-in-out-box"); // Remove the zoom-in class from all slides
        });

        contents.forEach((content) => {
            content.classList.remove("active");
        });

        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        slides[manual].classList.add("zoom-in-out-box"); // Add the zoom-in class to the current slide
        contents[manual].classList.add("active");

        // Update background image dynamically based on the current slide
        const backgroundImage = `url(../../assets/image/${manual + 1}.jpg)`;
        homeSection.style.backgroundImage = backgroundImage;
    };

    const nextSlide = function () {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        sliderNav(currentSlide);
    };

    let slideIntervalId = setInterval(nextSlide, slideInterval);

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            clearInterval(slideIntervalId);
            currentSlide = i;
            sliderNav(currentSlide);
            slideIntervalId = setInterval(nextSlide, slideInterval);
        });
    });
});
