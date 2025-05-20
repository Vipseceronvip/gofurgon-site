
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
    const response = await fetch('PASTE_YOUR_SCRIPT_URL_HERE', {
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
