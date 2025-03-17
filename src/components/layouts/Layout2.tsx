import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from '../shared/CountdownTimer';
import SocialIcons from '../shared/SocialIcons';

interface Layout2Props {
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

const Layout2 = ({ title, subtitle, targetDate, socialLinks }: Layout2Props) => {
  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: `url('/background/background-2.jpg')`,
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
            background: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
          },
        }}
      />
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.default',
          p: 4,
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'left' }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  color: 'primary.main',
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
              <CountdownTimer date={targetDate} variant="gradient" />
              <Box sx={{ mt: 4 }}>
                <SocialIcons {...socialLinks} />
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Layout2; 