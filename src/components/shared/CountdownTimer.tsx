import { Box, Typography, SxProps, Theme } from '@mui/material';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

interface CountdownTimerProps {
  date: Date;
  className?: string;
  variant?: 'default' | 'geometric' | 'circular' | 'wave' | 'minimal' | 'gradient' | 'glass' | 'neon' | 'timeline' | 'card' | 'split' | 'diagonal';
}

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Define a type for the style objects
interface VariantStyles {
  container: SxProps<Theme>;
  box: SxProps<Theme>;
  value: SxProps<Theme>;
  label: SxProps<Theme>;
}

const CountdownTimer = ({ date, className, variant = 'default' }: CountdownTimerProps) => {
  const renderer = ({ days, hours, minutes, seconds }: TimeUnits) => {
    const timeUnits = [
      { value: days, label: 'Days' },
      { value: hours, label: 'Hours' },
      { value: minutes, label: 'Minutes' },
      { value: seconds, label: 'Seconds' },
    ];

    const getVariantStyles = (): VariantStyles => {
      switch (variant) {
        case 'minimal':
          return {
            container: {
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'transparent',
              padding: 2,
              textAlign: 'center',
              minWidth: 100,
              borderBottom: '2px solid rgba(255,255,255,0.3)',
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '2rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'gradient':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.2), rgba(245, 0, 87, 0.2))',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '2.5rem',
              lineHeight: 1,
              textShadow: '0 0 10px rgba(255,255,255,0.3)',
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'glass':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'rgba(255, 255, 255, 0.1)',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '2.5rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'neon':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'rgba(0, 0, 0, 0.5)',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              borderRadius: '10px',
              border: '2px solid #00ff87',
              boxShadow: '0 0 20px rgba(0,255,135,0.3)',
            },
            value: {
              fontWeight: 'bold',
              color: '#00ff87',
              fontSize: '2.5rem',
              lineHeight: 1,
              textShadow: '0 0 10px rgba(0,255,135,0.5)',
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'timeline':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'transparent',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '20px',
                background: 'rgba(255,255,255,0.3)',
              },
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '2.5rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'card':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'rgba(255, 255, 255, 0.95)',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            },
            value: {
              fontWeight: 'bold',
              color: 'primary.main',
              fontSize: '2.5rem',
              lineHeight: 1,
            },
            label: {
              color: 'text.secondary',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'split':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'transparent',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(245, 0, 87, 0.1))',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                zIndex: -1,
              },
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '2.5rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'diagonal':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'rgba(255, 255, 255, 0.1)',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '2.5rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'geometric':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: 3,
              textAlign: 'center',
              minWidth: 120,
              minHeight: 120,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(245, 0, 87, 0.1))',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                zIndex: -1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -2,
                left: -2,
                right: -2,
                bottom: -2,
                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.2), rgba(245, 0, 87, 0.2))',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                zIndex: -2,
              },
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '0 0 10px rgba(255,255,255,0.3)',
              fontSize: '2.5rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        case 'circular':
          return {
            container: {
              display: 'flex',
              gap: 4,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: 4,
              textAlign: 'center',
              minWidth: 140,
              minHeight: 140,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 30px rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -4,
                left: -4,
                right: -4,
                bottom: -4,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.2), rgba(245, 0, 87, 0.2))',
                zIndex: -1,
                animation: 'pulse 2s infinite',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -8,
                left: -8,
                right: -8,
                bottom: -8,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.1)',
                animation: 'pulse 3s infinite',
              },
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '0 0 10px rgba(255,255,255,0.3)',
              fontSize: '2.8rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginTop: '0.5rem',
            },
          };
        case 'wave':
          return {
            container: {
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: 3,
              textAlign: 'center',
              minWidth: 130,
              minHeight: 130,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '30px',
                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(245, 0, 87, 0.1))',
                zIndex: -1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: -2,
                left: -2,
                right: -2,
                bottom: -2,
                borderRadius: '30px',
                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.2), rgba(245, 0, 87, 0.2))',
                zIndex: -2,
                animation: 'wave 3s infinite',
              },
            },
            value: {
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '0 0 10px rgba(255,255,255,0.3)',
              fontSize: '2.5rem',
              lineHeight: 1,
            },
            label: {
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            },
          };
        default:
          return {
            container: {
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 2,
            },
            box: {
              background: 'rgba(255, 255, 255, 0.9)',
              padding: 2,
              borderRadius: 2,
              textAlign: 'center',
              minWidth: 100,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
            value: {
              fontWeight: 'bold',
            },
            label: {
              color: 'text.secondary',
            },
          };
      }
    };

    const styles = getVariantStyles();

    return (
      <Box sx={styles.container as SxProps<Theme>}>
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Box sx={styles.box as SxProps<Theme>}>
              <Typography variant="h4" component="div" sx={styles.value as SxProps<Theme>}>
                {unit.value}
              </Typography>
              <Typography variant="body2" sx={styles.label as SxProps<Theme>}>
                {unit.label}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    );
  };

  return (
    <Countdown
      date={date}
      renderer={renderer}
      className={className}
      intervalDelay={1000}
    />
  );
};

export default CountdownTimer; 