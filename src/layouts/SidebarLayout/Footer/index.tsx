import { useContext } from 'react';

import {
  Box,
  alpha,
  lighten,
  styled,
  useTheme,
  darken,
  Typography,
  Link
} from '@mui/material';

import Logo from '@/components/LogoSign';
import { ThemeContext } from '@/theme/ThemeProvider';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `

  height: ${theme.header.height};
        background-color: ${
          theme.palette.mode === 'dark'
            ? alpha(lighten(theme.header.background, 0.1), 0.5)
            : darken(theme.colors.alpha.black[100], 0.5)
        };
        width: 100%;
        position: absolute;
        bottom: 0px;
        @media (max-width: ${theme.breakpoints.values.md}px) {
            height: fit-content;
            

        };

        // @media (max-width: ${theme.breakpoints.values.sm}px) {
        //     position: relative;
            

        // };

        
`
);

const Footer = () => {
  const { locale, setLocale, themeName, setThemeName } =
    useContext(ThemeContext);
  const theme = useTheme();

  return (
    <HeaderWrapper
      sx={{
        p: '18px 18px'
      }}
      display={{ xs: 'block', sm: 'flex', md: 'flex' }}
      alignItems="center"
      textAlign={{ xs: 'center', md: 'left' }}
      justifyContent="space-around"
    >
      <Box>
        <Logo />
      </Box>
      <Box>
        <Typography variant="subtitle1">&copy; 1996-2017</Typography>
      </Box>
      <Typography
        sx={{
          pt: { xs: 2, sm: 0, md: 0 }
        }}
        variant="subtitle1"
      >
        <Link
          color="rgba(34, 51, 84, 0.7)"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conditions of use and sale
        </Link>
      </Typography>
      <Typography
        sx={{
          pt: { xs: 2, sm: 0, md: 0 }
        }}
        variant="subtitle1"
      >
        <Link
          color="rgba(34, 51, 84, 0.7)"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Notice
        </Link>
      </Typography>
    </HeaderWrapper>
  );
};

export default Footer;
