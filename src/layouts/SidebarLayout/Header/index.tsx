import { useContext } from 'react';

import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  darken
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderNotifications from './Buttons/Notifications';
import HeaderFavorites from './Buttons/Favorite';
import Headershopping from './Buttons/Shopping';
import HeaderSearchMobile from './Buttons/Search/searchMobile';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${
          theme.palette.mode === 'dark'
            ? alpha(lighten(theme.header.background, 0.1), 0.5)
            : darken(theme.colors.alpha.black[100], 0.5)
        };
        
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
      
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        };
        @media (max-width: ${theme.breakpoints.values.sm}px) {
          padding: 0px;
      }

`
);

const SearchWrapper = styled(Box)(
  ({ theme }) => `
        
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none;
}
`
);
const Header = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`
      }}
    >
      <SearchWrapper>
        <HeaderButtons />
      </SearchWrapper>

      <Box
        sx={{
          mx: 0.5
        }}
        display="flex"
        alignItems="center"
        width={{ xs: '100%', md: 'auto', sm: 'auto' }}
        justifyContent={{ xs: 'space-evenly', sm: 'center', md: 'center' }}
        margin={{ xs: 0, sm: 0 }}
      >
        <Box display={{ md: 'none', sm: 'none' }}>
          <HeaderSearchMobile />
        </Box>
        <HeaderNotifications />
        <HeaderFavorites />
        <Headershopping />
        <HeaderUserbox />
      </Box>
      <Box
        component="span"
        sx={{
          // ml: 2,
          display: { lg: 'none', xs: 'inline-block' }
        }}
      >
        <Tooltip arrow title="Toggle Menu">
          <IconButton color="primary" onClick={toggleSidebar}>
            {!sidebarToggle ? (
              <MenuTwoToneIcon fontSize="small" />
            ) : (
              <CloseTwoToneIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
