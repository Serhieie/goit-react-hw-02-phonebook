import { FieldStyled, LabelStyled } from './ContactFormInput.styled';
import { LiaUserEditSolid } from 'react-icons/lia';
import { FiPhoneMissed } from 'react-icons/fi';

export default function Input() {
  return (
    <>
      <LabelStyled htmlFor="name">
        <LiaUserEditSolid />
        Name
      </LabelStyled>
      <FieldStyled type="text" name="name" placeholder="Enter name" />
      <LabelStyled htmlFor="number">
        <FiPhoneMissed size={18} />
        Phone Number
      </LabelStyled>
      <FieldStyled type="tel" name="number" placeholder="Enter phone number" />
    </>
  );
}
