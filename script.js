// Select all anchor links with the class "smooth-scroll"
const links = document.querySelectorAll('a.smooth-scroll');

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default anchor behavior
    
    const href = link.getAttribute('href'); // Get the href attribute value
    const target = document.querySelector(href); // Select the target element
    
    target.scrollIntoView({ // Scroll to the target element
      behavior: 'smooth'
    });
  });
});


const jobContainers = document.querySelectorAll('.job-container');

jobContainers.forEach(jobContainer => {
  jobContainer.addEventListener('click', () => {
    // Remove active class from all job containers
    jobContainers.forEach(container => {
      container.classList.remove('active');
    });
    
    // Toggle active class on clicked job container
    jobContainer.classList.toggle('active');
  });
});
