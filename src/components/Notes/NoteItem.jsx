import React from 'react';
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const NoteItem = ({ title, description, id }) => {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            aria-label='delete'
            color='error'
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
