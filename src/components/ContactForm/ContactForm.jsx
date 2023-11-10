import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Formik } from 'formik';
import { schema } from 'constants';
import { succesMessage, nameCheckerError } from '../../helpers/notiflix';
import Input from '../ContactFormInput';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {
  FormStyled,
  ButtonStyled,
  ErrMsg,
  H1,
  ErrorContainer,
} from './ContactForm.styled';
import normalizePhoneNumber from '../../helpers/numberNormalize';
import normalizeName from 'helpers/nameNormalize';

const initialValues = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  handleChange = event => {
    this.setState({
      name: event.name,
      number: event.number,
    });
  };

  handleSubmit = (event, { resetForm }) => {
    const { name, number } = event;

    let someNum = normalizePhoneNumber(number);
    let normName = normalizeName(name);
    const isNameExists = this.props.contacts.some(
      contact => contact.name.toLowerCase() === normName.toLowerCase()
    );
    if (isNameExists) {
      return nameCheckerError();
    }
    this.props.onSubmit(normName, someNum);
    succesMessage();
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormStyled autoComplete="off">
          <H1>Add Contact Field</H1>
          <Input />
          <ErrorContainer>
            <ErrMsg name="name" component="div" />
            <ErrMsg name="number" component="div" />
          </ErrorContainer>
          <ButtonStyled type="submit">
            Add Contact <AiOutlineUserAdd />
          </ButtonStyled>
        </FormStyled>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
