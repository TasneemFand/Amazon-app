import {
  Card,
  Box,
  Typography,
  IconButton,
  Rating,
  CardActionArea,
  Button
} from '@mui/material';
import Label from 'src/components/Label';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import { item } from '@/types';

type Props = {
  item: item;
};
const Categoryitem = (props: Props) => {
  return (
    <Card
      sx={{
        overflow: 'visible'
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            p: 3
          }}
        >
          <Box display="flex" alignItems="center">
            <IconButton color="primary">
              <FavoriteIcon />
            </IconButton>
          </Box>
          <Box>
            <Image
              src={props.item.img}
              alt={props.item.title}
              width={700}
              height={600}
              layout="responsive"
            />
          </Box>
          <Box
            mb={2}
            sx={{
              display: 'flex',
              alignItems: 'center'
              // justifyContent: 'flex-start'
            }}
          >
            <Box>
              <Typography variant="h4" noWrap>
                {props.item.title}
              </Typography>
            </Box>
          </Box>
          <Box
            mb={2}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Rating name="read-only" value={props.item.reviews} readOnly />
            <Typography variant="subtitle1" noWrap>
              (21,000 reviews)
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            {props.item.discount ? (
              <>
                <Label color="success">{props.item.discountPrice}</Label>
                <Typography
                  sx={{
                    padding: '4.5px 9px',
                    marginBottom: '0px',
                    color: 'red',
                    textDecoration: 'line-through'
                  }}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  {props.item.price}
                </Typography>
              </>
            ) : (
              <Label color="success">{props.item.price}</Label>
            )}
          </Box>
          {/* <Button
            href={`/Categories/${props.item.category}/${props.item.name}`}
            variant="outlined"
          >
            Continue Reading
          </Button> */}
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Categoryitem;
