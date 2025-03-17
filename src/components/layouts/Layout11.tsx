import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from '../shared/CountdownTimer';
import SocialIcons from '../shared/SocialIcons';

interface Layout11Props {
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

const Layout11 = ({ title, subtitle, targetDate, socialLinks }: Layout11Props) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `url('/background/background-11.jpg')`,
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
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: 6,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    zIndex: -1,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    right: -10,
                    bottom: -10,
                    border: '2px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      right: -20,
                      bottom: -20,
                      border: '2px solid rgba(255,255,255,0.05)',
                      borderRadius: '50%',
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
                      textAlign: 'center',
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
                      textAlign: 'center',
                    }}
                  >
                    {subtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <SocialIcons {...socialLinks} />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  p: 6,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    zIndex: -1,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    right: -10,
                    bottom: -10,
                    border: '2px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      right: -20,
                      bottom: -20,
                      border: '2px solid rgba(255,255,255,0.05)',
                      borderRadius: '50%',
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
                    <CountdownTimer date={targetDate} variant="circular" />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout11; 