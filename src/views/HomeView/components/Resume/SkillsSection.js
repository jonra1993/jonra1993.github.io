import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Grid,
    Typography,
    makeStyles,
    LinearProgress,
    withStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        textDecoration: 'underline',
        textDecorationColor: 'blue',
    },
    title2: {
        fontStyle: 'italic',
        paddingBottom: 4
    },
    description: {
        color: '#838C95'
    }


}));


const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#214B66',
    },
  }))(LinearProgress);


const SkillsSection = ({ className, title, data, ...rest }) => {
    const classes = useStyles();
    return (
        <Box mt={8}>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Box display="flex" alignContent='center' align='center' alignItems='center'>
                        <Typography
                            variant="h1"
                            gutterBottom
                            color="textPrimary"
                            className={classes.title}
                        >
                            {title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                >
                    {
                        data.map((item, index) => (
                            <Box key={item.name} ml={2} mb={5}>
                                <Typography
                                    variant="h3"
                                    gutterBottom
                                    color="textPrimary"
                                >
                                    {item.name}
                                </Typography>
                                <Box width="100%" mr={1}>
                                    <BorderLinearProgress variant="determinate" value={item.level} />
                                </Box>
                                <Box minWidth={35}>
                                    <Typography variant="body2" color="textSecondary">{`${Math.round(
                                        item.level,
                                    )}%`}</Typography>
                                </Box>

                            </Box>
                        ))
                    }
                </Grid>
            </Grid>
        </Box>

    )
}

SkillsSection.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
    title: PropTypes.string

}

SkillsSection.defaultProps = {
    data: [],
    title: ''
};

export default SkillsSection
