import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ReactGA from 'react-ga';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Resume from '../../components/Resume';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Testimonials from '../../components/Testimonials';
import {getPersonalDataAction} from '../../redux/actions/personalDataAction'

const Home = () => {
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
        <div className="App">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Testimonials data={resumeData.testimonials} />
            <Portfolio data={resumeData.portfolio} />
            {
                //<Contact data={resumeData.main} />
            }
            <Footer data={resumeData.main} />
        </div>
    );

}

export default Home;
