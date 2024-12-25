// Set the target birthday date for Swathi
  const birthdayDate = new Date("December 25, 2024 17:00:00").getTime();

const countdownElement = document.getElementById('countdown');
const wishesElement = document.getElementById('wishesMessage');

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = birthdayDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        showBirthdayWishes();
    }
}

// Display birthday wishes after countdown ends
function showBirthdayWishes() {
    document.getElementById('birthdayMessage').style.display = 'none';
    wishesElement.style.display = 'block';
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial countdown update
updateCountdown();

// Button to refresh the page and celebrate again
function refreshPage() {
    location.reload();
}
