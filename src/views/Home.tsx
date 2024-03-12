import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

interface Props { }

const Home = (props: Props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const indexData = await fetch('http://localhost:3000/catalog/')
                    .then((res) => res.json());
                setData(indexData);
                console.log(indexData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect 

    return (
        data && (

            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Total Copies</TableCell>
                                <TableCell align="right">Available Copies</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow
                                    key={0}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        All Books
                                    </TableCell>
                                    <TableCell align="right">{data.book_count}</TableCell>
                                    <TableCell align="right">{data.book_instance_count}</TableCell>
                                    <TableCell align="right">{data.available_book_instance_count}</TableCell>
                                </TableRow>
                                <TableRow
                                    key={1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        TODO ADD GENRES
                                    </TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                </TableRow>
                                <TableRow
                                    key={2}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        TODO ADD GENRES
                                    </TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                </TableRow>
                                <TableRow
                                    key={3}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        TODO ADD GENRES
                                    </TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                    <TableCell align="right">Cell</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        )
    )
}

export default Home