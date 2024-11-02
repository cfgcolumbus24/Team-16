import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function CalloutBox({ text, title }) {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: '24px auto',
        padding: '16px',
        borderRadius: '16px',
        boxShadow: 3,
        backgroundColor: '#f0f4ff',
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h6" component="div" sx={{ color: '#00BDF2', fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="textPrimary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CalloutBox;