const audio = document.getElementById('bg-music');

function startMusic() {
    audio.muted = false;
    audio.play();
    window.removeEventListener('click', startMusic);
    window.removeEventListener('scroll', startMusic);
}

// trigger dengan gesture kecil
window.addEventListener('click', startMusic, { once: true });
window.addEventListener('scroll', startMusic, { once: true });

// Ambil elemen tombol
const profileButton = document.getElementById('profileButton');
const twentyButton = document.querySelector('.container_button button:nth-child(2)');
const readMeButton = document.getElementById('readMeButton');
const collectButton = document.getElementById('collectButton');

// Konten
const profileContent = document.getElementById('profileContent');
const twentyContent = document.getElementById('twentyContent');
const readMeContent = document.getElementById('readMeContent');

// ReadMe elements
const readMeButtonMessage = document.getElementById('readMeButtonMessage');
const readMeInitialView = document.getElementById('readMeInitialView');
const readMeEnvelopeView = document.getElementById('readMeEnvelopeView');
const collectPostcardButton = document.getElementById('collectPostcardButton');
const readMePostcardView = document.getElementById('readMePostcardView');
const closeEnvelopeButton = document.getElementById('closeEnvelopeButton');
const closePostcardButton = document.getElementById('closePostcardButton');
const envelopeImage = readMeEnvelopeView.querySelector('.envelope_image');
const postcardImage = readMePostcardView.querySelector('.postcard_image');

// Modal
const modalOverlay = document.getElementById('modalOverlay');
const collectedView = document.getElementById('collectedView');
const collectedImage = collectedView.querySelector('img');

// Array tombol & konten
const allButtons = [profileButton, twentyButton, readMeButton];
const allContent = [profileContent, twentyContent, readMeContent];

// --- Reset Semua ---
function resetAll() {
    allContent.forEach(c => c?.classList.add('hidden'));
    allButtons.forEach(b => b?.classList.remove('active'));
    collectButton?.classList.add('hidden');
}

// --- Event Profile ---
profileButton.addEventListener('click', () => {
    const isActive = profileButton.classList.contains('active');
    resetAll();
    if (!isActive) {
        profileButton.classList.add('active');
        profileContent.classList.remove('hidden');
    }
});

// --- Event ReadMe ---
readMeButton.addEventListener('click', () => {
    const isActive = readMeButton.classList.contains('active');
    resetAll();
    if (!isActive) {
        readMeButton.classList.add('active');
        readMeContent.classList.remove('hidden');
    }
});

// --- Event Twenty ---
twentyButton.addEventListener('click', () => {
    const isActive = twentyButton.classList.contains('active');
    resetAll();
    if (!isActive) {
        twentyButton.classList.add('active');
        twentyContent.classList.remove('hidden');
        collectButton.classList.remove('hidden'); // tampilkan tombol collect
    }
});

// --- Read Me ButtonMessage: buka amplop ---
readMeButtonMessage.addEventListener('click', () => {
    readMeInitialView.classList.add('hidden');
    readMeEnvelopeView.classList.remove('hidden');
});

// --- Tutup amplop ---
closeEnvelopeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    readMeEnvelopeView.classList.add('hidden');
    readMeInitialView.classList.remove('hidden');
});

// --- Klik gambar amplop → postcard ---
envelopeImage.addEventListener('click', (e) => {
    e.stopPropagation();
    readMeEnvelopeView.classList.add('hidden');
    readMePostcardView.classList.remove('hidden');
});

// --- Tutup postcard ---
closePostcardButton.addEventListener('click', (e) => {
    e.stopPropagation();
    readMePostcardView.classList.add('hidden');
    readMeEnvelopeView.classList.remove('hidden');
});

// --- Tombol COLLECT di postcard: buka modal ---
collectPostcardButton.addEventListener('click', (e) => {
    e.stopPropagation();
    collectedImage.src = postcardImage.src;
    modalOverlay.classList.remove('hidden');
    collectedView.classList.remove('hidden');
});

// --- Klik overlay → tutup modal ---
modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    collectedView.classList.add('hidden');
});

