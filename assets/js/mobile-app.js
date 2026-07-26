/* BetterClaver - Mobile App Native JavaScript
   Manages fixed bottom tab bar navigation, slide-up drawer, and mobile app interactions.
   Only activates when window width <= 768px.
*/

(function () {
  'use strict';

  function initMobileAppNav() {
    // Only inject on mobile viewports
    if (window.innerWidth > 768) {
      removeExistingMobileApp();
      return;
    }

    if (document.querySelector('.mobile-tab-bar')) return; // Already initialized

    var body = document.body;
    var currentPage = body.getAttribute('data-page') || detectCurrentPage();

    // ─── Render Bottom Tab Bar ──────────────────────────────────────────
    var tabBar = document.createElement('nav');
    tabBar.className = 'mobile-tab-bar';
    tabBar.setAttribute('aria-label', 'Mobile Bottom Navigation');

    tabBar.innerHTML =
      '<a href="/" class="mobile-tab-item ' + (currentPage === 'home' ? 'active' : '') + '" data-tab="home">' +
        '<i class="bi ' + (currentPage === 'home' ? 'bi-house-fill' : 'bi-house') + '"></i>' +
        '<span>Home</span>' +
      '</a>' +
      '<a href="/services/" class="mobile-tab-item ' + (currentPage === 'services' ? 'active' : '') + '" data-tab="services">' +
        '<i class="bi ' + (currentPage === 'services' ? 'bi-grid-fill' : 'bi-grid') + '"></i>' +
        '<span>Services</span>' +
      '</a>' +
      '<a href="/emergency/" class="mobile-tab-item mobile-tab-item--emergency ' + (currentPage === 'emergency' ? 'active' : '') + '" data-tab="emergency">' +
        '<i class="bi ' + (currentPage === 'emergency' ? 'bi-broadcast-pin' : 'bi-broadcast') + '">' +
          '<span class="mobile-tab-emergency-pulse"></span>' +
        '</i>' +
        '<span>Emergency</span>' +
      '</a>' +
      '<a href="/government/" class="mobile-tab-item ' + (currentPage === 'government' ? 'active' : '') + '" data-tab="government">' +
        '<i class="bi ' + (currentPage === 'government' ? 'bi-building-fill' : 'bi-building') + '"></i>' +
        '<span>Govt</span>' +
      '</a>' +
      '<button type="button" class="mobile-tab-item ' + (currentPage === 'more' ? 'active' : '') + '" id="mobile-tab-more-btn" data-tab="more" aria-label="Open More Menu">' +
        '<i class="bi bi-three-dots"></i>' +
        '<span>More</span>' +
      '</button>';

    body.appendChild(tabBar);

    // ─── Render Slide-Up "More" Drawer ─────────────────────────────────
    var overlay = document.createElement('div');
    overlay.className = 'mobile-drawer-overlay';
    overlay.id = 'mobile-drawer-overlay';

    var drawer = document.createElement('div');
    drawer.className = 'mobile-drawer-sheet';
    drawer.id = 'mobile-drawer-sheet';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'More Navigation Options');

    drawer.innerHTML =
      '<div class="mobile-drawer-drag-handle"></div>' +
      '<div class="mobile-drawer-header">' +
        '<h3 class="mobile-drawer-title"><i class="bi bi-app-indicator"></i> More Options</h3>' +
        '<button type="button" class="mobile-drawer-close" id="mobile-drawer-close-btn" aria-label="Close Menu">' +
          '<i class="bi bi-x-lg"></i>' +
        '</button>' +
      '</div>' +
      '<div class="mobile-drawer-body">' +
        '<div class="mobile-drawer-grid">' +
          '<a href="/jobs/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-briefcase-fill"></i></div>' +
            '<span>Careers & Jobs</span>' +
          '</a>' +
          '<a href="/budget/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-pie-chart-fill"></i></div>' +
            '<span>Transparency</span>' +
          '</a>' +
          '<a href="/government/barangays.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-geo-alt-fill"></i></div>' +
            '<span>Barangays</span>' +
          '</a>' +
          '<a href="/legislative/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-journal-text"></i></div>' +
            '<span>Legislative</span>' +
          '</a>' +
          '<a href="/tourism/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-compass-fill"></i></div>' +
            '<span>Tourism</span>' +
          '</a>' +
          '<a href="/contact/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-telephone-fill"></i></div>' +
            '<span>Contact Us</span>' +
          '</a>' +
          '<a href="/about/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-info-circle-fill"></i></div>' +
            '<span>About Project</span>' +
          '</a>' +
          '<a href="/faq/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-question-circle-fill"></i></div>' +
            '<span>FAQ & Help</span>' +
          '</a>' +
        '</div>' +
        '<div class="mobile-drawer-lang-wrap">' +
          '<span class="mobile-drawer-lang-title"><i class="bi bi-translate"></i> Select Language</span>' +
          '<div class="lang-selector">' +
            '<button type="button" class="btn btn-secondary btn-sm lang-btn" data-lang="en">EN</button>' +
            '<button type="button" class="btn btn-secondary btn-sm lang-btn" data-lang="fil">FIL</button>' +
            '<button type="button" class="btn btn-secondary btn-sm lang-btn" data-lang="sug">SUG</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    body.appendChild(overlay);
    body.appendChild(drawer);

    // ─── Attach Events ────────────────────────────────────────────────
    var moreBtn = document.getElementById('mobile-tab-more-btn');
    var closeBtn = document.getElementById('mobile-drawer-close-btn');

    if (moreBtn) {
      moreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        triggerHaptic();
        openDrawer();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        triggerHaptic();
        closeDrawer();
      });
    }

    overlay.addEventListener('click', closeDrawer);

    // Haptic feedback on all mobile tabs
    var tabItems = tabBar.querySelectorAll('.mobile-tab-item');
    tabItems.forEach(function (item) {
      item.addEventListener('click', function () {
        triggerHaptic();
      });
    });

    // Touch drag down to close drawer
    var touchStartY = 0;
    drawer.addEventListener('touchstart', function (e) {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    drawer.addEventListener('touchmove', function (e) {
      var touchY = e.touches[0].clientY;
      var diffY = touchY - touchStartY;
      if (diffY > 60) {
        closeDrawer();
      }
    }, { passive: true });
  }

  function openDrawer() {
    var overlay = document.getElementById('mobile-drawer-overlay');
    var drawer = document.getElementById('mobile-drawer-sheet');
    if (overlay && drawer) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    var overlay = document.getElementById('mobile-drawer-overlay');
    var drawer = document.getElementById('mobile-drawer-sheet');
    if (overlay && drawer) {
      overlay.classList.remove('active');
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function removeExistingMobileApp() {
    var bar = document.querySelector('.mobile-tab-bar');
    var overlay = document.getElementById('mobile-drawer-overlay');
    var drawer = document.getElementById('mobile-drawer-sheet');
    if (bar) bar.remove();
    if (overlay) overlay.remove();
    if (drawer) drawer.remove();
  }

  function triggerHaptic() {
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }

  function detectCurrentPage() {
    var path = window.location.pathname.toLowerCase();
    if (path === '/' || path.indexOf('/index.html') !== -1) return 'home';
    if (path.indexOf('/services/') !== -1 || path.indexOf('/service-details/') !== -1) return 'services';
    if (path.indexOf('/emergency/') !== -1) return 'emergency';
    if (path.indexOf('/government/') !== -1 && path.indexOf('/barangays.html') === -1) return 'government';
    return 'more';
  }

  // Initialize on DOM load and window resize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileAppNav);
  } else {
    initMobileAppNav();
  }

  window.addEventListener('resize', function () {
    initMobileAppNav();
  });
})();
