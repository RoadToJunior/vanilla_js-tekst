// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3"];

let activeText = 0;
let activeLetter = 0;

// Implementacja
const addLetter = () => {
  // Użyj w środku setTimeout
  spnText.textContent += txt[activeText][activeLetter];
  activeLetter++;
  setTimeout(addLetter, activeLetter);
  if (activeLetter === txt[activeText].length) {
    activeLetter = 0;
    activeText++;
  }
};

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
