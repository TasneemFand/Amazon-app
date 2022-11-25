import { useState, ChangeEvent, useContext, SyntheticEvent } from 'react';
import {
  Avatar,
  Link,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  TextField,
  Theme,
  Hidden,
  InputBase,
  Autocomplete
} from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';

import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { SidebarContext } from '@/contexts/SidebarContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

const HeaderSearch = () => {
  const { categories } = useContext(SidebarContext);
  const [filteredData, setFilteredData] = useState<
    Array<{ name: string; href: string }>
  >([]);
  const [wordEntered, setWordEntered] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChangeCategories = (
    event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setSelectedCategory(value);
  };
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = categories
      .filter((value) => {
        return selectedCategory === 'All'
          ? value.name
          : value.name === selectedCategory;
      })
      .map((catego) => {
        return catego.items?.filter((item) => {
          return item.name.toLowerCase().includes(searchWord.toLowerCase());
        });
      })
      .filter((item) => item !== undefined)
      .flat();

    // console.log(
    //   filter
    //     .filter((item) => {
    //       return item !== undefined;
    //     })
    //     .flat()
    // );
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(
        newFilter as unknown as Array<{ name: string; href: string }>
      );
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  const theme = useTheme();

  return (
    <Box height="55px">
      <Box
        component="form"
        sx={{
          display: 'flex',

          alignItems: 'center',
          width: 'fit-content',
          // border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5
          },
          '& hr': {
            mx: 0.5
          }
        }}
      >
        <Search>
          <StyledInputBase
            placeholder="Search…"
            value={wordEntered}
            onChange={handleSearchChange}
            inputProps={{ 'aria-label': 'search' }}
            // endAdornment={{filteredData.length === 0 ? (
            //   <SearchIcon />
            // ) : (
            //   <CloseIcon onClick={clearInput} />
            // )}}
          />
        </Search>

        <Divider orientation="vertical" flexItem />
        <Autocomplete
          onChange={handleChangeCategories}
          disablePortal
          sx={{
            width: 200,
            [theme.breakpoints.down('sm')]: {
              width: '100%'
            },
            // '& .css-tcnms7-MuiInputBase-root-MuiInput-root:before': {
            //   display: 'none'
            // }

            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline ': {
              border: 'none'
            },
            '& .css-17y8bjm-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
              {
                display: 'none'
              },

            '& .css-1jfsosj-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator':
              {
                color: 'unset',
                background: 'unset',
                fontSize: 'small'
              },
            '& .css-1q60rmi-MuiAutocomplete-endAdornment': {
              [theme.breakpoints.down('md')]: {
                display: 'none'
              }
            },
            '& .css-1jfsosj-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator:hover':
              {
                color: 'unset',
                background: 'unset'
              },
            '& .css-1q60rmi-MuiAutocomplete-endAdornment ': {
              top: '0px'
            }
          }}
          options={categories
            .filter((item) => item.title)
            .map((item) => item.title)}
          renderInput={(params) => (
            <TextField {...params} placeholder="All categories" />
          )}
        />
      </Box>
      {filteredData && filteredData.length != 0 && (
        <Box
          className="searchResult"
          sx={{
            marginTop: '5px',
            overflow: 'hidden',
            overflowY: 'auto'
          }}
        >
          <List disablePadding>
            {filteredData.map((value, key) => {
              return (
                <ListItem
                  sx={{
                    background: 'rgb(242, 243, 255)'
                  }}
                  button
                  key={value.name}
                >
                  <Hidden smDown>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          background: (theme: Theme) =>
                            theme.palette.secondary.main
                        }}
                      >
                        <FindInPageTwoToneIcon />
                      </Avatar>
                    </ListItemAvatar>
                  </Hidden>
                  <Box flex="1">
                    <Box display="flex" justifyContent="space-between">
                      <Link
                        href={value.href}
                        underline="hover"
                        sx={{ fontWeight: 'bold' }}
                        variant="body2"
                      >
                        {value.name}
                      </Link>
                    </Box>
                  </Box>
                  <ChevronRightTwoToneIcon />
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default HeaderSearch;
