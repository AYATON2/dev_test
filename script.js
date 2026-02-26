document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you, ${name}! Your message has been sent.\n\nWe'll get back to you at ${email} soon!`);
            
            form.reset();
        });
    }
    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    const contactButtons = document.querySelectorAll('.contactButtons a');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});
