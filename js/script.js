// Initialize GSAP and Locomotive Scroll
gsap.registerPlugin(ScrollTrigger);

// Global variables
let scroll;
let spidermanActive = false;
let chatbotOpen = false;
let aiChatbot;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Starting initialization...');
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('❌ GSAP not loaded!');
        return;
    }
    console.log('✅ GSAP loaded successfully');
    
    // Check if ScrollTrigger is loaded
    if (typeof ScrollTrigger === 'undefined') {
        console.error('❌ ScrollTrigger not loaded!');
        return;
    }
    console.log('✅ ScrollTrigger loaded successfully');
    
    try {
        initializeLocomotiveScroll();
        initializeAnimations();
        initializeNavigation();
        initializeAIChatbot();
        initializeChatbot();
        initializeSpiderman();
        initializeCounters();
        initializeFAQ();
        initializeProjectFilter();
        initializeContactForm();
        initializeLoadingScreen();
        console.log('✅ All initialization complete!');
    } catch (error) {
        console.error('❌ Initialization error:', error);
    }
});

// Initialize Locomotive Scroll
function initializeLocomotiveScroll() {
    try {
        const scrollContainer = document.querySelector('[data-scroll-container]');
        if (!scrollContainer) {
            console.warn('⚠️ No scroll container found, using body');
        }
        
        scroll = new LocomotiveScroll({
            el: scrollContainer || document.body,
            smooth: true,
            multiplier: 1,
            class: 'is-inview',
            scrollFromAnywhere: true,
            reloadOnContextChange: true,
            touchMultiplier: 2,
            smoothMobile: false,
            smartphone: {
                smooth: false
            },
            tablet: {
                smooth: false
            }
        });

        // Update scroll instance
        scroll.update();
        console.log('✅ Locomotive Scroll initialized');
    } catch (error) {
        console.error('❌ Locomotive Scroll error:', error);
    }
}

// Initialize GSAP Animations
function initializeAnimations() {
    console.log('🎬 Initializing GSAP animations...');
    
    // Hero section animations
    gsap.timeline()
        .from('.hero-title', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.hero-buttons', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.train-container', {
            duration: 1.5,
            x: 200,
            opacity: 0,
            ease: 'power3.out'
        }, '-=1.2');

    // Section animations with ScrollTrigger
    gsap.utils.toArray('[data-scroll]').forEach((element, index) => {
        gsap.fromTo(element, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Feature cards animation
    gsap.fromTo('.feature-card', {
        y: 100,
        opacity: 0,
        scale: 0.8
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Project cards animation
    gsap.fromTo('.project-card', {
        y: 100,
        opacity: 0,
        rotationY: 15
    }, {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.projects-container',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Team members animation
    gsap.fromTo('.team-member', {
        y: 80,
        opacity: 0,
        scale: 0.9
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Parallax effects
    gsap.to('.hero-visual', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Train animation on scroll
    gsap.to('.train', {
        x: 100,
        rotation: 5,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Additional train animations
    gsap.to('.locomotive', {
        rotation: 3,
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
    });

    // Smoke animation
    gsap.to('.smoke', {
        y: -30,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        repeat: -1,
        stagger: 0.3
    });
}

// Initialize Navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[data-scroll-section]');
    
    ScrollTrigger.batch(sections, {
        onEnter: (elements) => {
            elements.forEach(element => {
                const id = element.getAttribute('id') || element.className.split(' ')[0];
                updateActiveNavLink(id);
            });
        }
    });

    // Navbar background on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: '.navbar'}
    });
}

// Update active navigation link
function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(sectionId)) {
            link.classList.add('active');
        }
    });
}

// Initialize AI Chatbot Class
function initializeAIChatbot() {
    try {
        if (typeof AIChatbot !== 'undefined') {
            aiChatbot = new AIChatbot();
            console.log('✅ AI Chatbot initialized');
        } else {
            console.warn('⚠️ AIChatbot class not found');
        }
    } catch (error) {
        console.error('❌ AI Chatbot initialization error:', error);
    }
}

// Initialize AI Chatbot
function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');

    if (!chatbotToggle || !chatbotWindow) return;

    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbotOpen = !chatbotOpen;
        chatbotWindow.classList.toggle('active', chatbotOpen);
        
        if (chatbotOpen) {
            gsap.fromTo(chatbotWindow, {
                scale: 0.8,
                opacity: 0,
                y: 20
            }, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power3.out'
            });
        }
    });

    // Close chatbot
    chatbotClose.addEventListener('click', () => {
        chatbotOpen = false;
        chatbotWindow.classList.remove('active');
    });

    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Get AI response
        if (aiChatbot) {
            aiChatbot.sendMessage(message).then(response => {
                addMessage(response, 'bot');
            }).catch(error => {
                console.error('Chatbot error:', error);
                addMessage("I'm sorry, I'm having trouble right now. Please try again later.", 'bot');
            });
        } else {
            // Fallback response if AI chatbot not available
            const fallbackResponses = [
                "Hello! I'm here to help with your questions about Locomotive Express.",
                "Thanks for your message! Our team will get back to you soon.",
                "I can help you learn more about our web development services.",
                "Feel free to ask me anything about our locomotive-themed solutions!"
            ];
            const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
            addMessage(randomResponse, 'bot');
        }
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Animate message
        gsap.fromTo(messageDiv, {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power3.out'
        });
    }

}

