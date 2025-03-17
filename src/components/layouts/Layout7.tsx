import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from '../shared/CountdownTimer';
import SocialIcons from '../shared/SocialIcons';

interface Layout7Props {
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

const Layout7 = ({ title, subtitle, targetDate, socialLinks }: Layout7Props) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `url('/background/background-7.jpg')`,
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
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={24}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                transform: 'rotate(-1deg)',
                '&:hover': {
                  transform: 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #2196f3, #f50057)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                }}
              >
                {subtitle}
              </Typography>
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Paper
              elevation={24}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                transform: 'rotate(1deg)',
                '&:hover': {
                  transform: 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out',
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
                <CountdownTimer date={targetDate} variant="split" />
              </Box>
            </Paper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Paper
              elevation={24}
              sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                transform: 'rotate(-0.5deg)',
                '&:hover': {
                  transform: 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <SocialIcons {...socialLinks} />
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout7; 