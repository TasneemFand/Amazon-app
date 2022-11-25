import { Box, styled, useTheme } from '@mui/material';
import Link from 'src/components/Link';
import Image from 'next/image';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: ${theme.header.height};
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  ({ theme }) => `
        width:  ${theme.header.height};
`
);

function Logo() {
  const theme = useTheme();

  return (
    <LogoWrapper href="/">
      <LogoSignWrapper>
        <Image
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
          width={500}
          height={200}
          layout="responsive"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </LogoSignWrapper>
    </LogoWrapper>
  );
}

export default Logo;
