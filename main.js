document.addEventListener('DOMContentLoaded', () => {
    
    // Obsługa Hamburgera
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Zamknięcie menu po kliknięciu w link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Animacja pojawiania się elementów (Scroll Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    // Obsługa kliknięcia w kropkę (Podświetlenie karty)
    const playerDots = document.querySelectorAll('.player-dot');
    
    playerDots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            // Pobierz ID karty z linku href
            const targetId = this.getAttribute('href').substring(1);
            const targetCard = document.getElementById(targetId);

            if(targetCard) {
                // Reset innych kart
                document.querySelectorAll('.player-card').forEach(c => c.classList.remove('highlight'));
                
                // Dodaj klasę highlight po chwili (żeby scroll zdążył ruszyć)
                setTimeout(() => {
                    targetCard.classList.add('highlight');
                    // Usuń po 2 sekundach
                    setTimeout(() => {
                        targetCard.classList.remove('highlight');
                    }, 2000);
                }, 100);
            }
        });
    });
});
