import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarForm,
  SearchbarButton,
  SearchbarInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit, value }) => {
  const [request, setRequest] = useState(value);

  const handleChange = e => {
    setRequest(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (request.trim() === '') {
      return toast.warn('Enter your request in the field');
    }

    onSubmit(request);
    setRequest(request);
  };

  return (
    <div>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarInput
          name="request"
          value={request}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
        />
        <SearchbarButton type="submit">
          <span>Search</span>
        </SearchbarButton>
      </SearchbarForm>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};
