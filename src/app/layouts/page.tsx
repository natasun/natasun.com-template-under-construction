'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import Link from 'next/link';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const layouts = [
  {
    id: 1,
    title: 'Classic Full Screen',
    description: 'A clean, modern design with a full-screen background and centered content.',
    image: '/background/background-1.jpg',
    path: '/?layout=1',
  },
  {
    id: 2,
    title: 'Split Screen',
    description: 'A balanced layout with image on one side and content on the other.',
    image: '/background/background-2.jpg',
    path: '/?layout=2',
  },
  {
    id: 3,
    title: 'Card Design',
    description: 'Elegant card-based design with glassmorphism effect.',
    image: '/background/background-3.jpg',
    path: '/?layout=3',
  },
  {
    id: 4,
    title: 'Grid Layout',
    description: 'Modern grid-based design with separate content sections.',
    image: '/background/background-4.jpg',
    path: '/?layout=4',
  },
  {
    id: 5,
    title: 'Diagonal Split',
    description: 'Dynamic design with diagonal split and gradient background.',
    image: '/background/background-5.jpg',
    path: '/?layout=5',
  },
  {
    id: 6,
    title: 'Asymmetrical',
    description: 'Asymmetrical layout with bordered sections.',
    image: '/background/background-6.jpg',
    path: '/?layout=6',
  },
  {
    id: 7,
    title: 'Stacked Cards',
    description: 'Playful design with stacked and rotated cards.',
    image: '/background/background-7.jpg',
    path: '/?layout=7',
  },
  {
    id: 8,
    title: 'Neon Accent',
    description: 'Dark theme with neon green accents.',
    image: '/background/background-8.jpg',
    path: '/?layout=8',
  },
  {
    id: 9,
    title: 'Timeline',
    description: 'Vertical timeline inspired layout.',
    image: '/background/background-9.jpg',
    path: '/?layout=9',
  },
  {
    id: 10,
    title: 'Geometric',
    description: 'Bold geometric shapes and overlays.',
    image: '/background/background-10.jpg',
    path: '/?layout=10',
  },
  {
    id: 11,
    title: 'Circular',
    description: 'Elegant circular elements with pulsing animations.',
    image: '/background/background-11.jpg',
    path: '/?layout=11',
  },
  {
    id: 12,
    title: 'Wave',
    description: 'Fluid wave-inspired design with smooth curves.',
    image: '/background/background-12.jpg',
    path: '/?layout=12',
  },
];

export default function LayoutsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box 
          sx={{ 
            flex: 1,
            bgcolor: '#f5f5f5', 
            py: 8, 
            pt: 16 
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper elevation={3} sx={{ p: 4, mb: 6, borderRadius: 2 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                  Under Construction Templates
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                  Choose from our collection of modern and responsive under construction page layouts.
                  Each template is designed to be unique and customizable.
                </Typography>
              </Paper>

              <Grid container spacing={4}>
                {layouts.map((layout) => (
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
                          <Typography gutterBottom variant="h5" component="h2">
                            {layout.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {layout.description}
                          </Typography>
                          <Button
                            component={Link}
                            href={layout.path}
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
        <Footer />
      </Box>
    </ThemeProvider>
  );
} 