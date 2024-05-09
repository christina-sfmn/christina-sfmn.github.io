/* ---------- CHECK ELEMENTS ---------- */

// Überprüfen, ob Element im sichtbaren Bereich
function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* ---------- TIMELINE ---------- */

// Timeline schrittweise einblenden
function timelineAnimation() {
  document.querySelectorAll("li").forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
}

/* ---------- CODING LANGUAGES CIRCLES ---------- */

// Kreis-Animation hinzufügen oder entfernen
function circleAnimation() {
  document.querySelectorAll(".progress-ring__circle").forEach(circle => {
    if (isInViewport(circle)) {
      circle.classList.add("fill-animation");
    } else {
      circle.classList.remove("fill-animation");
    }
  });
}

/* ---------- LANGUAGE BARS ---------- */

// Balken-Animation laden
function barsAnimation() {
  document.querySelectorAll('.lang-container').forEach(container => {
    const bar = container.querySelector('.lang-bar');
    const width = bar.getAttribute('data-width');
    if (isInViewport(container)) {
      bar.style.width = width;
    } else {
      bar.style.width = '0%';
    }
  });
}

/* ---------- ALL ANIMATIONS ---------- */

// Alle Animationen in einer Funktion zusammenfassen
function handleEvents() {
  timelineAnimation();
  circleAnimation();
  barsAnimation();
}

// Animationen beim Laden, Vergrößern des Fensters oder Scrollen in Sichtbereich erneut laden
window.addEventListener("load", handleEvents);
window.addEventListener("resize", handleEvents);
window.addEventListener("scroll", handleEvents);