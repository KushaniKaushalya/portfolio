// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Download CV functionality
document.addEventListener('DOMContentLoaded', function() {
  const downloadCVBtn = document.querySelector('.btn-cv');
  
  if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', function(e) {
      // Add a small delay to show the download is starting
      this.style.transform = 'scale(0.95)';
      this.style.transition = 'transform 0.1s';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
      
      // Optional: Add download tracking or analytics here
      console.log('CV download initiated');
    });
  }
});

// Contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
}

// Typing animation for hero section
const typedWords = ['Java Software Engineer', '.NET Software Engineer', 'Backend Engineer','Full-Stack Software Engineer'];
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.typed-cursor');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typedText) return;
  const currentWord = typedWords[wordIndex];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typedWords.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 60);
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 120);
    }
  }
}
if (typedText && cursor) {
  setTimeout(type, 800);
}

// Project filtering for My Portfolio section
const filterButtons = document.querySelectorAll('.projects-filters .filter-btn');
const projectCards = document.querySelectorAll('.projects-grid .project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active from all
    filterButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.textContent.trim();
    projectCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(',').map(s => s.trim());
      if (filter === 'All' || categories.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// // EmailJS integration for contact form
// (function() {
//   // Load EmailJS script
//   const script = document.createElement('script');
//   script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
//   script.onload = function() {
//     emailjs.init('UR-XiQUfj0WtrRWgf'); // Replace with your EmailJS user ID
//   };
//   document.head.appendChild(script);

//   document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contact-form');
//     if (form) {
//       form.addEventListener('submit', function(e) {
//         e.preventDefault();
//         emailjs.sendForm('service_rrsrkf8', 'template_1tzkwe8', form)
//           .then(function() {
//             alert('Message sent successfully!');
//             form.reset();
//           }, function(error) {
//             alert('Failed to send message. Please try again later.');
//           });
//       });
//     }
//   });
// })(); 