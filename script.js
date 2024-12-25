// Set the date for the birthday
const birthdayDate = new Date("Dec 24, 2024 00:00:00").getTime();

// Countdown Function
const countdownElement = document.getElementById('countdown');
const countdownContainer = document.getElementById('countdown-container');
const birthdayMessageElement = document.getElementById('birthday-message');

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Once the countdown is finished, show the birthday message
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "🎉 It's your birthday! 🎉";
    
    // Hide the countdown container and show the birthday message after a short delay
    setTimeout(() => {
      countdownContainer.style.display = 'none'; // Hide the countdown container
      birthdayMessageElement.style.display = 'block'; // Show the birthday message
    }, 2000); // Delay before switching
  }
}, 1000);
