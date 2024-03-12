import { Box, ImageList, ImageListItem, List, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImageComponent from '../components/ImageComponent.tsx';
import { useNavigate } from 'react-router-dom';
import { ImageListComponent } from '../components/ImageListComponent.tsx';

export default function BookList() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genres = await fetch('http://localhost:3000/catalog/genres')
          .then((res) => res.json());
        setData(genres);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleGenreClick = (id: string, genre) => {
    navigate(`/genre/${genre._id}`, { state: { genre } });
  }

  // Render JSX based on the data
  return (
    <Box>
      {data && (
        <ImageListComponent handleClick={handleGenreClick} data={data} itemType={'genre'}/>
      )}
    </Box>
  );
}
