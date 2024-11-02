import React from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Paper,
  Grid,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import ProfilePicture from '../images/stockpfp.png';

const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: '#00BDF2',
  color: '#ffffff',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const ProfileCard = styled(Paper)(({ theme }) => ({
  maxWidth: 800,
  margin: 'auto',
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  boxShadow: theme.shadows[3],
}));

const SkillsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <ProfileCard>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4} textAlign="center">
              <Avatar
                alt="Alumni Photo"
                src={ProfilePicture}
                sx={{ width: 128, height: 128, margin: 'auto' }}
              />
              <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                Jane Doe
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Visual Artist
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Tabs value={value} onChange={handleChange} aria-label="Profile Tabs">
                <Tab label="About" />
                <Tab label="Skills" />
              </Tabs>
              {value === 0 && (
                <Box mt={2}>
                  <Typography variant="body1" color="text.primary">
                    Welcome to the LMCC Alumni Network. Stay updated with our latest news and events, and reconnect with fellow alumni. Jane Doe is a visual artist specializing in contemporary arts. Her work explores the intersection of nature and human emotions.
                  </Typography>
                  <Box mt={4}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Contact Information
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="jane.doe@example.com" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="(123) 456-7890" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="New York, NY" />
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              )}
              {value === 1 && (
                <Box mt={2}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Skills
                  </Typography>
                  <SkillsWrapper>
                    <Chip label="Painting" color="primary" />
                    <Chip label="Sketching" color="secondary" />
                    <Chip label="Digital Art" color="default" />
                    <Chip label="Photography" color="primary" />
                    <Chip label="Adobe Photoshop" color="secondary" />
                    <Chip label="Creativity" color="default" />
                  </SkillsWrapper>
                </Box>
              )}
            </Grid>
          </Grid>
        </ProfileCard>
      </Container>
    </Box>
  );
};

export default Profile;



