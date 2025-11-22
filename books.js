document.addEventListener('DOMContentLoaded', function() {
    // Display the current books from localStorage
    displayBooks();

    // Listen for the book add form submit
    document.getElementById('add-book-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const bookTitle = document.getElementById('book-title').value;
        const bookAuthor = document.getElementById('book-author').value;
        const bookNotes = document.getElementById('book-notes').value;
        const bookImage = document.getElementById('book-image').files[0];

        // Store the book data
        addBookToStorage(bookTitle, bookAuthor, bookNotes, bookImage);

        // Clear the form
        document.getElementById('add-book-form').reset();

        // Re-display books after adding a new one
        displayBooks();
    });
});

// Function to add book data to localStorage
function addBookToStorage(title, author, notes, image) {
    const bookData = {
        title: title,
        author: author,
        notes: notes,
        image: URL.createObjectURL(image) // Object URL for the image
    };

    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(bookData);
    localStorage.setItem('books', JSON.stringify(books));
}

// Function to display books on the page
function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';  // Clear existing books before displaying

    const books = JSON.parse(localStorage.getItem('books')) || [];

    if (books.length === 0) {
        booksContainer.innerHTML = '<p>No books added yet.</p>';
    } else {
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-entry');
            bookElement.innerHTML = `
                <h4>${book.title}</h4>
                <p><strong>Author:</strong> ${book.author}</p>
                <img src="${book.image}" alt="${book.title}" width="100">
                <p><strong>Notes:</strong> ${book.notes}</p>
            `;
            booksContainer.appendChild(bookElement);
        });
    }
}
