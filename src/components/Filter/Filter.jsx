import React from 'react';
import { TodoFilterInput, Label } from './Filter.styled';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <Label>
      <TodoFilterInput
        placeholder="Enter name for filter"
        type="text"
        filter={value}
        onChange={event => {
          onChange(event);
        }}
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
