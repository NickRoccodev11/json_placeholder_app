const ContactRow = ({ contact, setSelectedRowId }) => {
  return (
    <tr
      className="row"
      id={contact.id}
      onMouseEnter={() => setSelectedRowId(contact.id)}
      onMouseLeave={() => setSelectedRowId('')}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr >
  )
}

export default ContactRow