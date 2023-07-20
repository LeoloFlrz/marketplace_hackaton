import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-center" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Nav.Item className="me-auto justify-content-center footer">
            Ar@aba
            
          </Nav.Item>
       
      </Container>
    </Navbar>
  )
}

