import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  
  // Determine if we're on a page with a light background (docs or layouts)
  const isLightPage = pathname === '/docs' || pathname === '/layouts';

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: isLightPage 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" passHref>
              <Button 
                color="inherit" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  textTransform: 'none',
                  color: isLightPage ? 'primary.main' : '#fff',
                  '&:hover': {
                    background: isLightPage 
                      ? 'rgba(33, 150, 243, 0.1)' 
                      : 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Your Logo
              </Button>
            </Link>
            <Link href="/layouts" passHref>
              <Button 
                color="inherit"
                sx={{ 
                  color: isLightPage ? 'text.primary' : '#fff',
                  '&:hover': {
                    background: isLightPage 
                      ? 'rgba(33, 150, 243, 0.1)' 
                      : 'rgba(255, 255, 255, 0.1)',
                  },
                  ...(pathname === '/layouts' && {
                    borderBottom: isLightPage 
                      ? '2px solid #2196f3' 
                      : '2px solid #fff',
                    fontWeight: 500,
                  }),
                }}
              >
                Layouts
              </Button>
            </Link>
            <Link href="/docs" passHref>
              <Button 
                color="inherit"
                sx={{ 
                  color: isLightPage ? 'text.primary' : '#fff',
                  '&:hover': {
                    background: isLightPage 
                      ? 'rgba(33, 150, 243, 0.1)' 
                      : 'rgba(255, 255, 255, 0.1)',
                  },
                  ...(pathname === '/docs' && {
                    borderBottom: isLightPage 
                      ? '2px solid #2196f3' 
                      : '2px solid #fff',
                    fontWeight: 500,
                  }),
                }}
              >
                Documentation
              </Button>
            </Link>
          </Box>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<ShoppingCartIcon />}
              sx={{
                background: 'linear-gradient(45deg, #2196f3, #f50057)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976d2, #c51162)',
                },
              }}
            >
              Purchase Now
            </Button>
          </motion.div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 