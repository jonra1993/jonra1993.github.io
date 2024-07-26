import type { FC } from 'react';
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import MinusIcon from 'src/icons/Minus';
import Logo from './Logo';

const sections = [
  {
    title: 'Work',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jonra1993'
      },
      {
        title: 'Allient',
        href: 'https://www.www.allient.io'
      },
      {
        title: 'Upwork',
        href: '#'
      }
    ]
  },
  {
    title: 'Social',
    links: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/jona.ra/?hl=es-la'
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jonathan-ramiro-vargas-suasnavas-a29752b5/'
      },
    ]
  }
];

const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      pb: 6,
      pt: {
        md: 15,
        xs: 6
      }
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
      >
        {sections.map((section, index) => (
          <Grid
            item
            key={section.title}
            md={3}
            sm={4}
            sx={{
              order: {
                md: index + 2,
                xs: index + 1
              }
            }}
            xs={12}
          >
            <Typography
              color="textSecondary"
              variant="overline"
            >
              {section.title}
            </Typography>
            <List disablePadding>
              {section.links.map((link) => (
                <ListItem
                  disableGutters
                  key={link.title}
                  sx={{
                    pb: 0,
                    pt: 1
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      minWidth: 0,
                      mr: 0.5
                    }}
                  >
                    <MinusIcon color="primary" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Link
                        href={link.href}
                        color="textPrimary"
                        variant="subtitle2"
                      >
                        {link.title}
                      </Link>
                    )}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <Divider
        sx={{
          borderColor: (theme) => alpha(theme.palette.primary.contrastText, 0.12),
          my: 6
        }}
      />
      <Typography
        color="textSecondary"
        variant="caption"
      >
        © 2021 Jonathan Vargas. All Rights Reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
