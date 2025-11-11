let tg = window.Telegram.WebApp;

tg.expand();

const textarea = document.getElementById('serial');

textarea.addEventListener('input', (e) => {
  // Убираем всё, кроме латинских букв, и переводим в верхний регистр
  let value = textarea.value.toUpperCase().replace(/[^A-Z]/g, '');

  // Ограничиваем максимум 8 символов (4 + 4)
  if (value.length > 8) {
    value = value.slice(0, 8);
  }

  // Вставляем дефис после 4 символов
  if (value.length > 4) {
    textarea.value = value.slice(0, 4) + '-' + value.slice(4);
  } else {
    textarea.value = value;
  }
});

textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    textarea.blur();
    console.log('Ввод завершён:', textarea.value);
  }
});