// Initialize Spiderman Animation
function initializeSpiderman() {
    const spiderman = document.getElementById('spiderman');
    if (!spiderman) return;

    // Check if Spiderman image exists and switch to it
    const spidermanImage = document.querySelector('.spiderman-image');
    const spidermanBody = document.querySelector('.spiderman-body');
    const spidermanHead = document.querySelector('.spiderman-head');
    const spidermanWeb = document.querySelector('.spiderman-web');
    
    if (spidermanImage) {
        // Test if image loads successfully
        spidermanImage.onload = function() {
            console.log('🕷️ Spiderman image loaded successfully!');
            // Hide CSS version and show image
            if (spidermanBody) spidermanBody.style.display = 'none';
            if (spidermanHead) spidermanHead.style.display = 'none';
            if (spidermanWeb) spidermanWeb.style.display = 'none';
            spidermanImage.style.display = 'block';
        };
        
        spidermanImage.onerror = function() {
            console.log('⚠️ Spiderman image not found, using CSS version');
            // Keep CSS version visible
            spidermanImage.style.display = 'none';
        };
        
        // Try to load the image
        spidermanImage.src = spidermanImage.src; // Trigger load
    }

    // Test button for debugging
    const testButton = document.getElementById('testSpiderman');
    if (testButton) {
        testButton.addEventListener('click', () => {
            showSpiderman();
            setTimeout(() => hideSpiderman(), 3000);
        });
    }

    // Test train button
    const testTrainButton = document.getElementById('testTrain');
    if (testTrainButton) {
        testTrainButton.addEventListener('click', () => {
            testTrainAnimation();
        });
    }

    // Test GSAP button
    const testGSAPButton = document.createElement('button');
    testGSAPButton.textContent = '🎬 Test GSAP';
    testGSAPButton.style.cssText = 'position: fixed; top: 90px; left: 10px; z-index: 10000; background: linear-gradient(45deg, #9b59b6, #8e44ad); color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; box-shadow: 0 4px 15px rgba(155, 89, 182, 0.3);';
    document.body.appendChild(testGSAPButton);
    
    testGSAPButton.addEventListener('click', () => {
        console.log('🧪 Testing GSAP...');
        gsap.to(testGSAPButton, {
            rotation: 360,
            scale: 1.2,
            duration: 1,
            ease: 'back.out(1.7)',
            onComplete: () => {
                gsap.to(testGSAPButton, { rotation: 0, scale: 1, duration: 0.5 });
            }
        });
    });

    // Show Spiderman on section transitions
    ScrollTrigger.create({
        trigger: 'section',
        start: 'top 50%',
        onEnter: () => showSpiderman(),
        onLeave: () => hideSpiderman()
    });

    // Show Spiderman on page navigation
    document.addEventListener('click', (e) => {
        if (e.target.matches('.nav-link') || e.target.matches('.btn')) {
            showSpiderman();
            setTimeout(() => hideSpiderman(), 2000);
        }
    });

    // Show Spiderman on scroll (more frequent)
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY) > 100) {
            showSpiderman();
            setTimeout(() => hideSpiderman(), 1500);
            lastScrollY = currentScrollY;
        }
    });
}

