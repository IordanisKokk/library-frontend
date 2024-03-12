import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'

interface Props {
  itemId: string;
}

const ImageComponent = ({itemId}) => {

  const hasImage = () => {
    return false;
  }

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     margin: 0,
    //     maxWidth: '200px',
    //     maxHeight: '300px',
    //     border: 'solid 1px #f5f5f5',
    //     overflow: 'hidden',
    //     position: 'relative',
    //     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    //     borderRadius: '0.5rem',
    //   }}
    // >
      // {hasImage() ? (
      //   <img
      //     style={{ borderRadius: '0.5rem', width: '100%', height: '100%', objectFit: 'cover' }}
      //     src='https://picsum.photos/200/300'
      //     alt="Placeholder"
      //   />
      // ) : (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
          style={{ backgroundColor: 'lightgray' }}
        />
        // )}
    // </Box>
  )
}

export default ImageComponent