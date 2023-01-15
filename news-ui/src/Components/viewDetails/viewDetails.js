import React from 'react'

function viewDetails() {
  return (
    <Container>
    <Row className='justify-content-md-center py-4'>
      <Col xs lg='8'>
        <Button onClick={BackToHome}> Back To Home </Button>
      </Col>
    </Row>
  <Row className='justify-content-md-center my-5'>
    <Col sm={8}>
        {articles.map((news) => {
             {     
                return<ListGroup as="ul">
                  <ListGroup.Item as="li" active>
                    <b>Title :</b> {post.title}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <b> Author :</b> {post.author}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Description :</b> {post.description}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <b>Publication Date :</b> {post.publishedAt}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <b>Content :</b> {post.content}
                  </ListGroup.Item>
                  </ListGroup>
            } 
        })}
    </Col>
  </Row>
</Container>
  )
}

export default viewDetails