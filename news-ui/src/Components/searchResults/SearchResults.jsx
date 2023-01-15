import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {  Row, Col, Container } from "react-bootstrap";

import Card from '../card/Card'
function SearchResults() {
  const [NewsData, setNewsData] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
     //435fbf24d4a14e7c90a56c7077571511
    fetch('https://newsapi.org/v2/everything?q='+ query +'&apiKey=32055c205b954d36b413f8e1418c6107')
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
export default SearchResults