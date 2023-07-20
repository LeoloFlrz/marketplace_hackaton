import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Contacto.css';
import logo from '../assets/Logo_optionOne.svg';

const Contact = () => {

  return (
    <div className='contacto'>
      <Form className='formBasicEmail' action="https://formspree.io/f/xbjvlgnq"
        method="POST">

        <div className='formcontact'>
        <img   src={logo}
               width="30%"
               height=""
               className="d-inline-block align-top"
            />
          <h1><strong>Contact us</strong></h1>

        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Control type="name" placeholder="¿What's your name?" required />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="example@mail.com" required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <label className='message'>
          <textarea className='message' name="message" placeholder='Write your message here'></textarea>
        </label>
              <br />
        <Button variant="light" type="submit" id='enviado'>
          <strong>Submit</strong>
        </Button>
        <p>¡We will contact you! ✉️ </p>
      </Form>
    </div>
  )
}

export default Contact

