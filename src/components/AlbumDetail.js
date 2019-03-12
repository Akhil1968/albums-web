import React from 'react';

import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <div style={thumbnailContainerStyle}>
          <img
            alt=""
            style={thumbnailStyle}
            src={thumbnail_image }
          />
        </div>
        <div style={headerContentStyle}>
          <div style={headerTextStyle}>{title}</div>
          <div>{artist}</div>
        </div>
      </CardSection>
   
      <CardSection>
        <img alt=""
          style={ imageStyle }
          src={ image }
        />
      </CardSection>
      <CardSection>
        <a  href={url}>
          Buy Now
        </a>
      </CardSection>
    
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
