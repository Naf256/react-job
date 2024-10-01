import React, { useState, useEffect } from 'react';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch all companies from the API
    fetch('http://localhost:3001/api/companys')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'success') {
          setCompanies(data.data);
        }
      })
      .catch((error) => console.error('Error fetching company data:', error));
  }, []);

  return (
    <div>
      <h2>All Companies</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Posts</th>
            <th>Tagline</th>
            <th>Description</th>
            <th>Contact Email</th>
            <th>Contact Phone</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.email}</td>
              <td>{company.total_post}</td>
              <td>{company.tagline}</td>
              <td>{company.description}</td>
              <td>{company.contact_email}</td>
              <td>{company.contact_phone}</td>
              <td>
                {company.logo ? (
                  <img
                    src={`data:image/png;base64,${company.logo}`}
                    alt="Company Logo"
                    style={{ width: '50px', height: '50px' }}
                  />
                ) : (
                  'No Logo'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;

