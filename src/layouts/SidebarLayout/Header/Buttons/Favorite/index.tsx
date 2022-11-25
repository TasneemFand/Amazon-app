import {
  Box,
  Divider,
  IconButton,
  List,
  Popover,
  Tooltip,
  Typography
} from '@mui/material';
import { useRef, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HeaderFavorites = () => {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title="Favorites">
        <IconButton color="primary" ref={ref} onClick={handleOpen}>
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box
          sx={{ p: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Favorites</Typography>
        </Box>
        <Divider />
        <List sx={{ p: 0 }}>
          {/* <ListItem
            sx={{ p: 2, minWidth: 350, display: { xs: 'block', sm: 'flex' } }}
          >
            <Box flex="1">
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ fontWeight: 'bold' }}>
                  Messaging Platform
                </Typography>
                <Typography variant="caption" sx={{ textTransform: 'none' }}>
                  {formatDistance(subDays(new Date(), 3), new Date(), {
                    addSuffix: true
                  })}
                </Typography>
              </Box>
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {' '}
                new messages in your inbox
              </Typography>
            </Box>
          </ListItem> */}
        </List>
      </Popover>
    </>
  );
};

export default HeaderFavorites;
