document.getElementById("rentalForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = document.getElementById("response");

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzE31l00qkrC6AJVGb8y2o54dBiNQR2zdQTF6bR18bFufHwNsY1UYkA-bVxs-hhdJ7UVg/exec", {
      method: "POST",
      body: data,
    });
    const result = await res.text();
    response.innerText = "Заявка отправлена успешно!";
    form.reset();
  } catch (err) {
    response.innerText = "Ошибка при отправке. Попробуйте позже.";
  }
});
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

showSlide(currentIndex);

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
