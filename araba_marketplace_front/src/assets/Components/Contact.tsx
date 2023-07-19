import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Contacto.css';

const Contact = () => {
  
  return (
    <div  className='contacto'>
      <div className='formcontact'>
        <h1><strong>Contacto form</strong></h1>
          <p>Contact us</p>
          <p>¡We will contact you! ✉️ </p>
      </div>
 <Form className='formBasicEmail' action="https://formspree.io/f/xbjvlgnq"
  method="POST">
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@mail.com" required/>
        <Form.Text className="text-muted">         
        </Form.Text>
      </Form.Group>

      <label className='message'>
    <textarea className='message' name="message" placeholder='Your message'></textarea>
      </label>
      <br />
      <Button variant="dark" type="submit" id='enviado'>
        <strong>Submit 💾</strong>
      </Button>
  </Form>
    </div>

   )
}

export default Contact

