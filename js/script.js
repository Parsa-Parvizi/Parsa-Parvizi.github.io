$('.navToggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('navToggleActive');
});

$('body').on('click', function (e) {
  if ($('body').hasClass('navToggleActive')) {
    if (!$(e.target).closest('.navCol').length && !$(e.target).closest('.navToggle').length) {
      $('body').removeClass('navToggleActive');
    }
  }
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('body').addClass('fixedHeader');
  } else {
    $('body').removeClass('fixedHeader');
  }
});


var swiper = new Swiper(".testimonialSwiper", {
  navigation: {
    nextEl: ".test-swiper-button-next",
    prevEl: ".test-swiper-button-prev",
  },
});

$('.scrollToTop').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 800);
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('body').addClass('scrollActive');
  } else {
    $('body').removeClass('scrollActive');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper for Certificates
  var certificatesSwiper = new Swiper('.certificatesSlider', {
    slidesPerView: 1, // Show 1 slide at a time
    spaceBetween: 16, // Space between slides
    loop: true, // Enable looping for infinite pagination
    pagination: {
      el: '.swiper-pagination', // Specify the pagination element
      clickable: true, // Enable clickable pagination
    },
    navigation: {
      nextEl: '.cert-swiper-button-next',
      prevEl: '.cert-swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2, // Show 2 slides on small screens
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3, // Show 3 slides on medium screens
        spaceBetween: 16,
      },
    },
  });
});

// Initialize Swiper for Certificates
var certificatesSwiper = new Swiper('.certificatesSlider', {
  slidesPerView: 1, // Show 1 slide at a time
  spaceBetween: 16, // Space between slides
  loop: true, // Enable looping for infinite pagination
  pagination: {
    el: '.swiper-pagination', // Specify the pagination element
    clickable: true, // Enable clickable pagination
  },
  navigation: {
    nextEl: '.cert-swiper-button-next',
    prevEl: '.cert-swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2, // Show 2 slides on small screens
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3, // Show 3 slides on medium screens
      spaceBetween: 16,
    },
  },
});

var teachingSwiper = new Swiper('.teachingSwiper', {
  slidesPerView: 1, // Show 1 slide on mobile
  spaceBetween: 10, // Space between slides
  loop: true, // Enable looping
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Enable clickable pagination
  },
  breakpoints: {
    640: {
      slidesPerView: 2, // Show 2 slides on small screens
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2, // Show 2 slides on medium screens
      spaceBetween: 16,
    },
  },
});

// Initialize Swiper for Testimonials
var testimonialSwiper = new Swiper('.testimonialSwiper', {
  slidesPerView: 1, // Show 1 slide at a time
  spaceBetween: 16, // Space between slides
  loop: true, // Enable looping for infinite pagination
  pagination: {
    el: '.swiper-pagination', // Specify the pagination element
    clickable: true, // Enable clickable pagination
  },
  navigation: {
    nextEl: '.test-swiper-button-next',
    prevEl: '.test-swiper-button-prev',
  },
  // Optional: Add effect for smooth transition
  effect: 'slide',
});

const downloadPDFButton = document.getElementById('downloadPDF');
if (downloadPDFButton) {
  downloadPDFButton.addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("My Skills", 20, 20);
    doc.setFontSize(12);

    const skills = Array.from(document.querySelectorAll('#skillsList li')).map(li => li.textContent);

    skills.forEach((skill, index) => {
      doc.text(`${index + 1}. ${skill}`, 20, 30 + (10 * index));
    });

    doc.save("my_skills.pdf");
  });
}

document.getElementById('tourResume').addEventListener('click', function (e) {
  e.preventDefault();


  document.getElementById('welcomeModal').style.display = 'block';
});


document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('welcomeModal').style.display = 'none';
});

document.getElementById('startTour').addEventListener('click', function () {

  document.getElementById('welcomeModal').style.display = 'none';


  window.location.href = 'portfolio.html';
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {

  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function changeSlide(direction) {
  currentSlide += direction;


  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

showSlide(currentSlide);
