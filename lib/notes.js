const fs = require('fs');
const path = require('path');

// This will allow users to create a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

// This will allow users to delete notes
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (id === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../data/db.json'),
                JSON.stringify({ notes: notesArray }, null, 2)
            );
        }
    }
    return false;
};

module.exports = {
    createNewNote,
    deleteNote
};