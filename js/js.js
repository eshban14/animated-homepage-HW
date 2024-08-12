

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(106, 27, 154, 0.9)'; /* Darker color on scroll */
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'; /* Increase shadow on scroll */
      
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.2)'; /* Glass effect */
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; /* Reset shadow */
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});



// scrolling for snimations




// service 


document.addEventListener("DOMContentLoaded", function() {
    const serviceBoxes = document.querySelectorAll('.service-box');
    
    const handleScroll = () => {
        serviceBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Check if the box is in the viewport
            if (boxTop < windowHeight - 100) {
                box.classList.add('show');
            }
        });
    };
    
    // Initial check on page load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});



// about


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.about-title, .about-description, .about-subtitle, .about-text, .about-image img');
    
    const handleScroll = () => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    };
    
    handleScroll();  // Initial check on page load
    window.addEventListener('scroll', handleScroll);
});



