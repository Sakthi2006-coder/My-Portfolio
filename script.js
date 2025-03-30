// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (you can expand this)
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav .container').appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Check screen size and adjust menu
function checkScreenSize() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();
// JavaScript for Single Certificate
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.querySelector('.certificate-modal');
    const modalImg = document.querySelector('.modal-certificate');
    const modalDownload = document.querySelector('.modal-download-btn');
    const closeModal = document.querySelector('.close-modal');
    const preview = document.querySelector('.certificate-preview');
    const downloadBtn = document.querySelector('.download-btn');
  
    // Set modal content from main certificate
    preview.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const downloadLink = downloadBtn.href;
      
      modalImg.src = imgSrc;
      modalDownload.href = downloadLink;
      modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  // Frontend-only Form Handling
document.getElementById('college-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show confirmation message
    const confirmation = document.getElementById('form-confirmation');
    confirmation.textContent = "Thank you! Your message has been received (demo).";
    confirmation.style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide confirmation after 5 seconds
    setTimeout(() => {
      confirmation.style.display = 'none';
    }, 5000);
    
    // In a real project, you would collect the data like this:
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    console.log('Form data (for demo):', formData);
  });