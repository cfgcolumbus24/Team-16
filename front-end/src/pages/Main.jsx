import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import alumain from "../images/alumain.png";
import EventIcon from "@mui/icons-material/Event";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import FeedIcon from "@mui/icons-material/Feed";
import "tailwindcss/tailwind.css";

const DashboardCard = styled(Card)({
  padding: "24px",
  textAlign: "center",
  color: "#555",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
  },
});

function Main() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${alumain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        py: 6,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          zIndex: 1,
        },
      }}
      className="relative overflow-hidden"
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box className="animate-fadeIn text-center mb-6">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-md"
          >
            Lower Manhattan Cultural Council Alumni Network
          </Typography>
          <Typography
            variant="h6"
            className="text-lg md:text-2xl text-gray-200 mb-4 drop-shadow-sm"
          >
            Stay connected, stay informed, and explore new opportunities.
          </Typography>
        </Box>
        <Box className="mb-6">
          <Typography
            variant="h4"
            gutterBottom
            className="text-3xl md:text-4xl font-bold text-center text-white mb-8 drop-shadow-md animate-bounce"
          >
            Explore the Network
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {cardsData.map((card, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                className="group transform transition-all duration-300 hover:scale-105 hover:z-10"
              >
                <DashboardCard className="bg-white rounded-lg shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
                  <card.icon
                    fontSize="large"
                    sx={{ mb: 2, color: "#00BDF2" }}
                    className="animate-pulse"
                  />
                  <Typography
                    variant="h5"
                    component="h3"
                    className="font-semibold text-lg group-hover:text-primary"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ mb: 2 }}
                    className="text-sm text-gray-600"
                  >
                    {card.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#00BDF2", "&:hover": { backgroundColor: "#009bbd" } }}
                    className="text-white font-bold py-2 px-4 rounded-full shadow-lg group-hover:shadow-2xl"
                    href={card.link}
                  >
                    {card.buttonText}
                  </Button>
                </DashboardCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-40 blur-3xl animate-float"></div>
        <div className="w-72 h-72 bg-gradient-to-r from-pink-400 to-transparent rounded-full opacity-30 blur-2xl animate-float delay-2000"></div>
      </div>
    </Box>
  );
}

const cardsData = [
  {
    icon: PeopleIcon,
    title: "Directory",
    description: "Browse the alumni directory and connect with fellow graduates.",
    buttonText: "View Directory",
    link: "/directory",
  },
  {
    icon: EventIcon,
    title: "Events",
    description: "Stay updated on the latest events and meetups with other alumni.",
    buttonText: "Explore Events",
    link: "/events",
  },
  {
    icon: WorkIcon,
    title: "Opportunities",
    description: "Discover job opportunities and collaborations available to alumni.",
    buttonText: "Find Opportunities",
    link: "/opportunities",
  },
  {
    icon: FeedIcon,
    title: "Feed",
    description: "Check out the latest news and updates from the alumni network.",
    buttonText: "View Feed",
    link: "/feed",
  },
  {
    icon: AccountBoxIcon,
    title: "Profile",
    description: "Update your profile and share your latest achievements.",
    buttonText: "Update Profile",
    link: "/profile",
  },
];

export default Main;









