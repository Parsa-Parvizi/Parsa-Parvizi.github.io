$('.navToggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('navToggleActive');
});

// اضافه کردن رویداد کلیک به بدنه
$('body').on('click', function (e) {
  // بررسی اینکه آیا نوار ناوبری باز است
  if ($('body').hasClass('navToggleActive')) {
    // بررسی اینکه آیا کاربر روی نوار ناوبری یا دکمه نوار ناوبری کلیک کرده است
    if (!$(e.target).closest('.navCol').length && !$(e.target).closest('.navToggle').length) {
      // اگر کاربر روی نوار ناوبری یا دکمه نوار ناوبری کلیک نکرده باشد، نوار را ببندید
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
  $('html, body').animate({ scrollTop: 0 }, 800); // اسکرول نرم به بالا
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) { // 300 پیکسل پایین‌تر از بالای صفحه
    $('body').addClass('scrollActive');
  } else {
    $('body').removeClass('scrollActive');
  }
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


document.getElementById('tourResume').addEventListener('click', function (e) {
  e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک

  // نمایش پیام خوشامدگویی
  document.getElementById('welcomeModal').style.display = 'block';
});

// بستن modal
document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('welcomeModal').style.display = 'none';
});

document.getElementById('startTour').addEventListener('click', function () {
  // بستن modal
  document.getElementById('welcomeModal').style.display = 'none';

  // هدایت به صفحه portfolio.html
  window.location.href = 'portfolio.html';
});

let currentSlide = 0; // نمایه اسلاید فعلی
const slides = document.querySelectorAll('.slide'); // انتخاب همه اسلایدها

function showSlide(index) {
  // مخفی کردن همه اسلایدها
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function changeSlide(direction) {
  currentSlide += direction;

  // اگر به آخرین اسلاید رسید، به اول برگرد
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1; // به آخرین اسلاید برگرد
  }

  showSlide(currentSlide);
}

// نمایش اولین اسلاید در بارگذاری صفحه
showSlide(currentSlide);
