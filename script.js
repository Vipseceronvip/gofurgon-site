document.getElementById("rentalForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = document.getElementById("response");

  try {
    const res = await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
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