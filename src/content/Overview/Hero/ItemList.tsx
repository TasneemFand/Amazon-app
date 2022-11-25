import { Box, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useContext } from 'react';
import { OverviewContext } from 'pages';
import React from 'react';
import Slider from '@/components/Slider';

const ItemList = () => {
  const { items } = useContext(OverviewContext);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h3">Hot deals</Typography>

          <LocalFireDepartmentIcon fill="#ffa500" />
        </Box>
      </Box>
      <Box sx={{ overflow: 'hidden' }}>
        <Slider slides={items}></Slider>
      </Box>
    </>
  );
};

export default ItemList;
