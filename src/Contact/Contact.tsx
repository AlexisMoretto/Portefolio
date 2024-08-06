import './Contact.scss'
import { useState } from 'react'

function Contact () {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Contact