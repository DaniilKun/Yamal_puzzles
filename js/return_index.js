var no_active_delay = 600; // Количество секунд простоя мыши, при котором пользователь считается неактивным
var now_no_active = 0; // Текущее количество секунд простоя мыши

setInterval("now_no_active++;", 1000); // Каждую секунду увеличиваем количество секунд простоя мыши
setInterval("updateChat()", 1000); // Запускаем функцию updateChat() через определённый интервал

document.ontouchmove = activeUser; // Ставим обработчик на движение toch экрана

function activeUser() {
  now_no_active = 0; // Обнуляем счётчик простоя секунд

  console.log(no_active_delay);
  console.log(now_no_active);
  console.log(setInterval)
}

function updateChat() {
  if (now_no_active >= no_active_delay) { // Проверяем не превышен ли "предел активности" пользователя
    location.href = 'index.html'
    return;
  }
}