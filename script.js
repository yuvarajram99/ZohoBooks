//Elements
let languagePopup = document.querySelector(".language-banner-container");
let stickyHeader = document.getElementById("sticky-navbar");
let EinvoicingImg = document.querySelector(".e-invoicing-img");
let auditTrailImg = document.querySelector(".audittrail-img");
let gstContainer = document.querySelector(".gst-container");
let mobileContainer = document.querySelector(".mobile-container");
let mobileImg = document.querySelector(".mobile-left-img");
let integrationList = document.querySelectorAll(".integration-list-items");
let slideView = document.querySelectorAll(".slide-view");
let slider = document.querySelectorAll(".slider");
let closeBtn = document.querySelector(".close-icon");
let langPopupShow = true;

////////////////////////
// Page On Scroll to show the animations ;

window.addEventListener("scroll", () => {
  let curScroll = window.pageYOffset;

  // show sticky navigation bar

  if (curScroll >= 100) {
    stickyHeader.style.display = "block";

    curScroll >= 330 && langPopupShow
      ? languagePopup.classList.add("langPopup-visible")
      : languagePopup.classList.remove("langPopup-visible");

    // show e-invoicing and auditTrail images

    if (curScroll >= 600 && curScroll <= 1200) {
      EinvoicingImg.classList.add("visible");
      auditTrailImg.classList.add("visible");
    }

    // GST container and some row gap
    else if (curScroll >= 2800 && curScroll <= 3050) {
      gstContainer.classList.add("row-gap");
    }

    //show integration Lists  and attached animation
    else if (curScroll >= 5327 && curScroll <= 6000) {
      for (let i = 0; i < integrationList.length; i++) {
        integrationList[i].classList.add("animation");
      }
    }

    // Mobile Container image show....
    else if (curScroll >= 5870 && curScroll <= 6750) {
      mobileContainer.classList.add("align-content");
      mobileImg.classList.add("visible");
    }
    //remove the language popup container
    else {
      document
        .querySelector(".language-banner-container")
        .classList.remove("visible");
    }
  } else {
    //remove sticky Navigation Bar.
    stickyHeader.style.display = "none";
  }
});

//close to language popup

closeBtn.addEventListener(
  "click",
  () => (
    (langPopupShow = false), languagePopup.classList.remove("langPopup-visible")
  )
);

//////////////////////////////
/// Slider for Feature Sections

//slider --click to slide button
//slideView - slider container

slideView[0].style.display = "block";
for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("click", () => {
    let slideName = slider[i].innerHTML;
    //display None the all sliders containers...

    for (let i = 0; i < slideView.length; i++) {
      slideView[i].style.display = "none";
    }
    //Remove all the slider(button) border bottom ...

    for (let i = 0; i < slider.length; i++) {
      slider[i].classList.remove("border-bottom");
    }
    // Show the current section slider and slider container
    slider[i].classList.add("border-bottom");

    document.querySelector(`.${slideName}-slide`).style.display = "block";
  });
}
