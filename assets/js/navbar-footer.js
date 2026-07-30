/**
 * BetterClaver Globalized Master Navbar & Footer Component System
 * Single Source of Truth for site-wide navigation, footer, parent + child active link highlighting,
 * dynamic contrast adaptation, mobile drawer toggle, and Apple-grade Liquid Glass scroll transitions.
 */

(function () {
  'use strict';

  // Compute relative path prefix based on current pathname depth
  function getRelPrefix() {
    const path = window.location.pathname;
    const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
    const segments = cleanPath.split('/').filter(Boolean);

    if (segments.length === 0) return './';
    
    const lastSeg = segments[segments.length - 1];
    if (lastSeg.endsWith('.html')) segments.pop();
    
    const depth = segments.length;
    if (depth === 0) return './';
    return '../'.repeat(depth);
  }

  const rel = getRelPrefix();

  function getHotlineHTML() {
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
    </div>`;
  }

  function getHeaderHTML() {
    return `
    <header class="site-header" id="main-site-header">
      <div class="container header-inner">
        <div class="logo-container">
          <a href="${rel}" aria-label="Better Claver Home">
            <img src="${rel}assets/images/logo/better-claver-logo.svg" alt="Better Claver Logo" class="logo-img logo-img-colored" />
            <img src="${rel}assets/images/logo/better-claver-logo-white.svg" alt="Better Claver Logo" class="logo-img logo-img-white" style="display:none;" />
          </a>
        </div>
        <nav class="main-nav" id="main-nav" aria-label="Main Navigation">
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

  function getFooterHTML() {
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

  // Inject Header & Footer directly into Body
  function initHeaderAndFooter() {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = getHotlineHTML() + getHeaderHTML();

    const newHotline = tempDiv.querySelector('.hotline-bar');
    const newHeader = tempDiv.querySelector('.site-header');

    const existingHotline = document.querySelector('.hotline-bar');
    const existingHeader = document.querySelector('.site-header');
    const globalWrapper = document.getElementById('global-header-wrapper');

    if (globalWrapper) {
      globalWrapper.parentNode.insertBefore(newHotline, globalWrapper);
      globalWrapper.parentNode.insertBefore(newHeader, globalWrapper);
      globalWrapper.remove();
    } else if (existingHeader) {
      const parent = existingHeader.parentNode;
      if (existingHotline) existingHotline.remove();
      parent.insertBefore(newHotline, existingHeader);
      parent.insertBefore(newHeader, existingHeader);
      existingHeader.remove();
    } else {
      document.body.insertBefore(newHeader, document.body.firstChild);
      document.body.insertBefore(newHotline, newHeader);
    }

    // Replace/hydrate Footer
    const existingFooter = document.querySelector('.site-footer');
    const globalFooterWrapper = document.getElementById('global-footer-wrapper');

    const tempFooterDiv = document.createElement('div');
    tempFooterDiv.innerHTML = getFooterHTML();
    const newFooter = tempFooterDiv.querySelector('.site-footer');

    if (globalFooterWrapper) {
      globalFooterWrapper.parentNode.insertBefore(newFooter, globalFooterWrapper);
      globalFooterWrapper.remove();
    } else if (existingFooter) {
      existingFooter.parentNode.replaceChild(newFooter, existingFooter);
    } else {
      document.body.appendChild(newFooter);
    }

    highlightActiveNav();
    initMobileMenu();
    initNavbarScrollBehavior();
  }

  // Parent & Active Child Page Detection
  function highlightActiveNav() {
    const path = window.location.pathname.toLowerCase();
    const currentFilename = path.split('/').filter(Boolean).pop() || 'index.html';
    
    // 1. Highlight Parent Top-Level Nav Link
    const parentNavLinks = document.querySelectorAll('.main-nav > ul > li > a[data-nav]');
    parentNavLinks.forEach(link => {
      const navKey = link.getAttribute('data-nav');
      let isParentActive = false;

      if (navKey === 'home') {
        const isRoot = path === '/' || path.endsWith('/index.html') || path.endsWith('/betterclaver/') || path.endsWith('/betterclaver/index.html');
        const isSubFolder = path.includes('/government/') || path.includes('/services/') || path.includes('/industry/') || path.includes('/budget/') || path.includes('/legislative/') || path.includes('/about/') || path.includes('/contact/') || path.includes('/emergency/') || path.includes('/service-details/');
        if (isRoot && !isSubFolder) isParentActive = true;
      } else if (navKey) {
        if (path.includes('/' + navKey + '/') || (navKey === 'services' && path.includes('/service-details/'))) {
          isParentActive = true;
        }
      }

      if (isParentActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // 2. Highlight Specific Active Child Item inside Dropdowns
    const dropdownLinks = document.querySelectorAll('.main-nav .dropdown-menu a');
    dropdownLinks.forEach(childLink => {
      const href = (childLink.getAttribute('href') || '').toLowerCase();
      let isChildActive = false;

      if (href && href !== '#') {
        const hrefFilename = href.split('/').filter(Boolean).pop();
        if (hrefFilename && currentFilename && hrefFilename === currentFilename) {
          isChildActive = true;
        }
      }

      if (isChildActive) {
        childLink.classList.add('active', 'active-child');
        childLink.style.fontWeight = '700';
        childLink.style.color = '#0032a0';
        childLink.style.backgroundColor = 'rgba(0, 50, 160, 0.08)';
      } else {
        childLink.classList.remove('active', 'active-child');
        childLink.style.fontWeight = '';
        childLink.style.color = '';
        childLink.style.backgroundColor = '';
      }
    });
  }

  // Mobile Menu & Touch Dropdown Controller
  function initMobileMenu() {
    const siteHeader = document.querySelector('.site-header');
    if (!siteHeader) return;
    const headerInner = siteHeader.querySelector('.header-inner');
    const mainNav = siteHeader.querySelector('.main-nav');
    if (!headerInner || !mainNav) return;

    if (!siteHeader.querySelector('.mobile-menu-toggle')) {
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'mobile-menu-toggle btn btn-secondary';
      toggleBtn.type = 'button';
      toggleBtn.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
      toggleBtn.setAttribute('aria-label', 'Toggle Navigation');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-controls', 'main-nav');

      const actions = siteHeader.querySelector('.header-actions');
      if (actions) {
        headerInner.insertBefore(toggleBtn, actions);
      } else {
        headerInner.appendChild(toggleBtn);
      }

      toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          mainNav.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
        } else {
          mainNav.classList.add('is-open');
          toggleBtn.setAttribute('aria-expanded', 'true');
          toggleBtn.innerHTML = '<i class="bi bi-x-lg" aria-hidden="true"></i>';
        }
      });

      // Touch dropdown triggers for mobile
      const dropdownTriggers = mainNav.querySelectorAll('.has-dropdown > a');
      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
          if (window.innerWidth <= 1024) {
            e.preventDefault();
            const parentLi = trigger.parentElement;
            parentLi.classList.toggle('mobile-expanded');
          }
        });
      });
    }
  }

  // Detect whether top of page hero background is dark tone
  function isDarkHeroPage() {
    const firstSection = document.querySelector('main > section:first-child, body > section:first-child, .home-hero-v2, .about-hero, .ind-hero, .page-hero, .gov-hero, .transparency-hero, .contact-hero');
    if (!firstSection) return true;
    
    const className = (firstSection.className || '').toLowerCase();
    if (className.includes('hero') || className.includes('ind-hero') || className.includes('page-header')) return true;
    return true;
  }

  // Apple-Grade Liquid Glass Scroll Controller
  function initNavbarScrollBehavior() {
    const siteHeader = document.querySelector('.site-header');
    if (!siteHeader) return;

    const darkHero = isDarkHeroPage();
    const coloredLogo = siteHeader.querySelector('.logo-img-colored');
    const whiteLogo = siteHeader.querySelector('.logo-img-white');

    let ticking = false;

    const updateHeaderState = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY <= 20) {
        // STATE 1 — TOP OF PAGE (Fully Transparent)
        siteHeader.classList.add('is-transparent');
        siteHeader.classList.remove('is-scrolled');

        if (darkHero) {
          siteHeader.classList.add('is-dark-hero');
          siteHeader.classList.remove('is-light-hero');
          if (coloredLogo && whiteLogo) {
            coloredLogo.style.display = 'none';
            whiteLogo.style.display = 'inline-block';
          }
        } else {
          siteHeader.classList.add('is-light-hero');
          siteHeader.classList.remove('is-dark-hero');
          if (coloredLogo && whiteLogo) {
            coloredLogo.style.display = 'inline-block';
            whiteLogo.style.display = 'none';
          }
        }
      } else {
        // STATE 2 — SCROLLED (Liquid Glassmorphism)
        siteHeader.classList.remove('is-transparent', 'is-dark-hero', 'is-light-hero');
        siteHeader.classList.add('is-scrolled');

        if (coloredLogo && whiteLogo) {
          coloredLogo.style.display = 'inline-block';
          whiteLogo.style.display = 'none';
        }
      }
      ticking = false;
    };

    updateHeaderState();
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderState);
        ticking = true;
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderAndFooter);
  } else {
    initHeaderAndFooter();
  }
})();
