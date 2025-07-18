import React, { useState } from 'react';

const App = () => {
  const [url, setUrl] = useState('');
  const [expiry, setExpiry] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const isValidUrl = (string) => {
    const res = string.match(/(https?:\/\/[^\s]+)/g);
    return res !== null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      alert('Please enter a valid URL.');
      return;
    }
    if (!Number.isInteger(+expiry) || +expiry <= 0) {
      alert('Expiry must be a positive integer.');
      return;
    }

    const shortUrl = `short.ly/${Math.random().toString(36).substring(2, 8)}`;
    const expiryDate = new Date(Date.now() + expiry * 1000).toLocaleString();
    setShortenedUrls([...shortenedUrls, { shortUrl, expiryDate }]);
    setUrl('');
    setExpiry('');
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Expiry in seconds"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />
        <button type="submit">Shorten URL</button>
      </form>
      <h2>Shortened URLs</h2>
      <ul>
        {shortenedUrls.map((item, index) => (
          <li key={index}>
            {item.shortUrl} (Expires on: {item.expiryDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;