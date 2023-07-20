import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ModalFooter from 'react-bootstrap/esm/ModalFooter';
import Col from 'react-bootstrap/Col';
import {faWhatsapp,faTelegram} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <ModalFooter className="bg-body-tertiary" data-bs-theme="dark">
       <Container> 
        <Navbar  className='justify-content-center'>
      
        <Col xs lg="2">
          <Nav.Item className="me-auto">
            <FontAwesomeIcon icon={faPhone} />            
          </Nav.Item>
        </Col>       
        <Col xs lg="2">
          <Nav.Item className="me-auto">
            <FontAwesomeIcon icon={faEnvelope}className="icono"  />
          </Nav.Item>
        </Col>     
        <Col md="auto"  xs={6}>
          <Nav.Item className="me-auto araba">            
           Araba Marketplace.              
          </Nav.Item>
        </Col>
        <Col xs lg="2">
          <Nav.Item className="me-auto">
            <FontAwesomeIcon icon={faWhatsapp} className="icono" />        
          </Nav.Item>
        </Col>
        <Col xs lg="2">
          <Nav.Item className="me-auto">
            <FontAwesomeIcon icon={faTelegram} className="icono" />        
          </Nav.Item>
        </Col>
      </Navbar>
    </Container>
</ModalFooter>  
    
  )
}

