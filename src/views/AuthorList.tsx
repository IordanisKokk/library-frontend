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
        const authors = await fetch('http://localhost:3000/catalog/authors')
          .then((res) => res.json());
        setData(authors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  function handleAuthorClick(_id: string, author): void {
    console.log(author.first_name, author.last_name);
    console.log(author)
    navigate(`/author/${author._id}`, { state: { author } });
  }

  // Render JSX based on the data
  console.log()
  return (
    <Box>
      {data && (
          <ImageListComponent handleClick={handleAuthorClick} data={data} itemType={'author'} />
      )}
    </Box>
  );
}
