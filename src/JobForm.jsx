import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    experience: '',
    location: '',
    description: '',
    salary: '',
    deadline: '',
    type: '',
    creation_date: '',
    company_id: null,
  });

  const navigate = useNavigate(); // For redirection after submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    fetch('http://localhost:3001/api/add-jobs', {
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
      <label>title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

      <label>Experience:</label>
      <input
        type="text"
        name="experience"
        value={formData.experience}
        onChange={handleInputChange}
        required
      />

      <label>location:</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        required
      />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <label>salary:</label>
      <input
        type="text"
        name="salary"
        value={formData.salary}
        onChange={handleInputChange}
      />

      <label>deadline:</label>
      <textarea
        name="deadline"
        value={formData.deadline}
        onChange={handleInputChange}
      />

        <label>Type:</label>
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleInputChange}
      />

      <label>creation_date:</label>
      <input
        type="text"
        name="creation_date"
        value={formData.creation_date}
        onChange={handleInputChange}
      />

      <label>company_id:</label>
      <input
        type="text"
        name="company_id"
        value={formData.company_id}
        onChange={handleInputChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;

