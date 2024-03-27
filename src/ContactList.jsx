

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
              <tr
                className="row"
                key={idx}
                id={contact.id}
                onMouseEnter={()=>{
                  setSelectedRowId(contact.id)
                }}
              >
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ContactList