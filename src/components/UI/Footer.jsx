import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          height: '40px',
          width: '100%',
          position: 'absolute',
          bottom: '0px',
          backgroundColor: 'primary.main',
        }}
      >
        <Typography
          variant='6'
          color='#fff'
          align='center'
        >
          Mariano Fuentes 2023
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
