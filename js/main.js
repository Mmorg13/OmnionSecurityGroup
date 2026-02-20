/**
 * Omnion Security Group - Advanced Technical Interface
 * Showcasing sophisticated interaction design and engineering precision
 * 
 * Architecture:
 * - Class-based modular design
 * - Performance-optimized animations
 * - Advanced particle systems
 * - Magnetic UI interactions
 * - Real-time visual feedback
 */

class TechnicalInterface {
    constructor() {
        this.isLoaded = false;
        this.animations = new Map();
        this.performanceMonitor = {
            startTime: performance.now(),
            interactions: 0,
            frameRate: 0
        };
        this.initialize();
    }

    initialize() {
        this.initializeNavigation();
        this.initializeHeroAnimations();
        this.initializeParticleSystem();
        this.initializeMagneticButtons();
        this.initializeScrollEffects();
        this.initializeNetworkVisualization();
        this.initializePerformanceMonitoring();
        
        this.isLoaded = true;
        console.log('🚀 Omnion Technical Interface: Systems Online');
        console.log('⚡ Load Time:', (performance.now() - this.performanceMonitor.startTime).toFixed(2) + 'ms');
    }

    // Advanced Navigation System
    initializeNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (navToggle && mainNav) {
            // Advanced menu toggle with sophisticated animations
            navToggle.addEventListener('click', () => {
                const isActive = mainNav.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', isActive);
                
                this.animateMenuIcon(navToggle, isActive);
                this.createNavRipple(navToggle);
                this.performanceMonitor.interactions++;
            });
            
            // Intelligent link handling with smooth transitions
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.addEventListener('click', (e) => {
                    mainNav.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    this.animateMenuIcon(navToggle, false);
                    
                    // Add smooth page transition effect
                    this.createPageTransition();
                });
            });
        }
    }

    animateMenuIcon(toggle, isActive) {
        const spans = toggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            if (isActive) {
                switch(index) {
                    case 0:
                        span.style.transform = 'rotate(45deg) translate(6px, 6px)';
                        break;
                    case 1:
                        span.style.transform = 'scaleX(0)';
                        span.style.opacity = '0';
                        break;
                    case 2:
                        span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
                        break;
                }
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    }

    createNavRipple(element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 113, 227, 0.3);
            width: 40px;
            height: 40px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: nav-ripple 0.4s ease-out;
            pointer-events: none;
            z-index: -1;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 400);
    }

    // Sophisticated Hero Animations
    initializeHeroAnimations() {
        this.observeElementsForAnimation();
        this.initializeWordRevealEffects();
        this.animateMetricCards();
        this.initializeTypingEffect();
    }

    observeElementsForAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.triggerElementAnimations(entry.target);
                }
            });
        }, { 
            threshold: 0.1, 
            rootMargin: '0px 0px -50px 0px' 
        });

        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }

    initializeWordRevealEffects() {
        const wordElements = document.querySelectorAll('.word-reveal');
        wordElements.forEach((word, index) => {
            word.style.animationDelay = `${0.3 + (index * 0.15)}s`;
            
            // Add cursor effect to last word
            if (index === wordElements.length - 1) {
                setTimeout(() => {
                    this.addBlinkingCursor(word);
                }, (0.3 + (index * 0.15) + 1) * 1000);
            }
        });
    }

    addBlinkingCursor(element) {
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.cssText = `
            color: var(--accent);
            animation: cursor-blink 1s infinite;
            margin-left: 2px;
        `;
        element.appendChild(cursor);
        
        setTimeout(() => cursor.remove(), 3000);
    }

    animateMetricCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach((card, index) => {
            // Advanced hover interactions
            card.addEventListener('mouseenter', () => {
                this.triggerCardAnimation(card);
                this.createHoverGlow(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.removeHoverGlow(card);
            });
            
            // Staggered entrance animations
            setTimeout(() => {
                card.classList.add('animate-in');
            }, index * 150);
        });
    }

    triggerCardAnimation(card) {
        const circle = card.querySelector('.metric-progress');
        const bars = card.querySelectorAll('.bar');
        const nodes = card.querySelectorAll('.network-node');
        
        if (circle) {
            circle.style.animation = 'none';
            requestAnimationFrame(() => {
                circle.style.animation = 'progress-draw 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            });
        }
        
        if (bars.length > 0) {
            bars.forEach((bar, i) => {
                bar.style.animation = 'none';
                bar.style.transform = 'scaleY(0)';
                setTimeout(() => {
                    bar.style.animation = 'bar-grow 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                }, i * 80);
            });
        }
        
        if (nodes.length > 0) {
            nodes.forEach((node, i) => {
                setTimeout(() => {
                    node.style.animation = 'node-pulse 1.5s ease-in-out infinite';
                }, i * 100);
            });
        }
    }

    createHoverGlow(element) {
        const glow = document.createElement('div');
        glow.className = 'hover-glow';
        glow.style.cssText = `
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, transparent, rgba(0, 113, 227, 0.1), transparent);
            border-radius: 18px;
            opacity: 0;
            z-index: -1;
            animation: glow-pulse 2s ease-in-out infinite;
        `;
        
        element.style.position = 'relative';
        element.appendChild(glow);
    }

    removeHoverGlow(element) {
        const glow = element.querySelector('.hover-glow');
        if (glow) glow.remove();
    }

    // Advanced Particle System
    initializeParticleSystem() {
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach((particle, index) => {
            this.enhanceParticle(particle, index);
        });
        
        // Create additional dynamic particles
        this.createDynamicParticles();
    }

    enhanceParticle(particle, index) {
        const randomDelay = Math.random() * 3;
        const randomDuration = 8 + Math.random() * 4;
        const randomScale = 0.5 + Math.random() * 0.8;
        
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;
        particle.style.setProperty('--scale', randomScale);
        
        // Interactive particle behavior
        particle.addEventListener('mouseenter', () => {
            particle.style.transform = `scale(${randomScale * 3}) translateZ(0)`;
            particle.style.opacity = '1';
            particle.style.filter = 'blur(0px)';
            
            // Create particle trail effect
            this.createParticleTrail(particle);
        });
        
        particle.addEventListener('mouseleave', () => {
            particle.style.transform = '';
            particle.style.opacity = '';
            particle.style.filter = '';
        });
    }

    createDynamicParticles() {
        const container = document.querySelector('.floating-particles');
        if (!container) return;
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = this.generateDynamicParticle();
                container.appendChild(particle);
                
                setTimeout(() => particle.remove(), 10000);
            }, i * 2000);
        }
    }

    generateDynamicParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle dynamic-particle';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const scale = 0.3 + Math.random() * 0.4;
        const delay = Math.random() * 2;
        
        particle.style.cssText = `
            --x: ${x}%;
            --y: ${y}%;
            --scale: ${scale};
            --delay: ${delay}s;
            opacity: 0;
            animation: particle-spawn 0.5s ease-out forwards, particle-drift 10s ease-in-out ${delay}s infinite;
        `;
        
        return particle;
    }

    createParticleTrail(particle) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const trail = particle.cloneNode();
                trail.style.opacity = '0.3';
                trail.style.transform = `scale(0.5) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
                trail.style.animation = 'fade-out 0.8s ease-out forwards';
                
                particle.parentNode.appendChild(trail);
                setTimeout(() => trail.remove(), 800);
            }, i * 100);
        }
    }

    // Magnetic Button System (Apple-inspired)
    initializeMagneticButtons() {
        const magneticBtns = document.querySelectorAll('.magnetic-btn, .holographic-btn');
        
        magneticBtns.forEach(btn => {
            this.enhanceMagneticButton(btn);
        });
    }

    enhanceMagneticButton(btn) {
        let isHovering = false;
        
        btn.addEventListener('mouseenter', () => {
            isHovering = true;
            this.createButtonAura(btn);
        });
        
        btn.addEventListener('mousemove', (e) => {
            if (isHovering) {
                this.magneticEffect(btn, e);
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            isHovering = false;
            this.resetMagneticEffect(btn);
            this.removeButtonAura(btn);
        });
        
        btn.addEventListener('click', (e) => {
            this.createAdvancedRipple(btn, e);
            this.performanceMonitor.interactions++;
        });
    }

    magneticEffect(element, event) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const x = (event.clientX - centerX) * 0.25;
        const y = (event.clientY - centerY) * 0.25;
        
        element.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
        
        const bg = element.querySelector('.btn-bg');
        if (bg) {
            bg.style.transform = `scale(1.05) translate(${x * 0.3}px, ${y * 0.3}px)`;
        }
        
        // Add subtle rotation based on position
        const rotation = (x + y) * 0.02;
        element.style.transform += ` rotate(${rotation}deg)`;
    }

    resetMagneticEffect(element) {
        element.style.transform = '';
        element.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const bg = element.querySelector('.btn-bg');
        if (bg) {
            bg.style.transform = '';
            bg.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        setTimeout(() => {
            element.style.transition = '';
            if (bg) bg.style.transition = '';
        }, 500);
    }

    createButtonAura(button) {
        const aura = document.createElement('div');
        aura.className = 'button-aura';
        aura.style.cssText = `
            position: absolute;
            inset: -10px;
            background: radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%);
            border-radius: 60px;
            opacity: 0;
            z-index: -1;
            animation: aura-pulse 2s ease-in-out infinite;
        `;
        
        button.style.position = 'relative';
        button.appendChild(aura);
    }

    removeButtonAura(button) {
        const aura = button.querySelector('.button-aura');
        if (aura) aura.remove();
    }

    createAdvancedRipple(button, event) {
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            animation: advanced-ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            z-index: 1;
        `;
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    }

    // Advanced Scroll Effects
    initializeScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollPercent = scrollY / (document.body.scrollHeight - windowHeight);
            
            // Advanced parallax effects
            this.updateParallaxElements(scrollY, scrollPercent);
            
            // Dynamic particle movement
            this.updateParticlePositions(scrollY);
            
            // Header blur effect
            this.updateHeaderBlur(scrollY);
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
        
        // Enhanced smooth scrolling
        this.initializeAdvancedScrolling();
    }

    updateParallaxElements(scrollY, scrollPercent) {
        const grid = document.querySelector('.cyber-grid');
        if (grid) {
            const speed = scrollY * 0.3;
            grid.style.transform = `translate(${speed * 0.1}px, ${speed * 0.05}px) rotate(${scrollPercent * 2}deg)`;
        }
        
        const network = document.querySelector('.neural-network');
        if (network) {
            network.style.transform = `translateY(${scrollY * 0.1}px)`;
            network.style.opacity = 1 - (scrollPercent * 0.5);
        }
    }

    updateParticlePositions(scrollY) {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = ((index % 4) + 1) * 0.15;
            const offset = scrollY * speed;
            const rotation = scrollY * 0.1;
            
            particle.style.transform = `translateY(${offset}px) rotate(${rotation}deg)`;
        });
    }

    updateHeaderBlur(scrollY) {
        const header = document.querySelector('.site-header');
        if (header) {
            const blur = Math.min(scrollY / 100, 1) * 20;
            header.style.backdropFilter = `saturate(180%) blur(${20 + blur}px)`;
        }
    }

    initializeAdvancedScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    // Custom smooth scroll with easing
                    this.smoothScrollTo(target, 1000);
                }
            });
        });
    }

    smoothScrollTo(target, duration) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const startTime = performance.now();
        
        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
        
        const scrollAnimation = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + (distance * ease));
            
            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        };
        
        requestAnimationFrame(scrollAnimation);
    }

    // Network Visualization System
    initializeNetworkVisualization() {
        const networkSvg = document.querySelector('.network-svg');
        if (!networkSvg) return;
        
        this.createDynamicNetwork(networkSvg);
        this.animateNetworkConnections();
    }

    createDynamicNetwork(svg) {
        const nodes = this.generateNetworkNodes();
        const connections = this.generateNetworkConnections(nodes);
        
        // Create animated connections
        connections.forEach((conn, index) => {
            const line = this.createNetworkLine(conn, index);
            svg.appendChild(line);
            
            // Add data flow animation
            setTimeout(() => {
                this.createDataFlow(svg, conn);
            }, index * 300);
        });
        
        // Add pulsing nodes
        nodes.forEach((node, index) => {
            const circle = this.createNetworkNode(node, index);
            svg.appendChild(circle);
        });
    }

    generateNetworkNodes() {
        const nodes = [];
        for (let i = 0; i < 8; i++) {
            nodes.push({
                x: 100 + (i % 4) * 250 + Math.random() * 50,
                y: 150 + Math.floor(i / 4) * 200 + Math.random() * 50,
                id: i
            });
        }
        return nodes;
    }

    generateNetworkConnections(nodes) {
        const connections = [];
        for (let i = 0; i < nodes.length - 1; i++) {
            if (Math.random() > 0.4) {
                connections.push({
                    start: nodes[i],
                    end: nodes[i + 1],
                    strength: Math.random()
                });
            }
        }
        return connections;
    }

    createNetworkLine(connection, index) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', connection.start.x);
        line.setAttribute('y1', connection.start.y);
        line.setAttribute('x2', connection.end.x);
        line.setAttribute('y2', connection.end.y);
        line.setAttribute('stroke', 'url(#lineGradient)');
        line.setAttribute('stroke-width', 2 + connection.strength * 2);
        line.setAttribute('filter', 'url(#glow)');
        line.style.opacity = '0';
        line.style.animation = `line-reveal 1s ease-out ${index * 0.2}s forwards`;
        
        return line;
    }

    createNetworkNode(node, index) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', 4 + Math.random() * 3);
        circle.setAttribute('fill', 'var(--accent)');
        circle.setAttribute('filter', 'url(#glow)');
        circle.style.animation = `node-appear 0.5s ease-out ${index * 0.1}s forwards, node-pulse 3s ease-in-out ${index * 0.5}s infinite`;
        
        return circle;
    }

    // Performance Monitoring System
    initializePerformanceMonitoring() {
        // Monitor frame rate
        let frameCount = 0;
        const startTime = Date.now();
        
        const countFrames = () => {
            frameCount++;
            requestAnimationFrame(countFrames);
            
            if (frameCount % 60 === 0) {
                const elapsed = (Date.now() - startTime) / 1000;
                this.performanceMonitor.frameRate = Math.round(frameCount / elapsed);
            }
        };
        
        requestAnimationFrame(countFrames);
        
        // Log performance metrics every 30 seconds
        setInterval(() => {
            console.log('📊 Performance Metrics:', {
                frameRate: this.performanceMonitor.frameRate + ' FPS',
                interactions: this.performanceMonitor.interactions,
                memoryUsage: performance.memory ? 
                    Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + ' MB' : 
                    'N/A',
                uptime: Math.round((performance.now() - this.performanceMonitor.startTime) / 1000) + 's'
            });
        }, 30000);
    }

    // Utility Methods
    createPageTransition() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: linear-gradient(45deg, rgba(0, 113, 227, 0.1), rgba(0, 113, 227, 0.05));
            opacity: 0;
            z-index: 10000;
            pointer-events: none;
            animation: page-transition 0.3s ease-in-out;
        `;
        
        document.body.appendChild(overlay);
        setTimeout(() => overlay.remove(), 300);
    }

    getSystemStats() {
        return {
            loadTime: (performance.now() - this.performanceMonitor.startTime).toFixed(2) + 'ms',
            frameRate: this.performanceMonitor.frameRate + ' FPS',
            interactions: this.performanceMonitor.interactions,
            animationsActive: this.animations.size,
            memoryUsage: performance.memory ? 
                Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + ' MB' : 
                'N/A'
        };
    }
}

// Enhanced CSS Animations
const advancedStyles = document.createElement('style');
advancedStyles.textContent = `
    @keyframes nav-ripple {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
    
    @keyframes cursor-blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    @keyframes advanced-ripple {
        0% { transform: scale(0); opacity: 1; }
        50% { opacity: 0.8; }
        100% { transform: scale(1); opacity: 0; }
    }
    
    @keyframes glow-pulse {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
    
    @keyframes aura-pulse {
        0%, 100% { opacity: 0; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes particle-spawn {
        0% { opacity: 0; transform: scale(0); }
        100% { opacity: 0.6; transform: scale(1); }
    }
    
    @keyframes fade-out {
        0% { opacity: 0.3; }
        100% { opacity: 0; }
    }
    
    @keyframes line-reveal {
        0% { 
            stroke-dasharray: 0 1000; 
            opacity: 0; 
        }
        50% { 
            opacity: 1; 
        }
        100% { 
            stroke-dasharray: 1000 0; 
            opacity: 1; 
        }
    }
    
    @keyframes node-appear {
        0% { 
            opacity: 0; 
            transform: scale(0); 
        }
        100% { 
            opacity: 1; 
            transform: scale(1); 
        }
    }
    
    @keyframes page-transition {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    .animate-in {
        animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(60px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Performance optimizations */
    .particle, .metric-card, .magnetic-btn {
        will-change: transform;
    }
    
    .hero-bg, .cyber-grid {
        transform: translateZ(0);
    }
`;

document.head.appendChild(advancedStyles);

// Initialize the Technical Interface
document.addEventListener('DOMContentLoaded', () => {
    window.omnionInterface = new TechnicalInterface();
    
    // Add developer console easter egg
    console.log(`
    ╔══════════════════════════════════════════════════╗
    ║           OMNION SECURITY GROUP                  ║
    ║         Advanced Technical Interface             ║
    ║                                                  ║
    ║  🛡️  Enterprise Cybersecurity Solutions          ║
    ║  ⚡  Powered by Advanced UI Engineering          ║
    ║  🔥  Built with Technical Excellence            ║
    ║                                                  ║
    ║  Type: omnionInterface.getSystemStats()          ║
    ║  for real-time performance metrics               ║
    ╚══════════════════════════════════════════════════╝
    `);
});

// Enhanced Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form, #contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn?.textContent || 'Submit';
            
            if (submitBtn) {
                // Advanced submission feedback
                submitBtn.innerHTML = `
                    <span style="display: inline-flex; align-items: center; gap: 8px;">
                        <div style="width: 16px; height: 16px; border: 2px solid currentColor; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                        Processing...
                    </span>
                `;
                submitBtn.style.transform = 'scale(0.98)';
                
                // Simulate advanced processing
                setTimeout(() => {
                    submitBtn.innerHTML = `
                        <span style="display: inline-flex; align-items: center; gap: 8px;">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Message Transmitted
                        </span>
                    `;
                    submitBtn.style.background = '#28a745';
                    submitBtn.style.transform = 'scale(1)';
                    
                    // Reset form
                    setTimeout(() => {
                        this.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = '';
                        submitBtn.style.transform = '';
                    }, 3000);
                }, 1500);
            }
            
            window.omnionInterface?.performanceMonitor.interactions++;
        });
    }
});

// Add spin animation for loading state
const spinStyles = document.createElement('style');
spinStyles.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinStyles);