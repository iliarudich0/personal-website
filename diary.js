document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('book-title').value;
    const bookNumber = document.getElementById('book-number').value;
    const bookNotes = document.getElementById('book-notes').value;
    const bookImage = document.getElementById('book-image').files[0];

    const currentDate = new Date().toLocaleDateString();

    // Prepare the book data
    const bookData = {
        title: bookTitle,
        number: bookNumber,
        notes: bookNotes,
        image: URL.createObjectURL(bookImage) // For simplicity, using Object URL
    };

    // Save book data to localStorage for the current date
    let booksForToday = JSON.parse(localStorage.getItem(currentDate)) || [];
    booksForToday.push(bookData);
    localStorage.setItem(currentDate, JSON.stringify(booksForToday));

    // Display added book in the list
    const bookContainer = document.createElement('div');
    bookContainer.innerHTML = `
        <h4>${bookTitle} (Book No. ${bookNumber})</h4>
        <img src="${URL.createObjectURL(bookImage)}" alt="${bookTitle}" width="100">
        <p>${bookNotes}</p>
    `;
    document.getElementById('books-container').appendChild(bookContainer);

    // Clear the form
    document.getElementById('add-book-form').reset();
});
