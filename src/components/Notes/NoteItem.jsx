import React from 'react';
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const NoteItem = ({ title, description, id, deleteNote }) => {
  const deleteNoteHandler = (id) => {
    deleteNote(id);
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            aria-label='delete'
            color='error'
            onClick={(e) => deleteNoteHandler(id)}
          >
            <DeleteForeverIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteItem;
