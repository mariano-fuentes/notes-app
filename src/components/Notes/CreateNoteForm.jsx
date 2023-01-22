import { useReducer, useState } from 'react';
import { TextField, Button } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import inputReducer from '../../reducers/inputReducer';

const inputStyle = {
  marginBottom: '20px',
};

const initialObj = {
  value: '',
  isValid: null,
};

const CreateNoteForm = ({ saveNote }) => {
  const [title, dispatchTitle] = useReducer(inputReducer, initialObj);
  const [description, dispatchDescription] = useReducer(
    inputReducer,
    initialObj
  );
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.isValid && description.isValid) {
      saveNote({
        title: title.value,
        description: description.value,
        id: Math.random().toString(),
      });
    } else {
      alert('No text field can be empty in order to submit the note');
    }
    dispatchTitle();
    dispatchDescription();
  };

  const inputChangeHandler = (e) => {
    const id = e.target.id;
    const val = e.target.value;

    if (id === 'title') {
      dispatchTitle({
        type: 'INPUT_CHANGE',
        value: val,
      });
    } else {
      dispatchDescription({
        type: 'INPUT_CHANGE',
        value: val,
      });
    }
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
        value={title.value}
        error={title.isValid === false ? true : false}
        helperText={title.isValid === false ? "Text field can't be empty" : ''}
        onChange={(e) => inputChangeHandler(e)}
      />
      <TextField
        sx={inputStyle}
        fullWidth
        id='description'
        label='Description'
        variant='filled'
        value={description.value}
        error={description.isValid === false ? true : false}
        helperText={
          description.isValid === false ? "Text field can't be empty" : ''
        }
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
