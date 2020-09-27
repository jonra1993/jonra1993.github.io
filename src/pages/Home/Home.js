import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ReactGA from 'react-ga';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import About from '../../Components/About';
import Resume from '../../Components/Resume';
import Contact from '../../Components/Contact';
import Portfolio from '../../Components/Portfolio';
import {getPersonalDataAction} from '../../redux/actions/personalDataAction'

const Home = () => {
    const dispatch = useDispatch();
    const resumeData = useSelector(state => state.personalDataState.personalData);
    const [name, setName] = useState('Jonathan');

    useEffect(() => {
        //Google Analytics library
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
        dispatch(getPersonalDataAction());
        console.log(name);
        setName('I')
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="App">
            <Header data={resumeData.main} />
            <About data={resumeData.main} />
            <Resume data={resumeData.resume} />
            <Portfolio data={resumeData.portfolio} />
            <Contact data={resumeData.main} />
            <Footer data={resumeData.main} />
        </div>
    );

}

export default Home;
