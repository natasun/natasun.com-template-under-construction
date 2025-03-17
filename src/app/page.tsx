'use client';

import { useState, useEffect, Suspense } from 'react';
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
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper, List, ListItem, ListItemIcon, ListItemText, CircularProgress } from '@mui/material';
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

// Create a client component that uses useSearchParams
function HomeContent() {
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

  const features = [
    {
      icon: <DevicesIcon fontSize="large" />,
      title: 'Responsive Design',
      description: 'Looks great on all devices, from mobile to desktop.',
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: 'Fast Performance',
      description: 'Optimized for speed and performance.',
    },
    {
      icon: <BrushIcon fontSize="large" />,
      title: 'Customizable',
      description: 'Easy to customize with multiple layout options.',
    },
    {
      icon: <AccessTimeIcon fontSize="large" />,
      title: 'Countdown Timer',
      description: '12 unique countdown timer styles to choose from.',
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'Clean Code',
      description: 'Well-structured and documented code.',
    },
    {
      icon: <CheckCircleOutlineIcon fontSize="large" />,
      title: 'SEO Friendly',
      description: 'Built with SEO best practices in mind.',
    },
  ];

  const availableLayouts = [
    {
      id: 1,
      title: 'Minimal Design',
      description: 'Clean and minimal design with a focus on typography.',
      image: '/background/background-1.jpg',
      features: ['Minimal countdown timer', 'Clean typography', 'Social icons'],
    },
    {
      id: 2,
      title: 'Split Screen',
      description: 'Split screen layout with image on one side and content on the other.',
      image: '/background/background-2.jpg',
      features: ['Gradient countdown timer', 'Split screen layout', 'Social icons'],
    },
    {
      id: 3,
      title: 'Glass Morphism',
      description: 'Modern glass morphism effect with blur backdrop.',
      image: '/background/background-3.jpg',
      features: ['Glass countdown timer', 'Blur backdrop', 'Social icons'],
    },
    {
      id: 4,
      title: 'Grid Layout',
      description: 'Grid-based layout with separate content sections.',
      image: '/background/background-4.jpg',
      features: ['Neon countdown timer', 'Grid layout', 'Social icons'],
    },
    {
      id: 5,
      title: 'Diagonal Split',
      description: 'Dynamic design with diagonal split and gradient background.',
      image: '/background/background-5.jpg',
      features: ['Timeline countdown timer', 'Diagonal split', 'Social icons'],
    },
    {
      id: 6,
      title: 'Asymmetrical',
      description: 'Asymmetrical layout with bordered sections.',
      image: '/background/background-6.jpg',
      features: ['Card countdown timer', 'Asymmetrical layout', 'Social icons'],
    },
    {
      id: 7,
      title: 'Stacked Cards',
      description: 'Playful design with stacked and rotated cards.',
      image: '/background/background-7.jpg',
      features: ['Split countdown timer', 'Stacked cards', 'Social icons'],
    },
    {
      id: 8,
      title: 'Neon Accent',
      description: 'Dark theme with neon green accents.',
      image: '/background/background-8.jpg',
      features: ['Diagonal countdown timer', 'Neon accents', 'Social icons'],
    },
    {
      id: 9,
      title: 'Timeline',
      description: 'Vertical timeline inspired layout.',
      image: '/background/background-9.jpg',
      features: ['Default countdown timer', 'Timeline design', 'Social icons'],
    },
    {
      id: 10,
      title: 'Geometric',
      description: 'Bold geometric shapes and overlays.',
      image: '/background/background-10.jpg',
      features: ['Geometric countdown timer', 'Polygon shapes', 'Social icons'],
    },
    {
      id: 11,
      title: 'Circular',
      description: 'Elegant circular elements with pulsing animations.',
      image: '/background/background-11.jpg',
      features: ['Circular countdown timer', 'Pulsing animations', 'Social icons'],
    },
    {
      id: 12,
      title: 'Wave',
      description: 'Fluid wave-inspired design with smooth curves.',
      image: '/background/background-12.jpg',
      features: ['Wave countdown timer', 'Fluid design', 'Social icons'],
    },
  ];

  // If a layout is selected, render it
  if (currentLayout > 0 && currentLayout <= layouts.length) {
    const SelectedLayout = layouts[currentLayout - 1];
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box sx={{ flex: 1 }}>
            <SelectedLayout {...defaultProps} />
          </Box>
          <LayoutSwitcher currentLayout={currentLayout} onLayoutChange={setCurrentLayout} />
          <Footer />
        </Box>
      </ThemeProvider>
    );
  }

  // Otherwise, render the home page
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flex: 1 }}>
          {/* Hero Section */}
          <Box
            sx={{
              pt: 15,
              pb: 10,
              background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
              color: 'white',
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
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      Modern Under Construction Template
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                      12 unique layouts with countdown timers and animations
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Button
                        component={Link}
                        href="/layouts"
                        variant="contained"
                        size="large"
                        sx={{
                          background: 'linear-gradient(45deg, #2196f3, #f50057)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #1976d2, #c51162)',
                          },
                        }}
                      >
                        View All Layouts
                      </Button>
                      <Button
                        component={Link}
                        href="/docs"
                        variant="outlined"
                        size="large"
                        sx={{ color: 'white', borderColor: 'white' }}
                      >
                        Documentation
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
                      alt="Hero"
                      sx={{
                        width: '100%',
                        borderRadius: 4,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        mt: { xs: 4, md: 0 }
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
                            borderRadius: 2,
                          }}
                        >
                          <Box
                            sx={{
                              mb: 2,
                              color: 'primary.main',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            {feature.icon}
                          </Box>
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
                  sx={{ mb: 6, fontWeight: 700, color: '#333' }}
                >
                  Available Layouts
                </Typography>
                <Grid container spacing={4}>
                  {availableLayouts.slice(0, 6).map((layout) => (
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
                            borderRadius: 2,
                            overflow: 'hidden',
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
                                    <CheckCircleOutlineIcon color="primary" />
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
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                  <Button
                    component={Link}
                    href="/layouts"
                    variant="outlined"
                    color="primary"
                    size="large"
                  >
                    View All Layouts
                  </Button>
                </Box>
              </motion.div>
            </Container>
          </Box>

          {/* CTA Section */}
          <Box
            sx={{
              py: 10,
              background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
              color: 'white',
            }}
          >
            <Container maxWidth="md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
                    Ready to Get Started?
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                    Choose from 12 unique layouts and customize to fit your brand
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(45deg, #2196f3, #f50057)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1976d2, #c51162)',
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
                      sx={{ color: 'white', borderColor: 'white' }}
                    >
                      View Documentation
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Container>
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <CircularProgress />
      </Box>
    }>
      <HomeContent />
    </Suspense>
  );
}
