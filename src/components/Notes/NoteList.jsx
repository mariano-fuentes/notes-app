import React from 'react';
import NoteItem from './NoteItem';
import Grid from '@mui/material/Grid';

const NoteList = ({ notes }) => {
  return (
    <ul>
      <Grid
        container
        spacing={2}
      >
        {notes.map((note) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={note.id}
            >
              <NoteItem
                key={note.id}
                title={note.title}
                description={note.description}
                id={note.id}
              ></NoteItem>
            </Grid>
          );
        })}
      </Grid>
    </ul>
  );
};

export default NoteList;
