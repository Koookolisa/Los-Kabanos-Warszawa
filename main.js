document.addEventListener('DOMContentLoaded', () => {
    
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dodatkowe sprawdzenie dla CSS
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Player Dot Interaction
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', function(e) {
            // Pobierz ID z href
            const id = this.getAttribute('href').substring(1);
            const card = document.getElementById(id);
            
            if(card) {
                // Reset podświetlenia
                document.querySelectorAll('.player-card').forEach(c => c.classList.remove('highlight'));
                
                // Dodaj klasę
                setTimeout(() => {
                    card.classList.add('highlight');
                    setTimeout(() => card.classList.remove('highlight'), 2000);
                }, 50);
            }
        });
    });
});
