// Import libraries for making a component
import React from 'react';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <div style={viewStyle}>
      <div style={textStyle}>{props.headerText}</div>
    </div>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
