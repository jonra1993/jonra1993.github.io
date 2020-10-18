import React, { useState, useEffect, useRef, createRef } from 'react'
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
import clsx from 'clsx';
import { getPersonalDataAction } from 'src/redux/actions/personalDataAction'
import Clouds from 'vanta/dist/vanta.clouds.min'
import BIRDS from 'vanta/dist/vanta.birds.min'
import TRUNK from 'vanta/dist/vanta.trunk.min'
import * as THREE from 'three'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        paddingTop: 0,
        paddingBottom: 120,
        [theme.breakpoints.down('md')]: {
          paddingTop: 60,
          paddingBottom: 60
        }
      },}));

const HomeView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const resumeData = useSelector(state => state.personalDataState.personalData);
    const [name, setName] = useState('Jonathan');
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef();

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(BIRDS({
            THREE,
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x232c4a,
            color1: 0x115f48,
            color2: 0x971e6,
            // birdSize: 1.20,
            // wingSpan: 23.00,
            // speedLimit: 6.00,
            // separation: 75.00,
            // alignment: 48.00,
            // cohesion: 24.00
          }))
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])

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
            {resumeData.main &&
                <div
                    id={'hero'}
                    className={classes.root}
                    ref={vantaRef}
                >
                    <Hero data={resumeData.main}/>
                </div>
            }
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
