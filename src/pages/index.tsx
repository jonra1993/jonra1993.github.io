import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import BusinessIcon from '@mui/icons-material/Business';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button
} from '@mui/material';
import BIRDS from 'vanta/dist/vanta.birds.min';
import useHeight from 'src/hooks/useHeight';

const HeroContainer = styled('div')`
  background-color: ${(props) => props.theme.palette.background.default};
  padding-top: 0;
  padding-bottom: 120px;
  ${(props) => props.theme.breakpoints.down('md')} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const TechnologyIcon = styled('img')`
  height: 40px;
  margin: ${(props) => props.theme.spacing(1)};
`;

const ImageContainer = styled('div')`
  perspective-origin: left center;
  transform-style: preserve-3d;
  perspective: 1500;
  & > img {
    max-width: 80%;
    height: auto;
    transform: rotateY(-15deg) rotateX(5deg);
    backface-visibility: hidden;
    box-shadow: ${(props) => props.theme.shadows[16]};
  }
`;

const HeroTitle = styled(Typography)`
  color: #F4F8F9;
  ${(props) => props.theme.breakpoints.down('md')} {
    text-align: center;
  }
`;

const HeroDescription = styled(Typography)`
  color: #D4F8F9;
`;

const HeroButtons = styled(Box)`
  & > * {
    margin: ${(props) => props.theme.spacing(2)};
  }
`;

interface HeroProps {
  data: {
    title: string;
    description: string;
    github: string;
    website: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const height = useHeight();
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(BIRDS({
        el: vantaRef.current,
        // p5: p5, // use a custom p5 when initializing
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: height,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x232c4a,
        color1: 0x115f48,
        color2: 0x971e6,
        birdSize: 1.20,
        wingSpan: 23.00,
        speedLimit: 6.00,
        separation: 75.00,
        alignment: 48.00,
        cohesion: 24.00
      }));
    } else {
      vantaEffect?.resize();
    }
    return () => {
      if (vantaEffect) vantaEffect?.destroy();
    };
  }, [vantaEffect, height]);

  return (
    <HeroContainer id="hero" ref={vantaRef}>
      <Container maxWidth="lg">
        {data && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                <HeroTitle variant="h1">{data.title}</HeroTitle>
                <Box mt={3}>
                  <HeroDescription variant="body1" color="textSecondary">
                    {data.description}
                  </HeroDescription>
                </Box>
                <Box mt={3} className="buttons">
                  <Button variant="contained" color="primary" target="_blank" href={data.github} startIcon={<GitHubIcon />}>
                    Github
                  </Button>
                  <Button variant="contained" color="primary" target="_blank" href={data.website} startIcon={<BusinessIcon />}>
                    Company
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box position="relative">
                <ImageContainer>
                  <img
                    alt="Presentation"
                    src="https://res.cloudinary.com/dnv0qwkrk/image/upload/v1604790122/wordpress_Jonathan/oie_42Yv0CR18gxi_qxnjn7.png"
                  />
                </ImageContainer>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </HeroContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  }).isRequired
};

export default Hero;
