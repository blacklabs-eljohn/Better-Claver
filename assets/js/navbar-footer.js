/**
 * BetterClaver Globalized Navbar & Footer Component System
 * Single source of truth for site-wide navigation, footer, active link highlighting,
 * and page-specific Liquid Glass header scroll transitions.
 */

(function () {
  'use strict';

  // Compute relative path prefix based on current pathname depth
  function getRelPrefix() {
    const path = window.location.pathname;
    // Strip trailing slash if present for counting
    const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
    const segments = cleanPath.split('/').filter(Boolean);

    // If local file:// protocol or root path, inspect path relative to BetterClaver root
    if (segments.length === 0) return './';
    
    // Check key known directories
    const lastSeg = segments[segments.length - 1];
    if (lastSeg.endsWith('.html')) segments.pop();
    
    const depth = segments.length;
    if (depth === 0) return './';
    return '../'.repeat(depth);
  }

  const rel = getRelPrefix();

  // Canonical Header HTML
  function getCanonicalHeaderHTML() {
    return `
    <div class="hotline-bar">
      <div class="container">
        <div class="hotline-inner">
          <div class="hotline-items">
            <a href="tel:09274008033" class="hotline-item"><i class="bi bi-shield-fill"></i><span>Police: 0927 400 8033</span></a>
            <a href="tel:09162840885" class="hotline-item"><i class="bi bi-heart-fill"></i><span>MSWDO: 0916 284 0885</span></a>
            <a href="tel:09360620305" class="hotline-item"><i class="bi bi-fire"></i><span>Fire: 0936 062 0305</span></a>
            <a href="tel:0906188086" class="hotline-item"><i class="bi bi-building"></i><span>DILG: 0906 188 086</span></a>
            <a href="tel:09263833744" class="hotline-item"><i class="bi bi-exclamation-triangle-fill"></i><span>MDRRMO: 0926 383 3744</span></a>
            <a href="tel:09068195569" class="hotline-item"><i class="bi bi-truck"></i><span>R2TMC: 0906 819 5569</span></a>
          </div>
        </div>
      </div>
    </div>

    <header class="site-header">
      <div class="container header-inner">
        <div class="logo-container">
          <a href="${rel}">
            <img src="${rel}assets/images/logo/better-claver-logo.svg" alt="Better Claver Logo" class="logo-img" />
          </a>
        </div>
        <nav class="main-nav" aria-label="Main Navigation">
          <ul>
            <li><a href="${rel}" data-nav="home">Home</a></li>
            <li class="has-dropdown">
              <a href="${rel}services/" aria-haspopup="true" aria-expanded="false" data-nav="services">Services</a>
              <ul class="dropdown-menu">
                <li><a href="${rel}services/certificates.html">Certificates</a></li>
                <li><a href="${rel}services/business.html">Business</a></li>
                <li><a href="${rel}services/tax-payments.html">Tax Payments</a></li>
                <li><a href="${rel}services/social-services.html">Social Services</a></li>
                <li><a href="${rel}services/health.html">Health</a></li>
                <li><a href="${rel}services/agriculture.html">Agriculture</a></li>
                <li><a href="${rel}services/infrastructure.html">Infrastructure</a></li>
                <li><a href="${rel}services/education.html">Education</a></li>
                <li><a href="${rel}services/public-safety.html">Public Safety</a></li>
                <li><a href="${rel}services/environment.html">Environment</a></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <a href="${rel}government/" aria-haspopup="true" aria-expanded="false" data-nav="government">Government</a>
              <ul class="dropdown-menu">
                <li><a href="${rel}government/profile.html">Municipal Profile</a></li>
                <li><a href="${rel}government/index.html">Government Officials</a></li>
                <li><a href="${rel}government/barangays.html">Barangays</a></li>
                <li><a href="${rel}government/mayors-corner.html">Mayor's Corner</a></li>
                <li><a href="${rel}government/department-heads.html">Department Heads</a></li>
                <li><a href="${rel}emergency/">Emergency Response</a></li>
                <li><a href="${rel}industry/">Industry & Community</a></li>
                <li><a href="#" style="display: flex; align-items: center; justify-content: space-between; gap: 8px; cursor: default;" onclick="event.preventDefault();"><span>Tourism & Festivals</span><span style="font-size: 0.65rem; font-weight: 800; text-transform: uppercase; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: white; padding: 2px 8px; border-radius: 50px; letter-spacing: 0.5px; box-shadow: 0 2px 6px rgba(2,132,199,0.35);">SOON</span></a></li>
              </ul>
            </li>
            <li class="has-dropdown">
              <a href="${rel}legislative/" aria-haspopup="true" aria-expanded="false" data-nav="legislative">Legislative</a>
              <ul class="dropdown-menu">
                <li><a href="${rel}legislative/ordinance-framework.html">Ordinance Framework</a></li>
                <li><a href="${rel}legislative/resolution-framework.html">Resolution Framework</a></li>
              </ul>
            </li>
            <li><a href="${rel}budget/" data-nav="transparency">Transparency</a></li>
            <li><a href="${rel}contact/" data-nav="contact">Contact</a></li>
            <li><a href="${rel}about/" data-nav="about">About</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <div class="lang-selector">
            <button type="button" class="btn btn-secondary btn-sm lang-btn" data-lang="en">EN</button>
            <button type="button" class="btn btn-secondary btn-sm lang-btn" data-lang="fil">FIL</button>
            <button type="button" class="btn btn-secondary btn-sm lang-btn" data-lang="sug">SUG</button>
          </div>
        </div>
      </div>
    </header>`;
  }

  // Canonical Home Page Default Footer HTML
  function getCanonicalFooterHTML() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-main-new">
          <div class="footer-brand">
            <img src="${rel}assets/images/logo/better-claver-logo-white.svg" alt="Better Claver logo" class="footer-logo" />
            <p class="footer-tagline" data-i18n="home-empowering-the-people-of-claver-with-transparent">
              Empowering the people of Claver with transparent access to the services, programs, and
              public funds of LGU Claver.
            </p>
            <div class="footer-social-new">
              <a href="https://www.facebook.com/betterclaver.org" class="footer-social-btn" target="_blank"
                rel="noopener noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="https://www.linkedin.com/company/betterclaver/" class="footer-social-btn" target="_blank"
                rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="https://discord.com/invite/qeSu7RJkjQ" class="footer-social-btn" target="_blank"
                rel="noopener noreferrer" aria-label="Discord"><i class="bi bi-discord"></i></a>
            </div>
          </div>
          <div class="footer-column">
            <h4 data-i18n="home-quick-links">Quick Links</h4>
            <ul class="footer-links-new">
              <li>
                <a href="https://claver.gov.ph/" target="_blank" rel="noopener noreferrer"
                  data-i18n="home-claver-info">Claver Info</a>
              </li>
              <li><a href="${rel}sitemap/" data-i18n="home-sitemap">Sitemap</a></li>
              <li>
                <a href="https://claver.gov.ph/wp-content/uploads/2025/10/As-of-October-21-2025-2.pdf" target="_blank"
                  rel="noopener noreferrer" data-i18n="home-citizens-charter">Citizen's Charter</a>
              </li>
              <li><a href="${rel}terms/" data-i18n="home-terms-of-use">Terms of Use</a></li>
              <li><a href="${rel}privacy/" data-i18n="home-privacy-policy">Privacy Policy</a></li>
              <li><a href="${rel}accessibility/" data-i18n="home-accessibility">Accessibility</a></li>
              <li><a href="${rel}faq/">FAQ</a></li>
              <li><a href="${rel}about/">About Us</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4 data-i18n="home-resources">Resources</h4>
            <ul class="footer-links-new">
              <li>
                <a href="https://data.gov.ph" target="_blank" rel="noopener noreferrer"
                  data-i18n="home-open-data-philippines">Open Data Philippines</a>
              </li>
              <li>
                <a href="https://www.foi.gov.ph/" target="_blank" rel="noopener noreferrer"
                  data-i18n="home-freedom-of-information">Freedom of Information</a>
              </li>
              <li>
                <a href="https://claver.gov.ph/" target="_blank" rel="noopener noreferrer"
                  data-i18n="home-official-lgu-claver-portal">Official LGU Claver Portal</a>
              </li>
              <li>
                <a href="https://sangguniangbayan.claver.gov.ph/" target="_blank" rel="noopener noreferrer"
                  data-i18n="home-sangguniang-bayan">Sangguniang Bayan</a>
              </li>
              <li>
                <a href="https://www.facebook.com/lguclaver/" target="_blank" rel="noopener noreferrer"
                  data-i18n="home-lgu-claver-facebook">LGU Claver Facebook</a>
              </li>
              <li>
                <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" data-i18n="home-blgf-portal">BLGF
                  Portal</a>
              </li>
              <li>
                <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer"
                  data-i18n="home-cmci-dti-portal">CMCI DTI Portal</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <div class="footer-cost" role="status" aria-label="Cost to the People of Claver: Zero Pesos">
              Cost to the People of Claver = <span class="footer-cost-value">₱0</span>
            </div>
            <a href="${rel}volunteer/" class="footer-contribute"><i class="bi bi-envelope-heart"></i>
              Volunteer with us</a>
            <a href="https://github.com/BetterClaver/betterclaver" class="footer-contribute" target="_blank"
              rel="noopener noreferrer"><i class="bi bi-github"></i> Contribute code with us</a>
            <div class="footer-partners">
              <a href="https://abakada.org" target="_blank" rel="noopener noreferrer" aria-label="Abakada.org"><img
                  src="${rel}assets/images/logo/abakada-footer.svg" alt="Abakada.org" class="footer-partner-logo" width="120"
                  height="28" loading="lazy" /></a>
              <a href="https://hivcareph.org/" target="_blank" rel="noopener noreferrer"
                aria-label="HIV Care Philippines"><img src="${rel}assets/images/logo/hiv-care-logo-footer.svg"
                  alt="HIV Care Philippines" class="footer-partner-logo" width="120" height="28" loading="lazy" /></a>
              <a href="https://bettergov.ph" target="_blank" rel="noopener noreferrer" aria-label="BetterGov.ph"><img
                  src="${rel}assets/images/logo/bettergov-footer.svg" alt="BetterGov.ph" class="footer-partner-logo" width="120"
                  height="28" loading="lazy" /></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom-new">
          <div class="footer-copyright">
            <span class="footer-copyright-left">
              &copy; 2026 BetterClaver.org | All public information sourced from official government portals.
            </span>
            <span class="footer-copyright-right">
              Developed by <a href="https://ethan.stoodioph.com/founder.html" target="_blank"
                rel="noopener noreferrer">Ethan</a>
            </span>
          </div>
        </div>
      </div>
    </footer>`;
  }

  // Inject or Hydrate Header and Footer
  function initHeaderAndFooter() {
    // Replace/hydrate Header
    const existingHeader = document.querySelector('.site-header');
    const existingHotline = document.querySelector('.hotline-bar');

    if (existingHeader) {
      const parent = existingHeader.parentNode;
      const headerWrapper = document.createElement('div');
      headerWrapper.id = 'global-header-wrapper';
      headerWrapper.innerHTML = getCanonicalHeaderHTML();

      if (existingHotline) existingHotline.remove();
      parent.replaceChild(headerWrapper, existingHeader);
    } else {
      const wrapper = document.createElement('div');
      wrapper.id = 'global-header-wrapper';
      wrapper.innerHTML = getCanonicalHeaderHTML();
      document.body.insertBefore(wrapper, document.body.firstChild);
    }

    // Replace/hydrate Footer
    const existingFooter = document.querySelector('.site-footer');
    if (existingFooter) {
      const parent = existingFooter.parentNode;
      const footerWrapper = document.createElement('div');
      footerWrapper.id = 'global-footer-wrapper';
      footerWrapper.innerHTML = getCanonicalFooterHTML();
      parent.replaceChild(footerWrapper, existingFooter);
    } else {
      const wrapper = document.createElement('div');
      wrapper.id = 'global-footer-wrapper';
      wrapper.innerHTML = getCanonicalFooterHTML();
      document.body.appendChild(wrapper);
    }

    highlightActiveNav();
    initNavbarScrollBehavior();
  }

  // Active Nav Link Highlighting
  function highlightActiveNav() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a[data-nav]');
    
    navLinks.forEach(link => {
      const navKey = link.getAttribute('data-nav');
      let isActive = false;

      if (navKey === 'home' && (path === '/' || path.endsWith('/index.html') && !path.includes('/government/') && !path.includes('/services/') && !path.includes('/industry/') && !path.includes('/budget/') && !path.includes('/legislative/'))) {
        isActive = true;
      } else if (navKey && path.includes('/' + navKey + '/')) {
        isActive = true;
      }

      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Navbar Scroll & Liquid Glass Transition Rules
  function initNavbarScrollBehavior() {
    const siteHeader = document.querySelector('.site-header');
    if (!siteHeader) return;

    const path = window.location.pathname;
    // Check if current page is Home page or About page
    const isHomeOrAbout = (
      path === '/' ||
      path.endsWith('/index.html') && path.split('/').filter(Boolean).length <= 1 ||
      path.includes('/about/')
    );

    const updateHeaderState = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (isHomeOrAbout) {
        // Rule 1: Home & About page start transparent, transition to liquid glass on scroll
        if (scrollY <= 20) {
          siteHeader.classList.add('is-transparent');
          siteHeader.classList.remove('is-scrolled');
        } else {
          siteHeader.classList.remove('is-transparent');
          siteHeader.classList.add('is-scrolled');
        }
      } else {
        // Rule 2: All other interior pages start solid white, transition to liquid glass on scroll
        if (scrollY <= 20) {
          siteHeader.classList.remove('is-transparent');
          siteHeader.classList.remove('is-scrolled');
        } else {
          siteHeader.classList.remove('is-transparent');
          siteHeader.classList.add('is-scrolled');
        }
      }
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderAndFooter);
  } else {
    initHeaderAndFooter();
  }
})();
