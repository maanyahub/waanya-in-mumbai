const timerElement = document.getElementById('timer');
const returnDate = new Date(); // Adjust return date
returnDate.setDate(returnDate.getDate() + 3);

function updateCountdown() {
    const now = new Date();
    const difference = returnDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    timerElement.innerText = `${days} Days Left`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
