import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';

const HeroContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const HeroTitle = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

const HeroSubtitle = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const HeroButton = styled(Button)`
  color: ${(props) => props.theme.palette.primary.contrastText};
  border-color: ${(props) => props.theme.palette.primary.contrastText};
`;

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <HeroContainer>
      <HeroTitle variant="h2" >
        {title}
      </HeroTitle>
      <HeroSubtitle variant="h4">{subtitle}</HeroSubtitle>
      <HeroButton variant="outlined" onClick={onButtonClick}>
        {buttonText}
      </HeroButton>
    </HeroContainer>
  );
};

export default Hero;
