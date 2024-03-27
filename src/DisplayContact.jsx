
const DisplayContact = ({ selectedRowId, contacts }) => {
  return (
    <>
      {selectedRowId && contacts.map(contact => {
        return contact.id === selectedRowId ? <div id="display">
          <h2>{contact.name}</h2>
          <p><span>username:</span> {contact.username}</p>
          <p><span>company:</span>  {contact.company.name}</p>
          <p><span>website:</span>  {contact.website}</p>
          <p><span>address:</span>  {contact.address.suite}, {contact.address.street}, {contact.address.city}.</p>
        </div> : null

      })
      }
    </>
  )
}

export default DisplayContact