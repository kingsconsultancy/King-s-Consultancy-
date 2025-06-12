// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Team member hover effects
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.classList.add('hovered');
    });
    
    member.addEventListener('mouseleave', () => {
        member.classList.remove('hovered');
    });
});

// Numbers animation with counting effect
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const number = entry.target.querySelector('h3');
                if (number) {
                    // Get the original number and symbol
                    const originalText = number.textContent;
                    const match = originalText.match(/([0-9]+)([MK]+)?/);
                    
                    if (match) {
                        const num = parseInt(match[1]);
                        const symbol = match[2] || '';
                        let multiplier = 1;
                        
                        // Handle M and K multipliers
                        if (symbol === 'M') {
                            multiplier = 1000000;
                        } else if (symbol === 'K') {
                            multiplier = 1000;
                        }
                        
                        const target = num * multiplier;
                        
                        // Reset to 0
                        number.textContent = '0' + symbol;
                        number.style.opacity = '1';
                        
                        // Count up to target
                        let current = 0;
                        const duration = 3000; // 3 seconds
                        const stepTime = 30; // 30ms per step
                        const steps = Math.floor(duration / stepTime);
                        const step = Math.ceil(target / steps);
                        
                        const updateCount = () => {
                            current += step;
                            const formatted = (current / multiplier).toFixed(1).replace(/\.0$/, '');
                            number.textContent = formatted + symbol;
                            
                            if (current < target) {
                                setTimeout(updateCount, stepTime);
                            } else {
                                number.textContent = originalText;
                                entry.target.classList.add('animated');
                            }
                        };
                        
                        updateCount();
                    }
                }
            }
        });
    }, {
        threshold: 0.1
    });

    // Find all number items
    const numberItems = document.querySelectorAll('.number-item');
    numberItems.forEach(item => {
        const number = item.querySelector('h3');
        if (number) {
            // Store the original number
            const originalText = number.textContent;
            // Hide initially
            number.style.opacity = '0';
            // Observe the item
            observer.observe(item);
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}

// Try for free button functionality
document.querySelector('#try-free').addEventListener('click', () => {
    alert('Thank you for trying our service! We will contact you shortly.');
});


