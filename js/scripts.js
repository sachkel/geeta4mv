/**
 * BJP Maharashtra Content Manual - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initLanguageSwitcher();
    initMobileNavigation();
    setActiveNavItem();
});

/**
 * Language Switcher
 * Handles toggling between English and Marathi content
 */
function initLanguageSwitcher() {
    const langToggle = document.getElementById('lang-toggle');
    
    if (langToggle) {
        // Check for stored language preference
        const storedLang = localStorage.getItem('bjp-lang');
        if (storedLang === 'mr') {
            document.body.classList.add('lang-mr');
            updateLanguageButton('mr');
        }
        
        // Set up toggle functionality
        langToggle.addEventListener('click', function() {
            if (document.body.classList.contains('lang-mr')) {
                // Switch to English
                document.body.classList.remove('lang-mr');
                localStorage.setItem('bjp-lang', 'en');
                updateLanguageButton('en');
            } else {
                // Switch to Marathi
                document.body.classList.add('lang-mr');
                localStorage.setItem('bjp-lang', 'mr');
                updateLanguageButton('mr');
            }
        });
    }
}

/**
 * Update language button text
 */
function updateLanguageButton(lang) {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        if (lang === 'mr') {
            langToggle.innerHTML = '<span class="lang-icon">🇬🇧</span> English';
        } else {
            langToggle.innerHTML = '<span class="lang-icon">🇮🇳</span> मराठी';
        }
    }
}

/**
 * Mobile Navigation
 * Handles responsive menu for smaller screens
 */
function initMobileNavigation() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-navigation');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('open');
            nav.classList.toggle('open');
        });
    }
}

/**
 * Set Active Navigation Item
 * Highlights current page in navigation
 */
function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-navigation a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const linkParent = link.parentElement;
        
        // Check if the current path ends with the link path
        if (currentPath.endsWith(linkPath)) {
            linkParent.classList.add('active');
        } else if (currentPath === '/' && linkPath === 'index.html') {
            // Handle home page
            linkParent.classList.add('active');
        }
    });
}