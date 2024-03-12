import { ImageList, Box, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import ImageComponent from './ImageComponent.tsx'

interface Props {
  handleClick: (id, item) => void,
  data: any,
  itemType: string
}
/**
 * @TODO IMPLEMENT GENERIC COMPONENT FOR IMAGE LISTS
 * @param props 
 * @returns 
 */

export const ImageListComponent = ({ handleClick, data, itemType }) => {

  const renderText = (item, itemType:string) => {
    console.log(itemType)
    switch (itemType) {
      case 'book':
        return (
          <>
            <Typography variant='subtitle2' fontSize={'10pt'}>{item.title}</Typography>
            {item.author && (
              <Typography variant='body1' fontSize={'7pt'}>by {item.author.first_name} {item.author.last_name}</Typography>
            )}
          </>
        );
    
      case 'author':
        return (
          <Typography variant='subtitle2' fontSize={'10pt'}>{item.first_name} {item.last_name}</Typography>
          );
      case 'genre':
          return (
            <Typography variant='subtitle2' fontSize={'10pt'}>{item.name}</Typography>
          )
      }
  }

  return (
    <ImageList
      sx={{ width: '100%', height: '100%' }}
      // variant="quilted"
      cols={4}
      rowHeight={150}
    >
      {data && (
        data.map((item) => (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '1.5rem 0',
            padding: '0.5rem',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              cursor: 'pointer',
            },
          }}
            onClick={() => handleClick(item._id, item)}
            key={item._id}
          >
            <ImageListItem cols={1} rows={2}>
              <ImageComponent bookId={item._id} />
            </ImageListItem>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',

            }}>
              {renderText(item, itemType)}
            </Box>
          </Box>
        ))
      )}
    </ImageList>
  )
}
