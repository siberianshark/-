// Подключаем GSAP и ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Находим элементы на странице
const header = document.querySelector('.header');
const darkOverlay = document.querySelector('.dark-overlay');

// Настроим ScrollTrigger для управления фоном и шапкой
ScrollTrigger.create({
  trigger: '.content',   // Параметр отслеживания (скроллим контент)
  start: 'top top',      // Начало отслеживания
  end: 'bottom bottom',  // Конец отслеживания
  scrub: 0.5,            // Плавность
  onUpdate: (self) => {
    // Управляем интенсивностью затемнения в зависимости от прокрутки
    const opacity = self.progress * 0.5;  // Прогресс от 0 до 0.5 (от 0% до 50% затемнения)
    gsap.to(darkOverlay, { backgroundColor: `rgba(0, 0, 0, ${opacity})`, duration: 0.1 });

    // Фиксация шапки
    if (self.progress > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
});
