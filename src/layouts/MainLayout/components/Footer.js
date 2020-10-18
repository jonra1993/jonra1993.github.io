import React from 'react';
import clsx from 'clsx';
import {
   AppBar,
   Container,
   Button,
   Divider,
   Toolbar,
   Hidden,
   IconButton,
   Link,
   Drawer,
   Typography,
   ListItem,
   ListItemIcon,
   ListItemText,
   makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.primary.paleBlue,
      //position:"static",
      marginBottom:0
   }
}));

const Footer = (props) => {
   const {className, rest} = props;
   const classes = useStyles();

   if (props.data) {
      var networks = props.data.social.map(function (network) {
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
   }

   return (
      <AppBar
         className={clsx(classes.root, className)}
         //color="default"
         {...rest}
      >
         <Toolbar>
            <Typography variant="body1" color="primary">
               &copy; 2019 Gistia
             </Typography>
            <div className="row">
               <div className="twelve columns">
                  <ul className="social-links">
                     {networks}
                  </ul>

                  <ul className="copyright">
                     <li>Design by <a title="Styleshout" href="https://www.linkedin.com/in/jonathan-ramiro-vargas-suasnavas-a29752b5/">Jonathan Vargas</a></li>
                  </ul>

               </div>
               <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
         </Toolbar>
      </AppBar>
   )
}


export default Footer;
