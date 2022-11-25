import { forwardRef, Ref, useState, ReactElement } from 'react';
import {
  Box,
  Divider,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  Slide
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import SearchIcon from '@mui/icons-material/Search';
import HeaderSearch from '.';

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-container {
          height: auto;
      }
      
      .MuiDialog-paperScrollPaper {
          max-height: calc(100vh - 64px)
      }
  `
);

const DialogTitleWrapper = styled(DialogTitle)(
  ({ theme }) => `
      background: ${theme.colors.alpha.black[5]};
      padding: ${theme.spacing(3)};
      overflow: auto;
  `
);

const HeaderSearchMobile = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title="Search" onClick={handleClickOpen}>
        <IconButton
          color="primary"
          //   size="small"
          //   sx={{
          //     '& .css-1gj9ncf-MuiButtonBase-root-MuiIconButton-root': {
          //       border: 'none'
          //     },
          //     '& .css-1gj9ncf-MuiButtonBase-root-MuiIconButton-root:hover': {
          //       background: 'unset'
          //     }
          //   }}
        >
          <SearchIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <DialogWrapper
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
        scroll="paper"
        onClose={handleClose}
      >
        <DialogTitleWrapper>
          <Box width="max-content">
            <HeaderSearch />
          </Box>
        </DialogTitleWrapper>
        <Divider />
      </DialogWrapper>
    </>
  );
};

export default HeaderSearchMobile;
