import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import PercentIcon from '@mui/icons-material/Percent';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  Button,
  lighten,
  darken
} from '@mui/material';

import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: ${theme.header.height};
        @media (max-width: ${theme.breakpoints.values.sm}px) {
          width: calc(${theme.sidebar.width} - ${theme.spacing(7)});
          min-width: auto;
      }
              
`
);

const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
            md: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:
            theme.palette.mode === 'dark'
              ? alpha(lighten(theme.header.background, 0.1), 0.5)
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        }}
      >
        <Scrollbar>
          <Box height={theme.header.height} position="relative">
            <Box
              position="absolute"
              sx={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            >
              <Logo />
            </Box>
          </Box>
          <Divider
            sx={{
              // mt: theme.spacing(2),
              // mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10]
            }}
          />
          <SidebarMenu />
        </Scrollbar>

        <Box height={theme.header.height} overflow="scroll">
          <Divider
            sx={{
              background: theme.colors.alpha.trueWhite[10]
            }}
          />
          <Box p={2} overflow="scroll">
            <Button
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              color="primary"
              size="small"
              fullWidth
              startIcon={<PercentIcon />}
              sx={{
                justifyContent: 'left'
              }}
            >
              Sell on Amazon
            </Button>

            <Button
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              color="primary"
              size="small"
              fullWidth
              startIcon={<HelpOutlineIcon />}
              sx={{
                justifyContent: 'left'
              }}
            >
              Help
            </Button>
          </Box>
        </Box>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
          ' & .css-1fveuyb-MuiPaper-root-MuiDrawer-paper': {
            background:
              theme.palette.mode === 'dark'
                ? alpha(lighten(theme.header.background, 0.1), 0.5)
                : darken(theme.colors.alpha.black[100], 0.5)
          }
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5)
          }}
        >
          <Scrollbar>
            <Box height={theme.header.height} position="relative">
              <Box
                position="absolute"
                sx={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }}
              >
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                // mt: theme.spacing(3),
                // mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu />
          </Scrollbar>
          <Divider
            sx={{
              // mt: theme.spacing(3),
              // mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10]
            }}
          />
          <Box p={2}>
            <Button
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              color="primary"
              size="small"
              fullWidth
              startIcon={<PercentIcon />}
              sx={{
                justifyContent: 'left'
              }}
            >
              Sell on Amazon
            </Button>
            <Button
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              color="primary"
              size="small"
              fullWidth
              startIcon={<HelpOutlineIcon />}
              sx={{
                justifyContent: 'left'
              }}
            >
              Help
            </Button>
          </Box>
        </SidebarWrapper>
      </Drawer>
    </>
  );
};

export default Sidebar;
