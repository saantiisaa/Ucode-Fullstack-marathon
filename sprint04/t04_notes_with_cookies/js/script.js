function addNote() {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();
    if (note === '') {
        alert("It's empty. Try to input something in 'Text input'.");
        return;
    }
    let notes = getNotesFromStorage();
    notes.push(note);
    setNotesToStorage(notes);
    displayNotes();
    noteInput.value = '';
}

function clearNotes() {
    if (confirm('Are you sure?')) {
        localStorage.removeItem('notes');
        displayNotes();
    }
}

function getNotesFromStorage() {
    const notesString = localStorage.getItem('notes');
    return notesString ? JSON.parse(notesString) : [];
}

function setNotesToStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function displayNotes() {
    const notesOutput = document.getElementById('notes-output');
    const notes = getNotesFromStorage();

    if (notes.length === 0) {
        notesOutput.value = '[Empty]';
    } else {
        const notesWithBulletPoints = notes.map(note => `--> ${note}`);
        notesOutput.value = notesWithBulletPoints.join('\n');
    }
}

window.onload = function () {
    displayNotes();
};