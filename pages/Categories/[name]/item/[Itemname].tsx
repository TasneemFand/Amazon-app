import React from 'react';

import {
  getItems,
  getCategoryItem,
  getCategories
} from '../../../../src/services/index';
import { Box, Container, Grid, Typography } from '@mui/material';
import { item } from '@/types';
import Categoryitem from '@/content/Categories/categoryItem';
import SidebarLayout from '@/layouts/SidebarLayout';
import Head from 'next/head';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Overview/Hero/PageHeader';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';
import { Button } from 'flowbite-react';

type Props = {
  item: item;
};
const ItemDetails = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Item details</title>
      </Head>
      {/* <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper> */}
      <Box p={3}>
        <Box
          sx={{
            pb: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h3">Item details</Typography>

            {/* <LocalFireDepartmentIcon fill="#ffa500" /> */}
          </Box>
        </Box>
        {router.isFallback ? (
          <Loader />
        ) : (
          <Box>
            <Box mb={2}>
              <Categoryitem item={props.item} />
            </Box>
            <Box display="flex">
              <Button
              // onClick={handleAddToCart}
              // disabled={item.inCart}
              // className={item.inCart ? 'button-disabled' : ''}
              >
                {/* {item.inCart ? 'Item in a cart' : 'Add to cart'} */}
                Add to cart
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

ItemDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default ItemDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const items = await getCategoryItem(params.name);
  const item = items.find((item) => item.name === params.Itemname);
  return {
    props: { item }
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const items = await getItems();
  return {
    paths: items.map((item) => item.name),
    fallback: true
  };
}
