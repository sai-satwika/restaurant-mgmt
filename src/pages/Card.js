import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from 'public/img1.jpg'

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's contents.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;