ymaps.ready(function () {
  var moscowMap = new ymaps.Map(
      "map",
      {
        center: [55.75320513091251, 37.524078442497796],
        zoom: 16,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );

  moscowMap.controls.remove("geolocationControl");
  moscowMap.controls.remove("trafficControl"); //пробки
  moscowMap.controls.remove("typeSelector"); //слои
  moscowMap.controls.remove("searchControl");
  moscowMap.controls.remove("rulerControl"); //линейка
});

// BURGER MENU
const burger = document.querySelector(".burger-menu");
const nav = document.querySelector(".header__navbar");

const navSlide = () => {
  // Toggle Nav
  burger.addEventListener("click", (event) => {
    nav.classList.toggle("active");
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// OPEN location objects
const mapBtn = document.querySelector(".location-map__btn");
const objectsList = document.querySelector(".location-map__objects");

const openMapList = () => {
  mapBtn.addEventListener("click", (event) => {
    objectsList.classList.toggle("active");
  });
};

openMapList();

// SLIDER
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// SELECTS
const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

// Toggle menu
selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// second form
const selectSingle1 = document.querySelector(".__select-1");
const selectSingle_title1 = selectSingle1.querySelector(".__select__title-1");
const selectSingle_labels1 = selectSingle1.querySelectorAll(
  ".__select__label-1"
);

// Toggle menu
selectSingle_title1.addEventListener("click", () => {
  if ("active" === selectSingle1.getAttribute("data-state")) {
    selectSingle1.setAttribute("data-state", "");
  } else {
    selectSingle1.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels1.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title1.textContent = evt.target.textContent;
    selectSingle1.setAttribute("data-state", "");
  });
}

// FORM VALIDATION
const validate = () => {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let successSubscribe = document.querySelector(".contact-form__success");

  // Email Regular expression
  const nameCheck = "";
  emailSend.addEventListener("click", (eventValidation) => {
    if (nameCheck.test(name.value)) {
      successSubscribe.style.display = "flex";
      return false;
    } else {
      alert("Email is not valid");
      return false;
    }
  });
};

// validate();

// CONTACT FORM
const btnForm = document.querySelector(".contact-form__btn");
const successForm = document.querySelector(".contact-form__success");
// const date = document.querySelector(".__select__title");
// const time = document.querySelector(".__select__title-1");

const success = () => {
  // Toggle Nav
  btnForm.addEventListener("click", (event) => {
    successForm.style.display = "flex";
  });
};

success();

// OPEN mobile footer list
const footerElem = document.querySelectorAll(".footer-elem");

for (let elem of footerElem) {
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
  });
}
