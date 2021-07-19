import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Container,
  makeStyles,
  Divider
} from '@material-ui/core';
import LevelSection from './resume/LevelSection';
import SkillsSection from './resume/SkillsSection';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: theme.palette.background.default,
  },

}));

const Resume = ({ data, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root)}
      {...rest}
    >
      {data && (
        <Container maxWidth="md">
          <LevelSection title="Work" data={data.work} />
          <Divider />
          <LevelSection title="Education" data={data.education} />
          <Divider />
          <SkillsSection title="Skills" data={data.skills} />
        </Container>
      )}
    </div>
  );
}

Resume.propTypes = {
  data: PropTypes.object,
};

export default Resume;
