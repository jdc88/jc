// Select the containers
const starsContainer = document.getElementById('stars');
const shootingStarsContainer = document.getElementById('shooting-stars');

// Generate stars
function createStars() {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star', 'absolute', 'bg-white', 'rounded-full');
    star.style.width = `${Math.random() * 10 + 1}px`;  // Random width between 1px and 4px
    // Originally, the range of random is [0,1)
    // * 3 means [0,3) and + 1 means shift 1 over [1,4)
    star.style.height = star.style.width;  // Keep the width and height the same to form a circle
    star.style.top = `${Math.random() * 100}%`;  // Random vertical position
    star.style.left = `${Math.random() * 100}%`;  // Random horizontal position
    star.style.opacity = `${Math.random() * 0.5 + 0.3}`;  // Random opacity between 0.3 and 0.8 for twinkling effect
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;  // Random animation duration between 2s and 5s
    starsContainer.appendChild(star);
  }
}

// Generate shooting stars
function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star', 'absolute', 'bg-white');
  star.style.width = '2px'; //8px
  star.style.height = '2px'; //8px
  star.style.top = `${Math.random() * 100}%`;  // Random starting position for shooting stars - orginal: 50%
  star.style.left = `${Math.random() * 100}%`;
  star.style.animation = `shooting-star 1s linear forwards`;  // "forwards" ensures the shooting star stays in its final position

  shootingStarsContainer.appendChild(star);

  // Remove the shooting star after animation ends
  setTimeout(() => {
    star.remove();
  }, 1000);
}

// Create stars on load
createStars();

// Add random shooting stars every 2 or 10 seconds
setInterval(createShootingStar, 10000);