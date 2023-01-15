import React, { useEffect, useState } from 'react'
import {  Row, Col, Container } from "react-bootstrap";
import DisplayCard from '../displayCard/DisplayCard'

export default function ReadNow() {
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  let API_URL = 'http://localhost:8090/news/';
  const [NewsData, setNewsData] = useState([]);
    useEffect(() => {
      
      fetch(API_URL+'/user/'+currentUser.id)
        .then((response) => response.json())
        .then((NewsData) => {
          console.log(NewsData)
          setNewsData(NewsData);
        });
    
    }
    , [])

  return (
    <Container className="container-fluid" >
     <Row >
        {NewsData.map((news,index) => (
            <Col key={index} xs={15} md={4} lg={3}>

              <DisplayCard news={news.news}  />
              </Col>
        ))}
      </Row>
    </Container>

  );
}
