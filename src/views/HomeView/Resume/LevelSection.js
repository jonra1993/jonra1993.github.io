import React from 'react';
import PropTypes from 'prop-types';
import { loadCSS } from 'fg-loadcss';
import clsx from 'clsx';
import {
    Avatar,
    Button,
    Box,
    Container,
    Grid,
    Typography,
    makeStyles,
    IconButton,
    Icon,
    Divider
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



const LevelSection = ({ className, title, data, ...rest }) => {
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
                    <Box display="flex" ml={10} alignContent='center' align='center' alignItems='center'>
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
                                <Box ml={2} mb={5}>
                                    <Typography
                                        variant="h3"
                                        gutterBottom
                                        color="textPrimary"
                                    >
                                        {item.institution}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="textPrimary"
                                        gutterBottom
                                        className={classes.title2}
                                    >
                                        {item.title} &bull; {item.years}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="textPrimary"
                                        gutterBottom
                                        className={classes.description}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            ))
                        }
                </Grid>
            </Grid>
        </Box>

    )
}

LevelSection.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
    title: PropTypes.string

}

LevelSection.defaultProps = {
    data: [],
    title: ''
};

export default LevelSection
