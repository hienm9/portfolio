import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
      setFormState({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='contact'>
      <h2>Contact me</h2>

      <h5 className='contact-info'>
      Email:  <a className="my-email" href="mailto:hienm9@gmail.com"> hienm9@gmail.com</a><br />
      <a href="https://www.linkedin.com/in/hien-mai-a765a3126/">LinkedIn</a><br />
      <a href="https://github.com/hienm9">GitHub</a>
      </h5>

      <h5>OR use the form below</h5>

      <Form id="contact-form" onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email address:</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" defaultValue={email} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <label htmlFor="message">Message:</label>
          <Form.Control as="textarea" placeholder="Message" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button className="button" type="submit">Submit</Button>
      </Form>

    </section>
  );
}

export default ContactForm;