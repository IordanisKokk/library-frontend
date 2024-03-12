import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import './App.css';
import Box from '@mui/system/Box';
import CustomAppBar from './components/CustomAppBar.tsx';
import BookList from './views/BookList.tsx';
import AuthorList from './views/AuthorList.tsx';
import GenreList from './views/GenreList.tsx';
import GenreDetails from './views/GenreDetails.tsx'
import BookDetails from './views/BookDetails.tsx';
import AuthorDetails from './views/AuthorDetails.tsx';
import Home from './views/Home.tsx';
import Login from './components/Login.tsx'

export default function App() {
  const [selectedPage, setSelectedPage] = useState('Books'); // Set default page

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  return (
    <Router>
      <CustomAppBar onPageChange={handlePageChange} />
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Routes>
          {/* <MainContent selectedPage={selectedPage} /> */}
          <Route path="/books" element={<BookList/>} />
          <Route path="/book/:id" element={<BookDetails/>} />
          <Route path="/author/:id" element={<AuthorDetails/>} />
          <Route path="/genres" element={<GenreList/>} />
          <Route path="/genre/:id" element={<GenreDetails/>} />
          <Route path="/authors" element={<AuthorList/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Login />
      </Box>
    </Router>
  );
}
