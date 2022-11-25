import { FC, ReactNode, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import NextLink from 'next/link';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  IconButton,
  Rating,
  Typography,
  useTheme
} from '@mui/material';
import React from 'react';
import { item } from '@/types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import Label from 'src/components/Label';
type props = {
  slides: item[];
  children?: ReactNode;
  // index: number;
};
const Slider = (props: props) => {
  const slideRef = useRef();
  const [current, SetCurrent] = useState(0);

  let classNames = 'slide';
  const handleChangeClassNames = (index: number) => {
    if (current === index) classNames += ' slide--current';
    else if (current - 1 === index) classNames += ' slide--previous';
    else if (current + 1 === index) classNames += ' slide--next';

    return classNames;
  };

  const handlePreviousClick = () => {
    const previous = current - 1;
    SetCurrent(previous < 0 ? props.slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    SetCurrent(next === props.slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      SetCurrent(index);
    }
  };

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / props.slides.length)}%)`
  };

  return (
    <div className="slider">
      <ul className="slider__wrapper" style={wrapperTransform}>
        {props.slides.map((item, index) => {
          return (
            <NextLink
              href={`/Categories/${item.category}/${item.name}`}
              shallow
              passHref
              key={item.name}
            >
              <li
                key={item.name}
                ref={slideRef}
                className={handleChangeClassNames(index)}
                // onClick={handleSlideClick(index)}
                // onMouseMove={this.handleMouseMove}
                // onMouseLeave={this.handleMouseLeave}
              >
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
                          src={item.img}
                          alt={item.title}
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
                            {item.title}
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
                        <Rating
                          name="read-only"
                          value={item.reviews}
                          readOnly
                        />
                        <Typography variant="subtitle1" noWrap>
                          (21,000 reviews)
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        {item.discount ? (
                          <>
                            <Label color="success">{item.discountPrice}</Label>
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
                              {item.price}
                            </Typography>
                          </>
                        ) : (
                          <Label color="success">{item.price}</Label>
                        )}
                      </Box>
                      <NextLink
                        href={`/Categories/${item.category}/item/${item.name}`}
                        shallow
                        passHref
                        key={item.name}
                      >
                        <Button
                          disableRipple
                          component="a"
                          // startIcon={<BrightnessLowTwoToneIcon />}
                        >
                          continue reading
                        </Button>
                      </NextLink>
                    </Box>
                  </CardActionArea>
                </Card>
              </li>
            </NextLink>
          );
        })}
      </ul>

      <div className="slider__controls">
        <button
          className="btn btn--previous"
          title="Go to previous slide"
          onClick={handlePreviousClick}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </button>
        <button
          className="btn btn--next"
          title="Go to next slide"
          onClick={handleNextClick}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