function showSpiderman() {
    if (spidermanActive) return;
    
    const spiderman = document.getElementById('spiderman');
    console.log('🕷️ Spiderman is swinging in!', spiderman);
    spidermanActive = true;
    spiderman.classList.add('active');

    gsap.fromTo(spiderman, {
        x: -200,
        opacity: 0,
        scale: 0.5
    }, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });

    // Auto hide after 3 seconds
    setTimeout(() => {
        hideSpiderman();
    }, 3000);
}

function hideSpiderman() {
    if (!spidermanActive) return;
    
    const spiderman = document.getElementById('spiderman');
    spidermanActive = false;

    gsap.to(spiderman, {
        x: 200,
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'back.in(1.7)',
        onComplete: () => {
            spiderman.classList.remove('active');
        }
    });
}

// Test Train Animation Function
function testTrainAnimation() {
    console.log('🚂 Testing train animations!');
    
    const train = document.querySelector('.train');
    const locomotive = document.querySelector('.locomotive');
    const smoke = document.querySelectorAll('.smoke');
    
    if (train) {
        // Big train movement
        gsap.to(train, {
            x: 200,
            rotation: 10,
            scale: 1.3,
            duration: 2,
            ease: 'back.out(1.7)',
            onComplete: () => {
                gsap.to(train, {
                    x: 0,
                    rotation: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power2.out'
                });
            }
        });
    }
    
    if (locomotive) {
        // Locomotive bounce
        gsap.to(locomotive, {
            y: -20,
            rotation: 5,
            duration: 0.5,
            ease: 'power2.out',
            repeat: 3,
            yoyo: true
        });
    }
    
    if (smoke.length > 0) {
        // Smoke burst
        smoke.forEach((s, index) => {
            gsap.to(s, {
                y: -50,
                opacity: 0,
                scale: 2,
                duration: 1,
                delay: index * 0.1,
                ease: 'power2.out'
            });
        });
    }
}

// Initialize Counter Animations
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerHTML: 1 },
                    onUpdate: function() {
                        counter.innerHTML = Math.ceil(counter.innerHTML);
                    }
                });
            }
        });
    });
}

// Initialize FAQ Accordion
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Initialize Project Filter
function initializeProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                const shouldShow = filter === 'all' || categories.includes(filter);
                
                gsap.to(card, {
                    scale: shouldShow ? 1 : 0.8,
                    opacity: shouldShow ? 1 : 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    onComplete: () => {
                        card.style.display = shouldShow ? 'block' : 'none';
                    }
                });
            });
        });
    });
}

// Initialize Contact Form
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        gsap.to(notification, {
            x: 400,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => notification.remove()
        });
    }, 5000);
}

// Initialize Loading Screen
function initializeLoadingScreen() {
    // Create loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading';
    loadingScreen.innerHTML = '<div class="loading-train"></div>';
    document.body.appendChild(loadingScreen);
    
    // Hide loading screen after page load
    window.addEventListener('load', () => {
        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => loadingScreen.remove()
        });
    });
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: 'power2.inOut'
            });
        }
    }
});

// Parallax mouse movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    gsap.to('.hero-visual', {
        x: (mouseX - 0.5) * 20,
        y: (mouseY - 0.5) * 20,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Refresh scroll on window resize
window.addEventListener('resize', () => {
    if (scroll) {
        scroll.update();
    }
    ScrollTrigger.refresh();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .navbar.scrolled {
        background: rgba(10, 10, 10, 0.98);
        backdrop-filter: blur(15px);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);
