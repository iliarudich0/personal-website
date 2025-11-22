// Save and display diary entries
document.getElementById('save-button').addEventListener('click', function() {
    const diaryContent = document.getElementById('diary-input').value;
    if (diaryContent.trim()) {
        const diaryOutput = document.getElementById('diary-output');
        const newEntry = document.createElement('div');
        newEntry.classList.add('diary-entry');
        newEntry.innerHTML = `<p><strong>${new Date().toLocaleDateString()}</strong></p><p>${diaryContent}</p>`;
        diaryOutput.appendChild(newEntry);
        document.getElementById('diary-input').value = ''; // Clear the textarea
    } else {
        alert('Please write something in the diary!');
    }
});
