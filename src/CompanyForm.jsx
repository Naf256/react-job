import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    total_post: '',
    tagline: '',
    description: '',
    contact_email: '',
    contact_phone: '',
    logo: null,
  });

  const navigate = useNavigate(); // For redirection after submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      logo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data for submission
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    // Submit the form data to the server
    fetch('http://localhost:3001/companys', {
      method: 'POST',
      body: form,
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the CompanyList component after successful submission
          navigate('/company-list');
        } else {
          console.error('Submission failed.');
        }
      })
      .catch((error) => {
        console.error('Error during submission:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      <label>Total Posts:</label>
      <input
        type="number"
        name="total_post"
        value={formData.total_post}
        onChange={handleInputChange}
      />

      <label>Tagline:</label>
      <input
        type="text"
        name="tagline"
        value={formData.tagline}
        onChange={handleInputChange}
      />

      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <label>Contact Email:</label>
      <input
        type="email"
        name="contact_email"
        value={formData.contact_email}
        onChange={handleInputChange}
      />

      <label>Contact Phone:</label>
      <input
        type="text"
        name="contact_phone"
        value={formData.contact_phone}
        onChange={handleInputChange}
      />

      <label>Logo:</label>
      <input type="file" name="logo" onChange={handleFileChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyForm;

