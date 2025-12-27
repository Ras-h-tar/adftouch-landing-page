document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle (Note: Add burger menu HTML in index if needed later, 
    // but for now this handles smooth scrolling for all links)
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Handler (Optional Alert)
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            // Note: If using Formspree, remove this preventDefault/Alert 
            // and let the form submit naturally.
            // This is just a visual placeholder for now.
            
            // e.preventDefault(); 
            // alert('Thank you! Your inquiry for ADF Touch has been sent.');
            // form.reset();
        });
    }
});