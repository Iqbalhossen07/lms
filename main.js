   
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
        });


// এখানে নতুন মোবাইল মেনু টগল ফাংশন যোগ করা হয়েছে
    document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            const isMenuOpen = mobileMenu.classList.contains('translate-y-0');
            const menuIcon = mobileMenuButton.querySelector('i');

            if (isMenuOpen) {
                // মেনু বন্ধ করার জন্য
                mobileMenu.classList.remove('flex', 'translate-y-0');
                mobileMenu.classList.add('hidden', '-translate-y-full');
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                // মেনু খোলার জন্য
                mobileMenu.classList.remove('hidden', '-translate-y-full');
                mobileMenu.classList.add('flex', 'translate-y-0');
                menuIcon.setAttribute('data-lucide', 'x');
            }
            // আইকন আপডেট করা
            lucide.createIcons();
        });

        // মেনু অপশনের লিঙ্কে ক্লিক করলে মেনু বন্ধ হবে
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('flex', 'translate-y-0');
                mobileMenu.classList.add('hidden', '-translate-y-full');
                mobileMenuButton.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });

        // অন্যান্য স্ক্রিপ্ট যেমন countdown, testimonial slider, FAQ accordion ইত্যাদি এখানে থাকবে
        // ... (আপনার আগের কোড)
    });

        // Countdown timer
        function updateCountdown() {
            let hours = 23;
            let minutes = 59;
            let seconds = 42;
            
            setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                        if (hours < 0) {
                            hours = 23;
                        }
                    }
                }
                
                const countdownElement = document.getElementById('countdown');
                if (countdownElement) {
                    countdownElement.textContent = 
                        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }
            }, 1000);
        }

        updateCountdown();

        // FAQ Accordion
        function toggleAccordion(id) {
            const content = document.getElementById(id + '-content');
            const icon = document.getElementById(id + '-icon');
            
            if (content.classList.contains('closed')) {
                content.classList.remove('closed');
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.remove('open');
                content.classList.add('closed');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect for header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            } else {
                header.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
            }
        });

    document.addEventListener('DOMContentLoaded', () => {
        const testimonialWrapper = document.querySelector('.testimonial-wrapper');
        const slides = document.querySelectorAll('.testimonial-slide');
        const prevButton = document.getElementById('prev-testimonial');
        const nextButton = document.getElementById('next-testimonial');
        const dots = document.querySelectorAll('.testimonial-dot');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            const offset = -currentIndex * 100;
            testimonialWrapper.style.transform = `translateX(${offset}%)`;
            dots.forEach(dot => dot.classList.remove('bg-primary-500'));
            dots[currentIndex].classList.add('bg-primary-500');
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentIndex = parseInt(e.target.dataset.index);
                updateSlider();
            });
        });

        // Autoplay functionality
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    });
