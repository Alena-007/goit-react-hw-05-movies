import { useState } from 'react';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (request.trim() === '') {
      return toast.warn('Enter your request in the field');
    }

    onSubmit(request);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="request"
          value={request}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};
