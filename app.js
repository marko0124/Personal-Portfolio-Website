// Smaller
const observerZipped = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("enlarge");
        } else {
            entry.target.classList.remove("enlarge");
        }
    });
});
const zippedElements = document.querySelectorAll(".zipped");
zippedElements.forEach((el) => observerZipped.observe(el));

// Left hidden
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("unshow");
        } else {
            entry.target.classList.remove("show");
            entry.target.classList.add("unshow");
        }
    });
});
const hiddenLeftElements = document.querySelectorAll(".hidden-left");
hiddenLeftElements.forEach((el) => observerLeft.observe(el));

//Right hidden
const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenRightElements = document.querySelectorAll(".hidden-right");
hiddenRightElements.forEach((el) => observerRight.observe(el));

//Blurred
const observerBlurred = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("unblur");
        } else {
            entry.target.classList.remove("unblur");
        }
    });
});
const blurredElements = document.querySelectorAll(".blurred");
blurredElements.forEach((el) => observerBlurred.observe(el));

//Blurred
const observerBottom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("popUp");
        } else {
            entry.target.classList.remove("popUp");
        }
    });
});
const bottomElements = document.querySelectorAll(".hidden-bottom");
bottomElements.forEach((el) => observerBottom.observe(el));

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
};
