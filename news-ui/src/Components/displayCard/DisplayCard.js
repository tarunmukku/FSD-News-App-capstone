import React from 'react';
import Button from 'react-bootstrap/Button';
import card from 'react-bootstrap/Card';


function DisplayCard({news}) {
 // const fs = require('fs');




  return  (
      <card className="card my-3" style={{ width: '18rem' }}>
        <card.Img variant="top" src={news.urlToImage} />
        <card.Body>
          <card.Title>{news.title}</card.Title>
   
          <Button variant="primary" href={news.url}>Read Now</Button>
        
        </card.Body>
      </card>
    );
  
}

export default DisplayCard