import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src={props.src}
      {...props}
    />
  );
}

export default Logo;