/* eslint-disable import/newline-after-import */
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
export default function Top() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', marginTop: '200px' }} />
      </Container>
    </>
  );
}
