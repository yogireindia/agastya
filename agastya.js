const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) { // lg breakpoint
            mobileMenu.classList.add('hidden');
        }
    });

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('mukulsection').scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => {
                t.classList.remove('active');
                t.classList.remove('font-bold');
            });

            // Add active class to clicked tab
            this.classList.add('active');
            this.classList.add('font-bold');

            // Hide all panes
            panes.forEach(pane => pane.classList.add('hidden'));

            // Show selected pane
            const target = this.getAttribute('data-bs-target').replace('#', '');
            document.getElementById(target).classList.remove('hidden');
        });
    });
});


