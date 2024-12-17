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

var swiper = new Swiper(".certificatesSlider", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cert-swiper-button-next",
    prevEl: ".cert-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});


document.getElementById('downloadPDF').addEventListener('click', function () {
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


function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = (i === currentSlide) ? 'block' : 'none';
  });
}
function changeSlide(direction) {
  showSlide(currentSlide + direction);
}
showSlide(currentSlide);
