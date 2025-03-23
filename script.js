document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }

            // Close menu on mobile after clicking a link
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // Mobile Menu Toggle
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});
