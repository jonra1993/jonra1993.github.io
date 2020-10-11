import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ReactGA from 'react-ga';
import About from './About';
import Resume from './Resume';
//import Contact from './Contact';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import {getPersonalDataAction} from 'src/redux/actions/personalDataAction'

const useStyles = makeStyles(() => ({
    root: {}
  }));

const HomeView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const resumeData = useSelector(state => state.personalDataState.personalData);
    const [name, setName] = useState('Jonathan');

    useEffect(() => {
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
        dispatch(getPersonalDataAction());
        console.log(name);
        setName('I')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Page
        className={classes.root}
        title="Home"
      >
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Testimonials data={resumeData.testimonials} />
            <Portfolio data={resumeData.portfolio} />
            {
                //<Contact data={resumeData.main} />
            }
      </Page>      

    );

}

export default HomeView;