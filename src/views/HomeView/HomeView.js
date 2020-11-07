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
import { getPersonalDataAction } from 'src/redux/actions/personalDataAction'


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
        console.log(name);
        setName('I')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Page
            title="Home"
        >
            {resumeData.main &&<Hero data={resumeData.main}/>}
            {resumeData.main !== undefined && <About data={resumeData.main} />}
            {resumeData.testimonials !== undefined && <Testimonials data={resumeData.testimonials} />}
            {resumeData.resume !== undefined && <Resume data={resumeData.resume} />}
            {
                resumeData.portfolio !== undefined && <Portfolio data={resumeData.portfolio} />
            }
            {
                resumeData.main !== undefined && <Footer data={resumeData.main} />
            }
        </Page>

    );

}

export default HomeView;
