import { useState } from 'react';
import CreateNoteForm from './CreateNoteForm';
import NoteList from './NoteList';
import { Container } from '@mui/material';
import NOTES from '../../example/notes.js';

const Notes = () => {
  const [notes, setNotes] = useState(NOTES);

  const saveNoteHandler = (note) => {
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };

  const deleteNoteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <CreateNoteForm saveNote={saveNoteHandler} />
      <NoteList
        notes={notes}
        deleteNote={deleteNoteHandler}
      />
    </Container>
  );
};

export default Notes;
