import React, { useState, useEffect, useRef, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ReactGA from 'react-ga';
import About from './components/About';
import Resume from './components/Resume';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import clsx from 'clsx';
import { getPersonalDataAction } from 'src/redux/slices/personalData';
import { isValidObject } from 'src/utils/validation';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        paddingTop: 0,
        paddingBottom: 120,
        [theme.breakpoints.down('md')]: {
          paddingTop: 60,
          paddingBottom: 60
        }
      },
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
        setName('I')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Page
            title="Home"
        >
            {isValidObject(resumeData) &&<Hero data={resumeData.main}/>}
            {isValidObject(resumeData) && <About data={resumeData.main} />}
            {isValidObject(resumeData) && <Testimonials data={resumeData.testimonials} />}
            {isValidObject(resumeData) && <Resume data={resumeData.resume} />}
            {
                isValidObject(resumeData) && <Portfolio data={resumeData.portfolio} />
            }
            {
                isValidObject(resumeData) && <Footer data={resumeData.main} />
            }
        </Page>

    );

}

export default HomeView;
