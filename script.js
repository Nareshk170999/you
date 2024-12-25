// Set the date for the countdown (set your desired birthday date)
const countdownDate = new Date("Dec 22, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown finishes, show the birthday message
  if (distance < 0) {
    clearInterval(countdownInterval);  // Stop the countdown
    document.getElementById("countdown-container").style.display = "none";  // Hide countdown
    document.getElementById("message").style.display = "block";  // Show the message
  }
}, 1000);
