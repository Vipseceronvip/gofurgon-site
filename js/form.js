
document.getElementById('rentalForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    phone: form.phone.value,
    date_from: form.date_from.value,
    date_to: form.date_to.value,
    comment: form.comment.value
  };

  const status = document.getElementById('status');
  status.textContent = 'Отправка...';

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzE31l00qkrC6AJVGb8y2o54dBiNQR2zdQTF6bR18bFufHwNsY1UYkA-bVxs-hhdJ7UVg/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    status.textContent = result.result === 'success' ? 'Заявка отправлена!' : 'Ошибка при отправке';
  } catch (error) {
    status.textContent = 'Сетевая ошибка';
  }
});
