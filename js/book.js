function likeBook(bookId) {
    const likeCount = document.getElementById(`${bookId}-likes`);
    let currentLikes = parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
    
    const likeButton = likeCount.parentElement;
    likeButton.classList.add('liked');
}

function buyBook(bookId) {
    // در نسخه واقعی، این تابع می‌تواند به صفحه پرداخت هدایت کند
    alert('در حال انتقال به صفحه خرید...');
} 