import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Contacto.css';

const Contact = () => {
  
  return (
    <div  className='contacto'>
 <Form className='formBasicEmail' action="https://formspree.io/f/xbjvlgnq"
  method="POST">
     
      <div className='formcontact'>
        <h1><strong>Contact us</strong></h1>
          <p>¡We will contact you! ✉️ </p>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="name" placeholder="¿What's your name?" required/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@mail.com" required/>
        <Form.Text className="text-muted">         
        </Form.Text>
      </Form.Group>

    <label className='message'>
    <textarea className='message' name="message" placeholder='Write your message here'></textarea>
    </label>
      <br />
      <Button variant="dark" type="submit" id='enviado'>
        <strong>Submit</strong>
      </Button>
  </Form>
    </div>

   )
}

export default Contact

