import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from '../shared/CountdownTimer';
import SocialIcons from '../shared/SocialIcons';

interface Layout9Props {
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

const Layout9 = ({ title, subtitle, targetDate, socialLinks }: Layout9Props) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `url('/background/background-9.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  pl: 4,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, #2196f3, #f50057)',
                  },
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: 'primary.main',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#2196f3',
                      border: '2px solid #fff',
                      boxShadow: '0 0 0 4px rgba(33, 150, 243, 0.2)',
                    },
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#f50057',
                      border: '2px solid #fff',
                      boxShadow: '0 0 0 4px rgba(245, 0, 87, 0.2)',
                    },
                  }}
                >
                  {subtitle}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={24}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: 'linear-gradient(to bottom, #f50057, #2196f3)',
                  },
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 4,
                      fontWeight: 600,
                      color: 'secondary.main',
                    }}
                  >
                    Launching In
                  </Typography>
                  <CountdownTimer date={targetDate} variant="default" />
                  <Box sx={{ mt: 4 }}>
                    <SocialIcons {...socialLinks} />
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout9; 