<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archive for Specific Day</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Archive for <span id="selected-date"></span></h1>
        <nav>
            <a href="books.html">Back to Calendar</a>
        </nav>
    </header>

    <section id="archive-content">
        <!-- Archived content for the specific day will go here -->
    </section>

    <footer>
        <p>© 2025 Your Name</p>
    </footer>

    <script src="archive.js"></script>

    -----

    // Retrieve the selected date from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedDate = urlParams.get('date');

// Display the date on the page
document.getElementById('selected-date').textContent = selectedDate;

// Get book entries for the selected date (assuming data is stored in localStorage)
const booksForDay = JSON.parse(localStorage.getItem(selectedDate)) || [];

const archiveContent = document.getElementById('archive-content');

if (booksForDay.length === 0) {
    archiveContent.innerHTML = `<p>No books added for this day.</p>`;
} else {
    booksForDay.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-entry');
        bookElement.innerHTML = `
            <h4>${book.title} (Book No. ${book.number})</h4>
            <img src="${book.image}" alt="${book.title}" width="100">
            <p>${book.notes}</p>
        `;
        archiveContent.appendChild(bookElement);
    });
}

</body>
</html>
