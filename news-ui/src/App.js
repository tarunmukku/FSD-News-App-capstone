import React,{useState}  from 'react'
import Dashboad from './Components/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Login from './Components/login/Login';
import Logout from './Components/logout/Logout';
import  ProtectedRoute  from './Components/protectedRoute/ProtectedRoute'
import  ReadNow  from './Components/readNow/ReadNow';
import Register from './Components/register/Register';
import SearchResults from './Components/searchResults/SearchResults'
function App(){

  const [query, setQuery] = useState('');
    
    return (
      
      <div>
    <Header query={query} setQuery={setQuery}  />
      <Router>
      
        <Routes>
        <Route exact path="/" element={<Navigate replace to='/dashboard' />} />
        <Route path="/search" element={ <ProtectedRoute> <SearchResults /> </ProtectedRoute> }/>
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboad query={query} setQuery={setQuery}/> </ProtectedRoute> }/>
       <Route path="/readnow" element={ <ProtectedRoute> <ReadNow /> </ProtectedRoute> }/>
       <Route path="/logout" element={ <ProtectedRoute> <Logout /> </ProtectedRoute> }/>
       <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        </Routes>
       
      </Router>
      <Footer/>
    </div>
    );
  
  
}
export default App;
