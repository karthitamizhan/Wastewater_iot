import "./Navbars.css";
// import image from '../image/vivasaya.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbars() {
  return (
    <>
        <div className="main">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me">
            <Nav.Link className="a" href="location1">location1</Nav.Link>
            <Nav.Link className="a" href="location2">Location2</Nav.Link>
            <Nav.Link className="a" href="location3">location3</Nav.Link>      

          </Nav>
        </Container>
      </Navbar> 
      </div>
    </>
  );
}

export default Navbars;