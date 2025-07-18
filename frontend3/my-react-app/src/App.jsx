import React from 'react';

function App() {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f9',
    padding: '40px',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const logoStyle = {
    fontSize: '32px',
    color: '#007acc',
    fontWeight: 'bold',
  };

  const taglineStyle = {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#1e9d6f',
  };

  const card = {
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const urlStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0056b3',
  };

  const label = {
    fontWeight: 'bold',
    color: '#444',
  };

  const ulStyle = {
    paddingLeft: '20px',
    marginTop: '10px',
  };

  const liStyle = {
    marginBottom: '10px',
  };

  // Sample data
  const urlStats = [
    {
      shortUrl: 'https://aff.md/xyz123',
      createdAt: '2025-07-15T10:00:00',
      expiresAt: '2025-07-31T10:00:00',
      totalClicks: 15,
      clicks: [
        {
          timestamp: '2025-07-16T12:30:00',
          source: 'Telegram',
          location: 'Hyderabad, India',
        },
        {
          timestamp: '2025-07-17T09:15:00',
          source: 'WhatsApp',
          location: 'Vijayawada, India',
        },
      ],
    },
    {
      shortUrl: 'https://aff.md/abc789',
      createdAt: '2025-07-12T14:45:00',
      expiresAt: '2025-08-01T14:45:00',
      totalClicks: 9,
      clicks: [
        {
          timestamp: '2025-07-14T16:00:00',
          source: 'LinkedIn',
          location: 'Chennai, India',
        },
      ],
    },
  ];

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <div style={logoStyle}>AFFORDMED®</div>
        <div style={taglineStyle}>Technology, Innovation & Affordability</div>
        <h2 style={{ marginTop: '30px', color: '#333' }}>URL Shortener Statistics</h2>
      </div>

      {urlStats.map((url, index) => (
        <div key={index} style={card}>
          <div style={urlStyle}>
            <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
              {url.shortUrl}
            </a>
          </div>
          <p><span style={label}>Created At:</span> {new Date(url.createdAt).toLocaleString()}</p>
          <p><span style={label}>Expires At:</span> {new Date(url.expiresAt).toLocaleString()}</p>
          <p><span style={label}>Total Clicks:</span> {url.totalClicks}</p>

          <div style={label}>Click Details:</div>
          <ul style={ulStyle}>
            {url.clicks.map((click, i) => (
              <li key={i} style={liStyle}>
                📅 <strong>Time:</strong> {new Date(click.timestamp).toLocaleString()} <br />
                🔗 <strong>Source:</strong> {click.source} <br />
                🌍 <strong>Location:</strong> {click.location}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
