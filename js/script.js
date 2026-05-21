const mobileMenuButton = document.getElementById('mobileMenuButton');
const siteNav = document.getElementById('siteNav');
const progressBar = document.getElementById('progressBar');

mobileMenuButton?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
});

const anchors = document.querySelectorAll('.site-nav a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    siteNav.classList.remove('open');
    mobileMenuButton?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
});

const button = document.getElementById('showPdfBtn');
const pdf = document.getElementById('pdfContainer');

button.addEventListener('click', () => {
  pdf.style.display = 'block';
  button.style.display = 'none';
});

// Cookie Banner
const cookieBanner = document.getElementById('cookieBanner');
const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
const cookieDeclineBtn = document.getElementById('cookieDeclineBtn');

function setCookieConsent(value) {
  localStorage.setItem('cookieConsent', value);
  cookieBanner.classList.add('hidden');
}

function initializeCookieBanner() {
  const hasConsent = localStorage.getItem('cookieConsent');
  if (hasConsent) {
    cookieBanner.classList.add('hidden');
  }
}

cookieAcceptBtn.addEventListener('click', () => {
  setCookieConsent('accepted');
});

cookieDeclineBtn.addEventListener('click', () => {
  setCookieConsent('declined');
});

initializeCookieBanner();

// Privacy Policy Modal
const privacyBtn = document.getElementById('privacyPolicyBtn');
const privacyModal = document.getElementById('privacyModal');
const privacyCloseBtn = document.getElementById('privacyCloseBtn');
const privacyOverlay = document.getElementById('privacyOverlay');

privacyBtn.addEventListener('click', () => {
  privacyModal.classList.add('active');
});

privacyCloseBtn.addEventListener('click', () => {
  privacyModal.classList.remove('active');
});

privacyOverlay.addEventListener('click', () => {
  privacyModal.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
    privacyModal.classList.remove('active');
  }
});
