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
      <Hero/>
    </div>
  );
}
