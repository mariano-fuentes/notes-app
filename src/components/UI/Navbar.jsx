import { AppBar, Typography } from '@mui/material';

const Navbar = () => {
  const styles = {
    bar: {
      height: '40px',
      marginBottom: '20px',
    },
    text: {
      marginLeft: '20px',
    },
  };
  return (
    <nav>
      <AppBar
        sx={styles.bar}
        position='static'
      >
        <Typography
          sx={styles.text}
          variant='h6'
        >
          NOTES APP
        </Typography>
      </AppBar>
    </nav>
  );
};

export default Navbar;
