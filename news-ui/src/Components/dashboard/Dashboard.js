import React, { useEffect, useState } from 'react'
import {  Row, Col, Container } from "react-bootstrap";

import Card from '../card/Card'

function Dashboard() {

  const [NewsData, setNewsData] = useState([]);
  var url ='';
    useEffect(() => {
 //32055c205b954d36b413f8e1418c6107
 //435fbf24d4a14e7c90a56c7077571511
         url= 'https://newsapi.org/v2/top-headlines?country=in&apikey=32055c205b954d36b413f8e1418c6107'
    
  
     fetch(url)
        .then((response) => response.json())
        .then((NewsData) => {
          setNewsData(NewsData.articles);
        });        
    }
    , [])

  return (
    <Container className="container-fluid" >
     <Row >
        {NewsData.map((news,index) => (
            <Col key={index} xs={15} md={4} lg={3}>

              <Card news={news}  />
              </Col>
        ))}
      </Row>
    </Container>

  );
}

export default Dashboard