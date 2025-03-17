import { Box, IconButton, Tooltip, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import TimelineIcon from '@mui/icons-material/Timeline';
import PentagonIcon from '@mui/icons-material/Pentagon';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import WavesIcon from '@mui/icons-material/Waves';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

interface LayoutSwitcherProps {
  currentLayout: number;
  onLayoutChange: (layout: number) => void;
}

const LayoutSwitcher = ({ currentLayout, onLayoutChange }: LayoutSwitcherProps) => {
  const layouts = [
    { id: 1, icon: ViewModuleIcon, tooltip: 'Classic Layout' },
    { id: 2, icon: ViewStreamIcon, tooltip: 'Split Screen Layout' },
    { id: 3, icon: ViewComfyIcon, tooltip: 'Card Layout' },
    { id: 4, icon: ViewQuiltIcon, tooltip: 'Grid Layout' },
    { id: 5, icon: ViewSidebarIcon, tooltip: 'Diagonal Split Layout' },
    { id: 6, icon: ViewColumnIcon, tooltip: 'Asymmetrical Layout' },
    { id: 7, icon: ViewTimelineIcon, tooltip: 'Timeline Layout' },
    { id: 8, icon: ViewKanbanIcon, tooltip: 'Kanban Layout' },
    { id: 9, icon: TimelineIcon, tooltip: 'Vertical Timeline Layout' },
    { id: 10, icon: PentagonIcon, tooltip: 'Geometric Layout' },
    { id: 11, icon: RadioButtonCheckedIcon, tooltip: 'Circular Layout' },
    { id: 12, icon: WavesIcon, tooltip: 'Wave Layout' },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          p: 1,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" sx={{ color: '#fff', mb: 1, textAlign: 'center' }}>
            Switch Layout
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '300px', gap: 0.5 }}>
          {layouts.map((layout) => {
            const Icon = layout.icon;
            return (
              <Tooltip key={layout.id} title={layout.tooltip}>
                <IconButton
                  onClick={() => onLayoutChange(layout.id)}
                  sx={{
                    color: currentLayout === layout.id ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                    bgcolor: currentLayout === layout.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    '&:hover': {
                      color: '#fff',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  size="small"
                >
                  <Icon fontSize="small" />
                </IconButton>
              </Tooltip>
            );
          })}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 1 }}>
          <Tooltip title="Back to Home">
            <IconButton
              component={Link}
              href="/"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  color: '#fff',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
              size="small"
            >
              <HomeIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Box>
  );
};

export default LayoutSwitcher; 