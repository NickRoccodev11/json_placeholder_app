import ContactRow from "./ContactRow";

const ContactList = ({ contacts, setSelectedRowId }) => {
  return (
    <table className="table">
      <thead>
        <tr className="header">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map((contact, idx) => {
            return (
              <ContactRow
                key={idx}
                contact={contact}
                setSelectedRowId={setSelectedRowId}
              />
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ContactList