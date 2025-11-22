document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('book-title').value;
    const bookNumber = document.getElementById('book-number').value;
    const bookNotes = document.getElementById('book-notes').value;
    const bookImage = document.getElementById('book-image').files[0];

    const readerEmail = 'iliarudich3mz@gmail.com';
    sendBookToEmail(readerEmail, bookTitle, bookNumber, bookNotes, bookImage);

    // Display added book
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

function sendBookToEmail(email, title, number, notes, image) {
    // Here, you'd integrate an email sending function.
    // This would likely use an API like EmailJS or another service to send the email.
    console.log(`Sending book info to: ${email}`);
    console.log(`Title: ${title}, Number: ${number}, Notes: ${notes}`);
    // You can also include the image URL or the image itself.
}
