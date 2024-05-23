import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const PageHome: React.FunctionComponent = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2 }}
          textAlign="center"
        >
          Material UI Create React App example in TypeScript
        </Typography>
      </Box>
    </Container>
  );
};

export default PageHome;
