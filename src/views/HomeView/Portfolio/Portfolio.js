import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Box,
  Typography,
  makeStyles,
  IconButton,
  Icon,
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
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Portfolio = ({ className, data, width, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  console.log(data);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box display="flex" mb={10} alignContent='center' align='center' alignItems='center'>
        <Typography
          variant="h1"
          gutterBottom
          color="textPrimary"
          className={classes.title}
        >
          CHECK OUT SOME OF MY WORKS
        </Typography>
      </Box>
      <GridList cellHeight={180} cols={matches?1:4} className={classes.gridList}>
        {data!==undefined&&data.map((tile) => (
          <GridListTile key={tile.image}>
            <img src={tile.image} alt={tile.title} />
            <GridListTileBar
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
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Portfolio.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array
};

Portfolio.defaultProps = {
  data: [],
};

export default Portfolio;