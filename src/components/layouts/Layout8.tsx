import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from '../shared/CountdownTimer';
import SocialIcons from '../shared/SocialIcons';

interface Layout8Props {
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

const Layout8 = ({ title, subtitle, targetDate, socialLinks }: Layout8Props) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `url('/background/background-8.jpg')`,
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
          background: 'linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
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
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  color: '#fff',
                  textShadow: '0 0 10px rgba(255,255,255,0.3)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #00ff87, #60efff)',
                    borderRadius: '2px',
                  },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 300,
                }}
              >
                {subtitle}
              </Typography>
              <Box sx={{ mb: 4 }}>
                <SocialIcons {...socialLinks} />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  p: 4,
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 0 20px rgba(0,255,135,0.1)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: '#00ff87',
                    textAlign: 'center',
                  }}
                >
                  Coming Soon
                </Typography>
                <CountdownTimer date={targetDate} variant="diagonal" />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout8; 