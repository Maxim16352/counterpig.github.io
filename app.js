const textarea = document.getElementById('serial');

textarea.addEventListener('input', (e) => {
  let value = textarea.value.toUpperCase().replace(/[^A-Z]/g, '');
  if (value.length > 8) value = value.slice(0, 8);

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
