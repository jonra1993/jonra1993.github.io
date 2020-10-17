import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles,
  Divider
} from '@material-ui/core';
import LevelSection from './LevelSection';
import SkillsSection from './SkillsSection';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: 100,
      paddingBottom: 100
    },

  }));

const Resume = ({ className, data, ...rest }) => {
    const classes = useStyles();


  return (
    <div
    className={clsx(classes.root, className)}
    {...rest}
  >
    <Container maxWidth="md">
      <LevelSection title='Education' data={data.education}/>
      <Divider/>
      <LevelSection title='Work' data={data.work}/>
      <Divider/>
      <SkillsSection title='Skills' data={data.skills}/>
    </Container>
    </div>    
  );
}

Resume.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired
  };

export default Resume;