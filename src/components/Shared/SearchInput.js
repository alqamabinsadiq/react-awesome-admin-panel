import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
const Search = Input.Search;

const SearchInput = ({ placeholder, onSearch }) => {
  return (
    <Search
      placeholder={placeholder}
      onSearch={onSearch}
      enterButton
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
}

export { SearchInput }