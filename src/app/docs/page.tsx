'use client';

import { Box, Container, Typography, Paper, List, ListItem, ListItemText, Divider, Grid, Chip } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

export default function Documentation() {
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
          <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                Documentation
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                Learn how to use and customize the Natasun Coming Soon template
              </Typography>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Getting Started
              </Typography>
              <Typography paragraph>
                This template provides 12 different modern and responsive layouts for your under construction page.
                Each layout is designed with a unique style and includes:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="• Countdown Timer" secondary="Customizable countdown display with 12 unique style variants" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Social Media Links" secondary="Facebook, Instagram, Twitter, YouTube, and Email" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Responsive Design" secondary="Works perfectly on all devices" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Modern Animations" secondary="Smooth transitions and effects" />
                </ListItem>
              </List>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Project Structure
              </Typography>
              <Typography paragraph>
                The project follows Next.js App Router structure:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="• src/app/page.tsx" 
                    secondary="Main home page and layout selector" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="• src/app/docs/page.tsx" 
                    secondary="Documentation page" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="• src/app/layouts/page.tsx" 
                    secondary="Layout gallery page" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="• src/components/layouts/" 
                    secondary="Individual layout components (Layout1.tsx through Layout12.tsx)" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="• src/components/shared/" 
                    secondary="Shared components like CountdownTimer, SocialIcons, and Header" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="• src/theme/" 
                    secondary="Theme configuration" 
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Customization
              </Typography>
              <Typography paragraph>
                To customize the template, you can modify the following:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="1. Title and Subtitle"
                    secondary="Edit the title and subtitle in the defaultProps object in src/app/page.tsx"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="2. Countdown Date"
                    secondary="Modify the targetDate in defaultProps to set your desired launch date"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="3. Social Media Links"
                    secondary="Update the socialLinks object in defaultProps with your social media URLs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="4. Background Images"
                    secondary="Replace the background images in the public/background directory with your own"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="5. Countdown Timer Styles"
                    secondary="Each layout uses a unique countdown timer variant. You can customize these in src/components/shared/CountdownTimer.tsx"
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Countdown Timer Variants
              </Typography>
              <Typography paragraph>
                The template includes 12 unique countdown timer styles:
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6} md={4}>
                  <Chip label="Minimal" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Gradient" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Glass" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Neon" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Timeline" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Card" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Split" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Diagonal" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Default" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Geometric" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Circular" color="primary" sx={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6} md={4}>
                  <Chip label="Wave" color="primary" sx={{ width: '100%' }} />
                </Grid>
              </Grid>
              <Typography paragraph>
                To use a specific variant in your own component:
              </Typography>
              <Box 
                component="pre" 
                sx={{ 
                  bgcolor: '#f5f5f5', 
                  p: 2, 
                  borderRadius: 1, 
                  overflow: 'auto',
                  fontSize: '0.875rem'
                }}
              >
                {`<CountdownTimer date={targetDate} variant="minimal" />`}
              </Box>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Using a Single Layout
              </Typography>
              <Typography paragraph>
                To use only one specific layout:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="1. Remove LayoutSwitcher"
                    secondary="Delete or comment out the LayoutSwitcher component in src/app/page.tsx"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="2. Set Default Layout"
                    secondary="Update the currentLayout state to your preferred layout number (1-12)"
                  />
                </ListItem>
              </List>
              <Typography paragraph>
                Alternatively, you can directly use the layout URL parameter:
              </Typography>
              <Box 
                component="pre" 
                sx={{ 
                  bgcolor: '#f5f5f5', 
                  p: 2, 
                  borderRadius: 1, 
                  overflow: 'auto',
                  fontSize: '0.875rem'
                }}
              >
                {`https://yourdomain.com/?layout=5`}
              </Box>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Navigation
              </Typography>
              <Typography paragraph>
                The template includes three main pages:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="1. Home Page"
                    secondary="Landing page with features and layout showcase"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="2. Layouts Page"
                    secondary="Gallery of all available layouts with preview links"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="3. Documentation"
                    secondary="This documentation page"
                  />
                </ListItem>
              </List>
              <Typography paragraph>
                When viewing a specific layout, a layout switcher appears in the bottom right corner, allowing you to quickly switch between layouts.
              </Typography>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                GitHub and Deployment
              </Typography>
              <Typography paragraph>
                Follow these steps to upload your project to GitHub and deploy it on Vercel:
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                1. Uploading to GitHub
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="a. Create a GitHub Repository"
                    secondary="Go to github.com, sign in, and create a new repository"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="b. Initialize Git in Your Project"
                    secondary="Run the following commands in your project directory:"
                  />
                </ListItem>
              </List>
              <Box 
                component="pre" 
                sx={{ 
                  bgcolor: '#f5f5f5', 
                  p: 2, 
                  borderRadius: 1, 
                  overflow: 'auto',
                  fontSize: '0.875rem',
                  mb: 2
                }}
              >
                {`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main`}
              </Box>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                2. Deploying on Vercel
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="a. Sign Up for Vercel"
                    secondary="Go to vercel.com and sign up with your GitHub account"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="b. Import Your Repository"
                    secondary="From the Vercel dashboard, click 'Add New...' > 'Project' and select your GitHub repository"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="c. Configure Project"
                    secondary="Vercel will automatically detect that it's a Next.js project. You can keep the default settings."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="d. Deploy"
                    secondary="Click 'Deploy' and wait for the build to complete"
                  />
                </ListItem>
              </List>
              <Typography paragraph sx={{ mt: 2 }}>
                Once deployed, Vercel will provide you with a URL where your coming soon page is live. You can also configure a custom domain in the Vercel dashboard.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                3. Updating Your Deployed Site
              </Typography>
              <Typography paragraph>
                Whenever you push changes to your GitHub repository, Vercel will automatically rebuild and redeploy your site:
              </Typography>
              <Box 
                component="pre" 
                sx={{ 
                  bgcolor: '#f5f5f5', 
                  p: 2, 
                  borderRadius: 1, 
                  overflow: 'auto',
                  fontSize: '0.875rem'
                }}
              >
                {`git add .
git commit -m "Update site content"
git push origin main`}
              </Box>

              <Divider sx={{ my: 4 }} />

              <Typography variant="h5" gutterBottom>
                Dependencies
              </Typography>
              <Typography paragraph>
                The template uses the following main dependencies:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="• Next.js" secondary="React framework with App Router" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• @mui/material" secondary="Material UI components" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• @iconify/react" secondary="Icon library" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• framer-motion" secondary="Animation library" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• react-countdown" secondary="Countdown timer component" />
                </ListItem>
              </List>
            </Paper>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
} 