const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const projectCards = document.querySelectorAll('.project-card');

function toggleButton() {
  navList.classList.toggle('show');
}

function closeMenu() {
  navList.classList.remove('show');
}

function handleCardClick(event) {
  console.log('handleCardClick function called');
  console.log('Window width:', window.innerWidth);
  if (window.innerWidth <= 768) { // Check if the screen width is less than or equal to 768px (typical mobile width)
    console.log('Mobile condition met');
    // Reset all card sizes
    projectCards.forEach(card => {
      card.style.transform = 'scale(1)';
    });

    // Enlarge the clicked card and keep it centered
    event.currentTarget.style.transform = 'scale(3)'; // Adjust the scaling factor here
    event.currentTarget.style.zIndex = '1'; // Ensure clicked card appears on top

    // Reduce the size of other cards to maintain layout
    projectCards.forEach(card => {
      if (card !== event.currentTarget) {
        card.style.transform = 'scale(0.5)'; // Adjust the scaling factor here
        card.style.zIndex = '0'; // Ensure other cards appear beneath clicked card
      }
    });
  }
}


// Add click event listeners to each card
projectCards.forEach(card => {
  card.addEventListener('click', handleCardClick);
});

// Add click event listener to document to reset card sizes
document.addEventListener('click', function(event) {
  // Check if the click is outside any project card
  if (!event.target.closest('.project-card')) {
    // Reset all card sizes
    projectCards.forEach(card => {
      card.style.transform = 'scale(1)';
    });
  }
});

hamburgerButton.addEventListener('click', toggleButton);

document.addEventListener('touchstart', function(event) {
  if (!event.target.closest('#nav-list') && !event.target.closest('#hamburger')) {
    closeMenu();
  }
});

document.addEventListener('scroll', closeMenu);

document.querySelectorAll('#nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
    closeMenu();
  });
});
