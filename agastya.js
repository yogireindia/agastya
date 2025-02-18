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


document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('mukulsection').scrollIntoView({ behavior: 'smooth' });
});
