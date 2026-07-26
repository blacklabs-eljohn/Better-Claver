/* BetterClaver - Mobile App Native JavaScript
   Manages fixed bottom tab bar navigation, dedicated slide-up bottom sheets for Services, Govt, and More.
   Only activates when window width <= 768px.
*/

(function () {
  'use strict';

  function initMobileAppNav() {
    // Only activate on mobile viewports
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
      '<button type="button" class="mobile-tab-item ' + (currentPage === 'services' ? 'active' : '') + '" id="mobile-tab-services-btn" data-tab="services" aria-label="Open Services Menu">' +
        '<i class="bi ' + (currentPage === 'services' ? 'bi-grid-fill' : 'bi-grid') + '"></i>' +
        '<span>Services</span>' +
      '</button>' +
      '<a href="/emergency/" class="mobile-tab-item mobile-tab-item--emergency ' + (currentPage === 'emergency' ? 'active' : '') + '" data-tab="emergency">' +
        '<i class="bi ' + (currentPage === 'emergency' ? 'bi-broadcast-pin' : 'bi-broadcast') + '">' +
          '<span class="mobile-tab-emergency-pulse"></span>' +
        '</i>' +
        '<span>Emergency</span>' +
      '</a>' +
      '<button type="button" class="mobile-tab-item ' + (currentPage === 'government' ? 'active' : '') + '" id="mobile-tab-govt-btn" data-tab="government" aria-label="Open Government Menu">' +
        '<i class="bi ' + (currentPage === 'government' ? 'bi-building-fill' : 'bi-building') + '"></i>' +
        '<span>Govt</span>' +
      '</button>' +
      '<button type="button" class="mobile-tab-item ' + (currentPage === 'more' ? 'active' : '') + '" id="mobile-tab-more-btn" data-tab="more" aria-label="Open More Menu">' +
        '<i class="bi bi-three-dots"></i>' +
        '<span>More</span>' +
      '</button>';

    body.appendChild(tabBar);

    // ─── Render Shared Overlay ──────────────────────────────────────────
    var overlay = document.createElement('div');
    overlay.className = 'mobile-drawer-overlay';
    overlay.id = 'mobile-drawer-overlay';
    body.appendChild(overlay);

    // ─── 1. Services Bottom Sheet Drawer ───────────────────────────────
    var servicesSheet = document.createElement('div');
    servicesSheet.className = 'mobile-drawer-sheet';
    servicesSheet.id = 'mobile-drawer-services-sheet';
    servicesSheet.setAttribute('role', 'dialog');
    servicesSheet.setAttribute('aria-label', 'Services Dropdown Menu');

    var rootPath = getRootPath();

    servicesSheet.innerHTML =
      '<div class="mobile-drawer-drag-handle"></div>' +
      '<div class="mobile-drawer-header">' +
        '<h3 class="mobile-drawer-title"><i class="bi bi-grid-fill"></i> Municipal Services</h3>' +
        '<button type="button" class="mobile-drawer-close" data-close="services" aria-label="Close Menu">' +
          '<i class="bi bi-x-lg"></i>' +
        '</button>' +
      '</div>' +
      '<div class="mobile-drawer-body">' +
        '<a href="' + rootPath + 'services/" class="mobile-drawer-main-link">' +
          '<span>Browse All Services Directory</span> <i class="bi bi-arrow-right"></i>' +
        '</a>' +
        '<div class="mobile-drawer-grid">' +
          '<a href="' + rootPath + 'services/certificates.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-file-earmark-text-fill"></i></div>' +
            '<span>Certificates</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/business.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-shop"></i></div>' +
            '<span>Business Permits</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/tax-payments.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-cash-coin"></i></div>' +
            '<span>Tax Payments</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/social-services.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-people-fill"></i></div>' +
            '<span>Social Services</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/health.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-heart-pulse-fill"></i></div>' +
            '<span>Health & RHU</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/agriculture.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-tree-fill"></i></div>' +
            '<span>Agriculture</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/infrastructure.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-tools"></i></div>' +
            '<span>Infrastructure</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/education.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-mortarboard-fill"></i></div>' +
            '<span>Education</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/public-safety.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-shield-check"></i></div>' +
            '<span>Public Safety</span>' +
          '</a>' +
          '<a href="' + rootPath + 'services/environment.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-flower1"></i></div>' +
            '<span>Environment</span>' +
          '</a>' +
        '</div>' +
      '</div>';
    body.appendChild(servicesSheet);

    // ─── 2. Govt Bottom Sheet Drawer ──────────────────────────────────
    var govtSheet = document.createElement('div');
    govtSheet.className = 'mobile-drawer-sheet';
    govtSheet.id = 'mobile-drawer-govt-sheet';
    govtSheet.setAttribute('role', 'dialog');
    govtSheet.setAttribute('aria-label', 'Government Dropdown Menu');

    govtSheet.innerHTML =
      '<div class="mobile-drawer-drag-handle"></div>' +
      '<div class="mobile-drawer-header">' +
        '<h3 class="mobile-drawer-title"><i class="bi bi-building-fill"></i> LGU Government</h3>' +
        '<button type="button" class="mobile-drawer-close" data-close="govt" aria-label="Close Menu">' +
          '<i class="bi bi-x-lg"></i>' +
        '</button>' +
      '</div>' +
      '<div class="mobile-drawer-body">' +
        '<a href="' + rootPath + 'government/" class="mobile-drawer-main-link">' +
          '<span>Government Portal Overview</span> <i class="bi bi-arrow-right"></i>' +
        '</a>' +
        '<div class="mobile-drawer-grid">' +
          '<a href="' + rootPath + 'government/profile.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-info-circle-fill"></i></div>' +
            '<span>Municipal Profile</span>' +
          '</a>' +
          '<a href="' + rootPath + 'government/index.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-person-badge-fill"></i></div>' +
            '<span>Elected Officials</span>' +
          '</a>' +
          '<a href="' + rootPath + 'government/barangays.html" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-geo-alt-fill"></i></div>' +
            '<span>14 Barangays</span>' +
          '</a>' +
          '<a href="' + rootPath + 'emergency/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-broadcast-pin"></i></div>' +
            '<span>Emergency Center</span>' +
          '</a>' +
          '<a href="' + rootPath + 'tourism/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-compass-fill"></i></div>' +
            '<span>Tourism & Festivals</span>' +
          '</a>' +
          '<a href="' + rootPath + 'legislative/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-journal-text"></i></div>' +
            '<span>Legislative Archive</span>' +
          '</a>' +
        '</div>' +
      '</div>';
    body.appendChild(govtSheet);

    // ─── 3. More Bottom Sheet Drawer ──────────────────────────────────
    var moreSheet = document.createElement('div');
    moreSheet.className = 'mobile-drawer-sheet';
    moreSheet.id = 'mobile-drawer-more-sheet';
    moreSheet.setAttribute('role', 'dialog');
    moreSheet.setAttribute('aria-label', 'More Navigation Options');

    moreSheet.innerHTML =
      '<div class="mobile-drawer-drag-handle"></div>' +
      '<div class="mobile-drawer-header">' +
        '<h3 class="mobile-drawer-title"><i class="bi bi-three-dots"></i> More Options</h3>' +
        '<button type="button" class="mobile-drawer-close" data-close="more" aria-label="Close Menu">' +
          '<i class="bi bi-x-lg"></i>' +
        '</button>' +
      '</div>' +
      '<div class="mobile-drawer-body">' +
        '<div class="mobile-drawer-grid">' +
          '<a href="' + rootPath + 'jobs/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-briefcase-fill"></i></div>' +
            '<span>Careers & Jobs</span>' +
          '</a>' +
          '<a href="' + rootPath + 'budget/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-pie-chart-fill"></i></div>' +
            '<span>Transparency</span>' +
          '</a>' +
          '<a href="' + rootPath + 'contact/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-telephone-fill"></i></div>' +
            '<span>Contact Us</span>' +
          '</a>' +
          '<a href="' + rootPath + 'about/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-info-circle-fill"></i></div>' +
            '<span>About Project</span>' +
          '</a>' +
          '<a href="' + rootPath + 'faq/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-question-circle-fill"></i></div>' +
            '<span>FAQ & Help</span>' +
          '</a>' +
          '<a href="' + rootPath + 'news/" class="mobile-drawer-item">' +
            '<div class="mobile-drawer-item-icon"><i class="bi bi-newspaper"></i></div>' +
            '<span>News & Updates</span>' +
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
    body.appendChild(moreSheet);

    // ─── Attach Drawer Button Events ──────────────────────────────────
    var servicesBtn = document.getElementById('mobile-tab-services-btn');
    var govtBtn = document.getElementById('mobile-tab-govt-btn');
    var moreBtn = document.getElementById('mobile-tab-more-btn');

    if (servicesBtn) {
      servicesBtn.addEventListener('click', function (e) {
        e.preventDefault();
        triggerHaptic();
        openDrawer('services');
      });
    }

    if (govtBtn) {
      govtBtn.addEventListener('click', function (e) {
        e.preventDefault();
        triggerHaptic();
        openDrawer('govt');
      });
    }

    if (moreBtn) {
      moreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        triggerHaptic();
        openDrawer('more');
      });
    }

    // Close buttons
    var closeBtns = document.querySelectorAll('.mobile-drawer-close');
    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        triggerHaptic();
        closeAllDrawers();
      });
    });

    overlay.addEventListener('click', closeAllDrawers);

    // Haptic feedback on all tabs
    var tabItems = tabBar.querySelectorAll('.mobile-tab-item');
    tabItems.forEach(function (item) {
      item.addEventListener('click', function () {
        triggerHaptic();
      });
    });

    // Touch drag down to close
    var allSheets = [servicesSheet, govtSheet, moreSheet];
    allSheets.forEach(function (sheet) {
      var touchStartY = 0;
      sheet.addEventListener('touchstart', function (e) {
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      sheet.addEventListener('touchmove', function (e) {
        var touchY = e.touches[0].clientY;
        var diffY = touchY - touchStartY;
        if (diffY > 60) {
          closeAllDrawers();
        }
      }, { passive: true });
    });
  }

  function openDrawer(type) {
    closeAllDrawers();
    var overlay = document.getElementById('mobile-drawer-overlay');
    var sheet = document.getElementById('mobile-drawer-' + type + '-sheet');
    if (overlay && sheet) {
      overlay.classList.add('active');
      sheet.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAllDrawers() {
    var overlay = document.getElementById('mobile-drawer-overlay');
    var sheets = document.querySelectorAll('.mobile-drawer-sheet');
    if (overlay) overlay.classList.remove('active');
    sheets.forEach(function (sheet) {
      sheet.classList.remove('active');
    });
    document.body.style.overflow = '';
  }

  function removeExistingMobileApp() {
    var bar = document.querySelector('.mobile-tab-bar');
    var overlay = document.getElementById('mobile-drawer-overlay');
    var sheets = document.querySelectorAll('.mobile-drawer-sheet');
    if (bar) bar.remove();
    if (overlay) overlay.remove();
    sheets.forEach(function (sheet) { sheet.remove(); });
  }

  function triggerHaptic() {
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }

  function getRootPath() {
    var depth = (window.location.pathname.match(/\//g) || []).length - 1;
    if (window.location.pathname.endsWith('/')) depth--;
    if (depth <= 0) return '/';
    var prefix = '';
    for (var i = 0; i < depth; i++) {
      prefix += '../';
    }
    return prefix;
  }

  function detectCurrentPage() {
    var path = window.location.pathname.toLowerCase();
    if (path === '/' || path.indexOf('/index.html') !== -1) return 'home';
    if (path.indexOf('/services/') !== -1 || path.indexOf('/service-details/') !== -1) return 'services';
    if (path.indexOf('/emergency/') !== -1) return 'emergency';
    if (path.indexOf('/government/') !== -1) return 'government';
    return 'more';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileAppNav);
  } else {
    initMobileAppNav();
  }

  window.addEventListener('resize', function () {
    initMobileAppNav();
  });
})();
