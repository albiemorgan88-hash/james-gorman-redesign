/* ============================================
   THE WALL GROUP — Main JS
   ============================================ */

(function() {
    'use strict';

    // ---- Nav scroll effect ----
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    function handleScroll() {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ---- Mobile menu ----
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }

    // ---- Hero visible ----
    const hero = document.querySelector('.hero');
    if (hero) {
        requestAnimationFrame(function() {
            hero.classList.add('visible');
        });
    }

    // ---- Image load transitions ----
    document.querySelectorAll('img').forEach(function(img) {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
        }
    });

    // ---- IntersectionObserver fade-in ----
    var fadeEls = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window && fadeEls.length) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        fadeEls.forEach(function(el) {
            observer.observe(el);
        });
    } else {
        fadeEls.forEach(function(el) {
            el.classList.add('visible');
        });
    }

    // ---- Animated counter for stats ----
    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function animateCounter(el, target, suffix, duration) {
        var start = performance.now();
        function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = easeOutQuart(progress);
            var current = Math.round(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    var statNumbers = document.querySelectorAll('.stat-number');
    if ('IntersectionObserver' in window && statNumbers.length) {
        var statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = '1';
                    var text = entry.target.textContent.trim();
                    // Parse number and suffix
                    var match = text.match(/^(\d+)(.*)/);
                    if (match) {
                        var num = parseInt(match[1], 10);
                        var suffix = match[2] || '';
                        animateCounter(entry.target, num, suffix, 2000);
                    }
                    // Special cases like "24/7" — don't animate
                }
            });
        }, {
            threshold: 0.3
        });

        statNumbers.forEach(function(el) {
            statsObserver.observe(el);
        });
    }

    // ---- Page transitions ----
    document.querySelectorAll('a[href]').forEach(function(link) {
        var href = link.getAttribute('href');
        // Only internal .html links
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('mailto')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                setTimeout(function() {
                    window.location.href = href;
                }, 200);
            });
        }
    });

    // ---- Inner page nav: always start scrolled style ----
    if (!hero && nav) {
        nav.classList.add('scrolled');
    }
})();
