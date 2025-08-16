import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Demo() {
  return (
    <div>
     
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./first.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>


         <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./first.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>
     
    </div>
  );
}

export default Demo;
