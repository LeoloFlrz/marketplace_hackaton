import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ModalFooter from 'react-bootstrap/esm/ModalFooter';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <ModalFooter className="bg-body-tertiary" data-bs-theme="dark">
       <Container> 
        <Navbar  className='justify-content-center'>
      
        <Col xs lg="2">
          <Nav.Item className="me-auto">
            <FontAwesomeIcon icon={faPhone} />
            Teléfono                   
          </Nav.Item>
        </Col>            
        <Col md="auto">
          <Nav.Item className="me-auto">            
           Araba Marketplace. <br/>Todos los derechos reservados.              
          </Nav.Item>
        </Col>
        <Col xs lg="2">
          <Nav.Item className="me-auto">
                        
            <FontAwesomeIcon icon={faEnvelope} />
                              Correo
          </Nav.Item>
        </Col>
      </Navbar>
    </Container>
</ModalFooter>  
    
  )
}

