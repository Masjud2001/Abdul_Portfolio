// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Resume button click animation
const resumeButton = document.querySelector('.cta-button');
if (resumeButton) {
    resumeButton.addEventListener('click', () => {
        resumeButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            resumeButton.style.transform = 'scale(1)';
        }, 150);
    });
}

console.log("Portfolio main.js loaded successfully!");
