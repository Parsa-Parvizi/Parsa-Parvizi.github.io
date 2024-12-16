$('.navToggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('navToggleActive');
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
  $('html, body').animate({ scrollTop: 0 }, 800); // اسکرول نرم به بالا
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) { // 300 پیکسل پایین‌تر از بالای صفحه
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

  // جمع‌آوری مهارت‌ها از لیست
  const skills = Array.from(document.querySelectorAll('#skillsList li')).map(li => li.textContent);

  skills.forEach((skill, index) => {
    doc.text(`${index + 1}. ${skill}`, 20, 30 + (10 * index));
  });

  doc.save("my_skills.pdf");
});


// نمایش modal
document.getElementById('tourResume').addEventListener('click', function () {
  document.getElementById('welcomeModal').style.display = 'block';
});

// بستن modal
document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('welcomeModal').style.display = 'none';
});

// شروع تور
document.getElementById('startTour').addEventListener('click', function () {
  // بستن modal
  document.getElementById('welcomeModal').style.display = 'none';

  // اسکرول به بخش Key Skills
  const keySkillsSection = document.getElementById('keySkillsSection');
  keySkillsSection.scrollIntoView({ behavior: 'smooth' });

  // بزرگ کردن مهارت‌ها
  const skillCards = document.querySelectorAll('.keySkillCard');
  skillCards.forEach(card => {
    card.classList.add('highlight');
    // بعد از 2 ثانیه، کلاس highlight را حذف کنید
    setTimeout(() => {
      card.classList.remove('highlight');
    }, 2000);
  });
});

let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0; // Loop back to the first slide
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Loop to the last slide
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = (i === currentSlide) ? 'block' : 'none';
  });
}

// Function to change slide
function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Show the first slide initially
showSlide(currentSlide);