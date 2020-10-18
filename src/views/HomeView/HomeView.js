import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ReactGA from 'react-ga';
import About from './About';
import Resume from './Resume';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio'
import Footer from './Footer';
import { getPersonalDataAction } from 'src/redux/actions/personalDataAction'

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
            {resumeData.main!==undefined&&<Hero data={resumeData.main}/>}
            {resumeData.main!==undefined&&<About data={resumeData.main} />}
            {resumeData.testimonials!==undefined&&<Testimonials data={resumeData.testimonials} />}
            {resumeData.resume!==undefined&&<Resume data={resumeData.resume}/>}
            {resumeData.portfolio!==undefined&&<Portfolio data={resumeData.portfolio} />}
            {resumeData.main!==undefined&&<Footer data={resumeData.main}/>}
        </Page>

    );

}

export default HomeView;
