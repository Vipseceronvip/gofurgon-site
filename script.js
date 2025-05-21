document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('rentForm');
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzE31l00qkrC6AJVGb8y2o54dBiNQR2zdQTF6bR18bFufHwNsY1UYkA-bVxs-hhdJ7UVg/exec'; // Замените на ваш URL

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        if (response.ok) {
          alert('Заявка успешно отправлена!');
          form.reset();
        } else {
          alert('Ошибка при отправке. Попробуйте позже.');
        }
      })
      .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке. Попробуйте позже.');
      });
  });
});
