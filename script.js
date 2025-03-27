// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple alert for CTA button (placeholder for future functionality)
document.querySelector('.cta .btn').addEventListener('click', () => {
    alert('Sign-up functionality coming soon!');
});
