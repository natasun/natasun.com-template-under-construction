import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        bgcolor: '#f5f5f5',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Image 
              src="https://www.natasun.com/logo/icon-44x44.png" 
              alt="Natasun Logo" 
              width={22} 
              height={22}
            />
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              © {currentYear} All Rights Reserved |
            </Typography>
          </Box>
          <MuiLink 
            href="https://natasun.com" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            <Typography variant="body2">
              Natasun.com
            </Typography>
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 