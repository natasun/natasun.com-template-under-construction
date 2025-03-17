import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountdownTimer from '../shared/CountdownTimer';
import SocialIcons from '../shared/SocialIcons';

interface Layout5Props {
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

const Layout5 = ({ title, subtitle, targetDate, socialLinks }: Layout5Props) => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: 'relative',
            background: `url('/background/background-5.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
            },
            clipPath: {
              xs: 'none',
              md: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
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
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              opacity: 0.8,
            },
          }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
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
                <Box sx={{ my: 4 }}>
                  <CountdownTimer date={targetDate} variant="timeline" />
                </Box>
                <SocialIcons {...socialLinks} />
              </Box>
            </motion.div>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout5; 