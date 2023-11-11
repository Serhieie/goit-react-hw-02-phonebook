import PropTypes from 'prop-types';
import ContactTableItem from '../ContactTableItem';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { Table, TableRow, TableHeader } from './ContactTable.styled';

export default function ContactTable({ getVisibleContacts, onDeleteContact }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader width="5%">#</TableHeader>
          <TableHeader width="38%">
            <BiSolidUser size={18} style={{ marginRight: '4px' }} />
            Name
          </TableHeader>
          <TableHeader width="42%">
            <BsTelephoneFill size={15} style={{ marginRight: '4px' }} />
            Phone Number
          </TableHeader>
          <TableHeader width="15%">Action</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {getVisibleContacts.map((contact, index) => (
          <ContactTableItem
            key={contact.id}
            contact={contact}
            index={index}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </tbody>
    </Table>
  );
}

ContactTable.propTypes = {
  getVisibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
