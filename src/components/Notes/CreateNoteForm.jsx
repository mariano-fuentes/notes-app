import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const inputStyle = {
  marginBottom: '20px',
};

const CreateNoteForm = ({ saveNote }) => {
  const [note, setNote] = useState({
    title: '',
    description: '',
    id: Math.random().toString(),
  });

  const submitHandler = (e) => {
    e.preventDefault();
    saveNote(note);
  };

  const inputChangeHandler = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    setNote((prev) => {
      return { ...prev, [id]: val };
    });
  };

  return (
    <form
      noValidate
      autoComplete='off'
      onSubmit={submitHandler}
    >
      <TextField
        sx={inputStyle}
        fullWidth
        id='title'
        label='Note Title'
        variant='filled'
        onChange={(e) => inputChangeHandler(e)}
      />
      <TextField
        sx={inputStyle}
        fullWidth
        id='description'
        label='Description'
        variant='filled'
        onChange={(e) => inputChangeHandler(e)}
      />
      <Button
        sx={inputStyle}
        type='submit'
        variant='contained'
        color='primary'
        size='large'
        endIcon={<NoteAddIcon />}
      >
        Create Note
      </Button>
    </form>
  );
};

export default CreateNoteForm;
