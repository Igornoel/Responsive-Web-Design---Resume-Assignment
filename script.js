function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/* FORM CONTAINER SCRIPT */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            const errorElement = document.querySelector('#form-error');
            
            if (!email || !message) {
                errorElement.textContent = 'Please fill out all fields';
                errorElement.style.color = 'red';
                return false;
            }
            
            if (!email.includes('@')) {
                errorElement.textContent = 'Please enter a valid email';
                errorElement.style.color = 'red';
                return false;
            }
            
            // If validation passes
            errorElement.textContent = 'Message sent successfully!';
            errorElement.style.color = 'green';
            contactForm.reset();
        });
    }
});

 /* MODAL SCRIPT */

// Project image modal functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up modal...');
    
    // Get modal elements
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-image');
    const modalDesc = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');
    
    // Get all project images
    const projectImages = document.querySelectorAll('.project-img');
    console.log('Found', projectImages.length, 'project images');
    
    // Add click event to each project image
    projectImages.forEach(img => {
        img.style.cursor = 'pointer'; // Make it obvious images are clickable
        img.addEventListener('click', function() {
            console.log('Image clicked:', this.src);
            modal.style.display = 'block';
            modalImg.src = this.src;
            
            // Get project title from nearby element
            const projectTitle = this.closest('.details-container').querySelector('.project-title').textContent;
            modalDesc.textContent = projectTitle;
        });
    });
    
    // Close modal when clicking the × button
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});