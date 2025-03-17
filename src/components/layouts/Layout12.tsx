import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from '../shared/CountdownTimer';
import SocialIcons from '../shared/SocialIcons';

interface Layout12Props {
  title: string;
  subtitle: string;
  targetDate: Date;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

const Layout12 = ({ title, subtitle, targetDate, socialLinks }: Layout12Props) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `url('/background/background-12.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(245, 0, 87, 0.1))',
          clipPath: 'path("M0,0 C100,0 100,100 0,100 C0,100 0,0 0,0 Z")',
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: 4,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '30px',
                    clipPath: 'path("M0,0 C100,0 100,100 0,100 C0,100 0,0 0,0 Z")',
                    zIndex: -1,
                  },
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: '#fff',
                    textShadow: '0 0 10px rgba(255,255,255,0.3)',
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  {subtitle}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <SocialIcons {...socialLinks} />
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: 4,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '30px',
                    clipPath: 'path("M0,0 C0,100 100,100 100,0 C100,0 0,0 0,0 Z")',
                    zIndex: -1,
                  },
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 4,
                      fontWeight: 600,
                      color: '#fff',
                      textShadow: '0 0 10px rgba(255,255,255,0.3)',
                    }}
                  >
                    Launching In
                  </Typography>
                  <CountdownTimer date={targetDate} variant="wave" />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout12; 