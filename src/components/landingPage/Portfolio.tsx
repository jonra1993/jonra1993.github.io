import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
  makeStyles,
  IconButton,
  useTheme
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 20,
    paddingTop: 100,
  },
  gridList: {
    width: '100%',
    height: 'auto',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '8%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Portfolio = ({ data, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div
      className={clsx(classes.root)}
      {...rest}
    >
      <Box 
        display="flex" 
        mb={10} 
        alignContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          gutterBottom
          color="textPrimary"
        >
          CHECK OUT SOME OF MY WORKS
        </Typography>
      </Box>
      <ImageList cols={matches ? 1 : 4} className={classes.gridList}>
        {data?.map((tile) => (
          <ImageListItem key={tile.image}>
            <img src={tile.image} alt={tile.title} />
            <ImageListItemBar
              title={tile.title}
              actionIcon={
                <IconButton 
                  aria-label={`info about ${tile.title}`} 
                  className={classes.icon}
                  component="a"
                  href={tile.url}
                  target="_blank"
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

Portfolio.propTypes = {
  data: PropTypes.array,
};

Portfolio.defaultProps = {
  data: [],
};

export default Portfolio;
