const profileButton = document.getElementById('profileButton');
const twentyButton = document.querySelector('.container_button button:nth-child(2)'); // Cara lain memilih tombol Twenty
const readMeButton = document.getElementById('readMeButton');
const collectButton = document.getElementById('collectButton');

const profileContent = document.getElementById('profileContent');
const twentyContent = document.getElementById('twentyContent');
const readMeContent = document.getElementById('readMeContent');
const modalOverlay = document.getElementById('modalOverlay');

const photostripReel = document.querySelector('.photostrip_reel');
const photostripViewer = document.querySelector('.photostrip_viewer');
const collectedView = document.getElementById('collectedView');


const readMeButtonMessage = document.getElementById('readMeButtonMessage');
const readMeInitialView = document.getElementById('readMeInitialView');
const readMeEnvelopeView = document.getElementById('readMeEnvelopeView');
const collectPostcardButton = document.getElementById('collectPostcardButton');
const readMePostcardView = document.getElementById('readMePostcardView');
const closeEnvelopeButton = document.getElementById('closeEnvelopeButton'); // Tombol silang baru
const closePostCardButton = document.getElementById('closePostcardButton'); // Tombol silang baru
const postcardImage = document.querySelector('.postcard_image');

const allButtons = [profileButton, twentyButton, readMeButton];
const allContent = [profileContent, twentyContent, readMeContent];


function openModal(imageSrc) {
    collectedImage.src = imageSrc;
    modalOverlay.classList.remove('hidden');
    collectedView.classList.remove('hidden');
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    collectedView.classList.add('hidden');
}

function resetAll() {
    allContent.forEach(content => {
        if (content) content.classList.add('hidden');
    });
    allButtons.forEach(button => {
        if (button) button.classList.remove('active');
    });
    if (photostripViewer) photostripViewer.classList.remove('hidden');
    if (photostripReel) photostripReel.classList.remove('animate');
    if (collectedView) collectedView.classList.add('hidden');
    if (collectButton) collectButton.classList.add('hidden');
}


profileButton.addEventListener('click', () => {
    const isActive = profileButton.classList.contains('active');
    resetAll(); 
    if (!isActive) {
        profileButton.classList.add('active');
        profileContent.classList.remove('hidden');
    }
});

readMeButton.addEventListener('click', () => {
    const isActive = readMeButton.classList.contains('active');
    resetAll();
    if (!isActive) {
        readMeButton.classList.add('active');
        readMeContent.classList.remove('hidden');
    }
});

twentyButton.addEventListener('click', () => {
    const isActive = twentyButton.classList.contains('active');
    resetAll();
    if (!isActive) {
        twentyButton.classList.add('active');
        twentyContent.classList.remove('hidden');
        photostripReel.classList.add('animate');
    }
});


photostripReel.addEventListener('animationend', () => {
    collectButton.classList.remove('hidden');
});

collectButton.addEventListener('click', () => {
    modalOverlay.classList.toggle('hidden');
    collectedView.classList.toggle('hidden');
});

modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    collectedView.classList.add('hidden');
});

readMeButtonMessage.addEventListener('click', () => {
    readMeInitialView.classList.add('hidden');
    readMeEnvelopeView.classList.remove('hidden');
});

closeEnvelopeButton.addEventListener('click', (event) => {
    event.stopPropagation(); 
    readMeEnvelopeView.classList.toggle('hidden');
    readMeInitialView.classList.remove('hidden');
});

readMeEnvelopeView.addEventListener('click', () => {
    readMeEnvelopeView.classList.add('hidden');
    readMePostcardView.classList.remove('hidden');
});

readMePostcardView.addEventListener('click', () => {
    collectedImage.src = postcardImage.src; 
    modalOverlay.classList.remove('hidden');
    collectedView.classList.remove('hidden');
});

closePostcardButton.addEventListener('click', (event) => {
    event.stopPropagation();
    readMePostcardView.classList.add('hidden');
    readMeEnvelopeView.classList.remove('hidden');
});

readMePostcardView.addEventListener('click', () => {
    openModal(postcardImage.src);
});

modalOverlay.addEventListener('click', closeModal);