// src/pages/BookDetails.js
import { List, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function AuthorDetails() {
    const { id } = useParams();
    const location = useLocation();
    const { state: { genre } } = location;
    const [genreDetails, setGenreDetails] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/catalog/genre/${id}`)
                .then((res) => res.json());
                // const author_details = await fetch(`http://localhost:3000/catalog/author/${id}`);
                setGenreDetails(response);
                console.log(response)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    // const authorDetails =  await fetchData();

    return (
        <div>
            <h2>{genre.name}</h2>
            <p>author ID: {id}</p>
            {/* Include more details here based on your author object */}
            {genreDetails && 
            <List>
                {genreDetails.books.map((book) => 
                    <Typography key={book._id}>"{book.title}"</Typography>
                )}
            </List>
            }
        </div>
    );
};

export default AuthorDetails;
