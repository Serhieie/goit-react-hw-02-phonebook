import PropTypes from 'prop-types';
import Filter from 'components/Filter';
import ContactTableItem from '../ContactListItem';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import {
  ContactListDiv,
  Table,
  TableRow,
  TableHeader,
  Icon,
} from './ContactTable.styled';

export default function ContactTable({
  filter,
  onChangeFilter,
  getVisibleContacts,
  onDeleteContact,
}) {
  return (
    <ContactListDiv>
      <Icon />
      <Filter forFilter={filter} onChange={onChangeFilter} />
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
    </ContactListDiv>
  );
}

ContactTable.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  getVisibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
