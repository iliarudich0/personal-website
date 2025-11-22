// Display calendar for last 7 days
const today = new Date();
const startDate = new Date(today);
startDate.setDate(today.getDate() - 7); // Get the start date (7 days ago)

const calendarContainer = document.getElementById('calendar-container');

for (let i = 0; i < 7; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);

    const dayButton = document.createElement('button');
    dayButton.textContent = day.toLocaleDateString();
    dayButton.addEventListener('click', () => {
        window.location.href = `archive.html?date=${day.toLocaleDateString()}`;
    });

    calendarContainer.appendChild(dayButton);
}
