'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import Layout1 from '../components/layouts/Layout1';
import Layout2 from '../components/layouts/Layout2';
import Layout3 from '../components/layouts/Layout3';
import Layout4 from '../components/layouts/Layout4';
import Layout5 from '../components/layouts/Layout5';
import Layout6 from '../components/layouts/Layout6';
import Layout7 from '../components/layouts/Layout7';
import Layout8 from '../components/layouts/Layout8';
import Layout9 from '../components/layouts/Layout9';
import Layout10 from '../components/layouts/Layout10';
import Layout11 from '../components/layouts/Layout11';
import Layout12 from '../components/layouts/Layout12';
import LayoutSwitcher from '../components/LayoutSwitcher';
import { useSearchParams } from 'next/navigation';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import BrushIcon from '@mui/icons-material/Brush';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CodeIcon from '@mui/icons-material/Code';

const defaultProps = {
  title: 'Coming Soon',
  subtitle: 'We are working hard to bring you something amazing.',
  targetDate: new Date('2024-12-31'),
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    email: 'mailto:contact@example.com',
  },
};

export default function Home() {
  const searchParams = useSearchParams();
  const [currentLayout, setCurrentLayout] = useState(0);

  useEffect(() => {
    const layoutParam = searchParams.get('layout');
    if (layoutParam) {
      const layoutNumber = parseInt(layoutParam);
      if (layoutNumber >= 1 && layoutNumber <= 12) {
        setCurrentLayout(layoutNumber);
      }
    }
  }, [searchParams]);

  const layouts = [
    Layout1,
    Layout2,
    Layout3,
    Layout4,
    Layout5,
    Layout6,
    Layout7,
    Layout8,
    Layout9,
    Layout10,
    Layout11,
    Layout12,
  ];

  const layoutInfo = [
    { id: 1, title: 'Minimal Design', description: 'Clean and simple layout with minimal styling', image: '/background/background-1.jpg', features: ['Minimal style', 'Bottom border countdown', 'Clean typography'] },
    { id: 2, title: 'Split Screen', description: 'Half image, half content layout with gradient styling', image: '/background/background-2.jpg', features: ['Split screen design', 'Gradient countdown', 'Blur effect'] },
    { id: 3, title: 'Glass Card', description: 'Elegant card with glassmorphism effect', image: '/background/background-3.jpg', features: ['Card layout', 'Glass effect', 'Gradient text'] },
    { id: 4, title: 'Grid Layout', description: 'Modern grid-based design with separate content sections', image: '/background/background-4.jpg', features: ['Grid layout', 'Neon countdown', 'Dual cards'] },
    { id: 5, title: 'Diagonal Split', description: 'Dynamic design with diagonal split and gradient background', image: '/background/background-5.jpg', features: ['Diagonal split', 'Timeline countdown', 'Gradient text'] },
    { id: 6, title: 'Asymmetrical', description: 'Asymmetrical layout with bordered sections', image: '/background/background-6.jpg', features: ['Asymmetrical design', 'Card countdown', 'Gradient borders'] },
    { id: 7, title: 'Stacked Cards', description: 'Playful design with stacked and rotated cards', image: '/background/background-7.jpg', features: ['Stacked cards', 'Split countdown', 'Rotation effects'] },
    { id: 8, title: 'Neon Accent', description: 'Dark theme with neon green accents', image: '/background/background-8.jpg', features: ['Dark theme', 'Diagonal countdown', 'Neon accents'] },
    { id: 9, title: 'Timeline', description: 'Vertical timeline inspired layout', image: '/background/background-9.jpg', features: ['Timeline design', 'Default countdown', 'Light theme'] },
    { id: 10, title: 'Geometric', description: 'Bold geometric shapes and overlays', image: '/background/background-10.jpg', features: ['Geometric shapes', 'Polygon countdown', 'Layered design'] },
    { id: 11, title: 'Circular', description: 'Elegant circular elements with pulsing animations', image: '/background/background-11.jpg', features: ['Circular elements', 'Pulsing animations', 'Concentric circles'] },
    { id: 12, title: 'Wave', description: 'Fluid wave-inspired design with smooth curves', image: '/background/background-12.jpg', features: ['Wave shapes', 'Fluid countdown', 'Curved sections'] },
  ];

  const features = [
    { icon: <DevicesIcon color="primary" fontSize="large" />, title: 'Responsive Design', description: 'Looks perfect on all devices from mobile to desktop' },
    { icon: <SpeedIcon color="primary" fontSize="large" />, title: 'Fast Performance', description: 'Optimized for speed with minimal load times' },
    { icon: <BrushIcon color="primary" fontSize="large" />, title: '12 Unique Layouts', description: 'Choose from a variety of professionally designed layouts' },
    { icon: <AccessTimeIcon color="primary" fontSize="large" />, title: 'Countdown Timer', description: 'Customizable countdown with multiple style variants' },
    { icon: <CodeIcon color="primary" fontSize="large" />, title: 'Clean Code', description: 'Well-structured and documented code for easy customization' },
  ];

  // If a layout is selected via URL parameter, show that layout
  if (currentLayout > 0) {
    const CurrentLayout = layouts[currentLayout - 1];
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <CurrentLayout {...defaultProps} />
          <LayoutSwitcher currentLayout={currentLayout} onLayoutChange={setCurrentLayout} />
          <Footer />
        </Box>
      </ThemeProvider>
    );
  }

  // Otherwise show the home page
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
            pt: { xs: 12, md: 8 },
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                    }}
                  >
                    Modern Coming Soon Pages
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      mb: 4,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                    }}
                  >
                    12 beautiful and responsive layouts for your under construction page
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: '#fff',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.9)',
                        },
                      }}
                    >
                      Purchase Now
                    </Button>
                    <Button
                      component={Link}
                      href="/docs"
                      variant="outlined"
                      size="large"
                      sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        '&:hover': {
                          borderColor: '#fff',
                          bgcolor: 'rgba(255,255,255,0.1)',
                        },
                      }}
                    >
                      View Documentation
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    component="img"
                    src="/background/background-1.jpg"
                    alt="Coming Soon Template"
                    sx={{
                      width: '100%',
                      borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      mt: { xs: 4, md: 0 },
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 10, bgcolor: '#f5f5f5' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 6, fontWeight: 700, color: '#333' }}
              >
                Key Features
              </Typography>
              <Grid container spacing={4}>
                {features.map((feature, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Paper
                        elevation={2}
                        sx={{
                          p: 4,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                        <Typography variant="h5" component="h3" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {feature.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Layouts Section */}
        <Box sx={{ py: 10 }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                Available Layouts
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                sx={{ mb: 6 }}
              >
                Choose from 12 unique and customizable designs
              </Typography>
              <Grid container spacing={4}>
                {layoutInfo.map((layout) => (
                  <Grid item xs={12} md={6} lg={4} key={layout.id}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          '&:hover': {
                            boxShadow: 6,
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={layout.image}
                          alt={layout.title}
                          sx={{
                            objectFit: 'cover',
                            '&:hover': {
                              transform: 'scale(1.05)',
                              transition: 'transform 0.3s ease-in-out',
                            },
                          }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h3">
                            {layout.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {layout.description}
                          </Typography>
                          <List dense>
                            {layout.features.map((feature, index) => (
                              <ListItem key={index} disableGutters>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={feature} />
                              </ListItem>
                            ))}
                          </List>
                          <Button
                            component={Link}
                            href={`/?layout=${layout.id}`}
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                          >
                            Preview Layout
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: 10,
            background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
            color: 'white',
          }}
        >
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ mb: 4, fontWeight: 700 }}
              >
                Ready to Get Started?
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{ mb: 6, opacity: 0.9 }}
              >
                Purchase now and have your coming soon page up and running in minutes
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#fff',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  Purchase Now
                </Button>
                <Button
                  component={Link}
                  href="/docs"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    '&:hover': {
                      borderColor: '#fff',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  View Documentation
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
