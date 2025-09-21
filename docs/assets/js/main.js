// RiskPlot Documentation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    // Code copy functionality
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.title = 'Copy to clipboard';

        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);

        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.textContent);
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.color = 'var(--success-color)';

                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });

    // Search functionality (basic)
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('h1, h2, h3, p, code');

            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                const parent = element.closest('.searchable-section') || element;

                if (text.includes(query) || query === '') {
                    parent.style.display = '';
                } else {
                    parent.style.display = 'none';
                }
            });
        });
    }

    // Table of contents generation
    function generateTOC() {
        const tocContainer = document.querySelector('#table-of-contents');
        if (!tocContainer) return;

        const headings = document.querySelectorAll('h2, h3, h4');
        if (headings.length === 0) return;

        const toc = document.createElement('ul');
        toc.className = 'toc-list';

        headings.forEach((heading, index) => {
            // Create ID if it doesn't exist
            if (!heading.id) {
                heading.id = heading.textContent
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-');
            }

            const li = document.createElement('li');
            li.className = `toc-${heading.tagName.toLowerCase()}`;

            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.textContent = heading.textContent;

            li.appendChild(a);
            toc.appendChild(li);
        });

        tocContainer.appendChild(toc);
    }

    generateTOC();

    // Highlight current section in TOC
    function highlightCurrentSection() {
        const tocLinks = document.querySelectorAll('.toc-list a');
        const headings = document.querySelectorAll('h2, h3, h4');

        if (tocLinks.length === 0 || headings.length === 0) return;

        const scrollPosition = window.scrollY + 100;
        let currentSection = null;

        headings.forEach(heading => {
            if (heading.offsetTop <= scrollPosition) {
                currentSection = heading;
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection(); // Initial call

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // External link handling
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hostname.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});