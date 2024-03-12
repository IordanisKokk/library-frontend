import { Avatar, Box, Card, ImageList, ImageListItem, List, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageComponent from '../components/ImageComponent.tsx';
import { ImageListComponent } from '../components/ImageListComponent.tsx'

export default function BookList() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const books = await fetch('http://localhost:3000/catalog/books')
                    .then((res) => res.json());
                setData(books);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    const handleBookClick = (id: string, book) => {
        navigate(`/book/${book._id}`, { state: { book } });
    }

    // Render JSX based on the data
    return (
        <Box sx={{
            // marginTop: '1rem',
            width: '100%%',
            // display: 'flex',
            // justifyContent: 'center',
            // alignContent: 'center'
        }}>
            {data && (
                <ImageListComponent handleClick={handleBookClick} data={data} itemType={'book'}/>
            )}
        </Box>
    );
}
