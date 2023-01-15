import React from 'react';
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import card from 'react-bootstrap/Card';
import {Transaction} from '../../models/transaction'
import {  FaBookmark } from 'react-icons/fa';
import newService from '../../services/news.service'
import Alert from 'react-bootstrap/Alert';
function Card({news}) {
 // const fs = require('fs');
 const currentUser = JSON.parse(localStorage.getItem("currentUser"))

 let API_URL = 'http://localhost:8090/news/';
 const [show, setShow] = useState();
 const [NewsData, setNewsData] = useState([]);
 const [infoMessage,setinfoMessage]=useState(null);
 const [errorMessage,seterrorMessage]=useState(null);
 useEffect(() => {
      
  fetch(API_URL+'/user/'+currentUser.id)
    .then((response) => response.json())
    .then((NewsData) => {
      console.log(NewsData)
      setNewsData(NewsData);
    });

      if (NewsData !== null) {
       
          if (NewsData.findIndex(item => item.news.title === news.title) >-1){
            setShow(false)
          }
          else {setShow(true)}
        
      }

}
, [])


const  enroll=()=> {

  newService.createTransaction(new Transaction(currentUser.id, news)).then(data => {
    this.setState({infoMessage: 'You enrolled the course successfully.'});
     setShow(false);
  }, error => {
    this.setState({errorMessage: 'Unexpected error occurred.'});
  });
}



  return  (
      <card  className="card my-3" style={{ width: '18rem'  }}>

        <card.Img variant="top" src={news.urlToImage} />
        <card.Body>
          <card.Title>{news.title}</card.Title>
 
          <Button variant="primary" href={news.url}>Read Now</Button>
          <br/>
          <br/>

         
          {show&&
              <Button className="pull-right" variant="secondary" onClick={() => enroll()}>Favouriates</Button>  

           }



        </card.Body>
      </card>
    );
  
}

export default Card
