import { Box, Button, Container, Grid, Typography } from '@mui/material';
import OfficeCanvas from 'src/components/office';

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container sx={{ px: "10%" }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={4} >
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h2" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
                Hi, My name is Jonathan
              </Typography>
              <Typography variant="h6" color="grey" sx={{ mb: 4 }}>
                I love creating awesome tech solutions
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 5 }}>
                Get in Touch
              </Button>

            </Box>
          </Grid>
          <Grid item xs={12} md={8} >
            <Box display="flex" sx={{ alignItems: { xs: "center", md: "flex-end", height: 500 } }}>
              <OfficeCanvas />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
