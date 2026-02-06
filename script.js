// -------------------------------
//  GESTION DES SECTIONS (PAGES)
// -------------------------------
function showSection(id) {
  const sections = document.querySelectorAll('.content');

  sections.forEach(sec => sec.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

// -------------------------------
//  SIDEBAR OUVERTURE / FERMETURE
// -------------------------------
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.querySelector('.open-sidebar-btn');
  const contents = document.querySelectorAll('.content');

  // Si la sidebar est fermée → on l'ouvre
  if (sidebar.style.transform === 'translateX(-230px)') {
    sidebar.style.transform = 'translateX(0)';
    openBtn.style.display = 'none';

    contents.forEach(c => c.classList.remove('full-width'));
  } 
  // Sinon → on la ferme
  else {
    sidebar.style.transform = 'translateX(-230px)';
    openBtn.style.display = 'block';

    contents.forEach(c => c.classList.add('full-width'));
  }
}

// -------------------------------
//  LECTEUR AUDIO PREMIUM
// -------------------------------
let currentAudio = null;
let currentButton = null;

function playAudio(id) {
  const audio = document.getElementById("audio" + id);
  const button = event.target;

  // Si on clique sur le même bouton → pause
  if (currentAudio === audio && !audio.paused) {
    audio.pause();
    button.textContent = "▶️ Écouter";
    button.classList.remove("playing");
    return;
  }

  // Si un autre audio joue → on le stoppe
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    if (currentButton) {
      currentButton.textContent = "▶️ Écouter";
      currentButton.classList.remove("playing");
    }
  }

  // Lecture du nouvel audio
  audio.play();
  button.textContent = "⏸️ Pause";
  button.classList.add("playing");

  currentAudio = audio;
  currentButton = button;

  // Quand l'audio se termine → reset bouton
  audio.onended = () => {
    button.textContent = "▶️ Écouter";
    button.classList.remove("playing");
  };
}

// -------------------------------
//  LECTURE VIDÉO (nouvel onglet)
// -------------------------------
function playVideo(url) {
  window.open(url, "_blank");
}

// -------------------------------
//  AU CHARGEMENT : afficher Radio
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
  showSection('radio');
});
