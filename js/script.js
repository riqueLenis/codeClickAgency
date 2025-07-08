document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fechar menu mobile se estiver aberto
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                document.getElementById('mobile-menu').classList.remove('open');
            }
        });
    });

    //link zap
   document.getElementById('zapbtn').addEventListener('click', function() {
       window.open('https://api.whatsapp.com/send/?phone=5567996134676&text=Ol%C3%A1%2C+vim+do+site+e+quero+saber+mais%21&type=phone_number&app_absent=0');
    });

    // Navbar Fixa e Mudança de Cor ao Rolar
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu Mobile Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // Testimonial Slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }

    // Inicializa o primeiro depoimento
    showTestimonial(currentIndex);

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialCards.length - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < testimonialCards.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    });

    let testimonialInterval = setInterval(() => {
        currentIndex = (currentIndex < testimonialCards.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    }, 7000); //troca a cada 7 segundos

    //pausar auto-slide ao interagir com os botões
    prevBtn.addEventListener('click', () => clearInterval(testimonialInterval));
    nextBtn.addEventListener('click', () => clearInterval(testimonialInterval));


    //botao Voltar ao Topo
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});