import { Icon } from '@iconify/react';
import { Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';

interface SocialIconsProps {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  email?: string;
}

const SocialIcons = ({ facebook, instagram, twitter, youtube, email }: SocialIconsProps) => {
  const socialLinks = [
    { icon: 'mdi:facebook', href: facebook },
    { icon: 'mdi:instagram', href: instagram },
    { icon: 'mdi:twitter', href: twitter },
    { icon: 'mdi:youtube', href: youtube },
    { icon: 'mdi:email', href: `mailto:${email}` },
  ].filter(link => link.href);

  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.icon}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <IconButton
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'primary.main',
              '&:hover': {
                color: 'secondary.main',
                transform: 'scale(1.1)',
              },
            }}
          >
            <Icon icon={link.icon} width={24} height={24} />
          </IconButton>
        </motion.div>
      ))}
    </Box>
  );
};

export default SocialIcons; 