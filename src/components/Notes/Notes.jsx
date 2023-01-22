import { useState } from 'react';
import CreateNoteForm from './CreateNoteForm';
import NoteList from './NoteList';
import { Container } from '@mui/material';

const NOTES = [
  {
    title: 'Walk dog',
    description: 'Take out skipper, he needs a walk',
    id: Math.random().toString(),
  },
  {
    title: 'Study React',
    description: 'Need to learn the ropes',
    id: Math.random().toString(),
  },
  {
    title: 'Buy groceries',
    description: 'Even devs have to eat at some point',
    id: Math.random().toString(),
  },
];

const Notes = () => {
  const [notes, setNotes] = useState(NOTES);

  const saveNoteHandler = (note) => {
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };

  return (
    <Container>
      <CreateNoteForm saveNote={saveNoteHandler} />
      <NoteList notes={notes} />
    </Container>
  );
};

export default Notes;
