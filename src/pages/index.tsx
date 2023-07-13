import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../utils/link-mui';
import ProTip from '../components/pro-tip';
import Copyright from '../components/copyright-mui';
import Hero from 'src/components/hero';

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Hero
        title='Doing things differently'
        description='I am passionated about innovation and entrepreneurship as well as disruptive technologies and their application for the benefit of the society. I am always ready to help you turn your ideas into technological products.'
        github='https://github.com/jonra1993'
        website='https://www.allient.io'
      />
    </div>
  );
}
