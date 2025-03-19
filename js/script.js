// Пример: Анимация при наведении на команду
document.querySelectorAll('#team .card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.card-title').style.color = '#007bff';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.card-title').style.color = '#000';
    });
  });