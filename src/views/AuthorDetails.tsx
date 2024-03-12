// src/pages/BookDetails.js
import { Box, List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ImageComponent from '../components/ImageComponent.tsx';
import { ImageListComponent } from '../components/ImageListComponent.tsx';

function AuthorDetails() {
    const { id } = useParams();
    const location = useLocation();
    const { state: { author } } = location;
    const [authorDetails, setAuthorDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const author_details = await fetch(`http://localhost:3000/catalog/author/${id}`)
                    .then((res) => res.json());
                setAuthorDetails(author_details);

                // Log inside the fetch block
                console.log(author_details);
                console.log(author_details.author_books);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Render author details if available */}
            {author && (
                <>
                    <Typography variant='h3'>{author.first_name} {author.last_name}</Typography>
                    <ImageComponent />
                    <Typography variant='body1'>author ID: {id}</Typography>

                    {/* Render additional details if authorDetails is available */}
                    {authorDetails && (
                        <>
                            <Typography variant='h6'>Books by author</Typography>
                            <List>
                                {authorDetails.author_books.map((book) => (
                                    <Typography key={book._id}>"{book.title}"</Typography>
                                ))}
                            </List>

                            <ImageListComponent
                                handleClick={() => console.log('click')}
                                data={authorDetails?.author_books ?? []}
                                itemType={'book'}
                            />
                        </>
                    )}
                </>
            )}
        </Box>
    );
}

export default AuthorDetails;
