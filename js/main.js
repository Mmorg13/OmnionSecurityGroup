/* Omnion marketing site — interactions (v2)
   Progressive enhancement only; the site is fully readable without JS. */
(function () {
  'use strict';

  // Year stamp
  document.querySelectorAll('#year, [data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Sticky header state
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 12); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Animated counters ([data-count] holds the target number)
  var counters = document.querySelectorAll('[data-count]');
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var setFinal = function (el) {
    el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
  };
  var animateCount = function (el) {
    if (reducedMotion) { setFinal(el); return; }
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400, start = null;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(0)) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(setFinal);
  }

  // Add extra radar blips at random positions (adds life to the hero visual)
  document.querySelectorAll('.radar').forEach(function (radar) {
    for (var i = 0; i < 3; i++) {
      var b = document.createElement('span');
      b.className = 'radar__blip';
      b.style.top = (20 + Math.random() * 55) + '%';
      b.style.left = (20 + Math.random() * 55) + '%';
      b.style.animationDelay = (Math.random() * 2.4) + 's';
      radar.appendChild(b);
    }
  });
})();
