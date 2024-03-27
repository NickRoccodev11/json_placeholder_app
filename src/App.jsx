//hooks
import { useState, useEffect } from 'react';
//components
import ContactList from './ContactList';
import DisplayContact from './DisplayContact';

const API_URL = 'https://jsonplaceholder.typicode.com/users'
function App() {
  const [contacts, setContacts] = useState([])
  const [selectedRowId, setSelectedRowId] = useState("")
  console.log(selectedRowId)
  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch(API_URL);
      const jsonData = await res.json();
      console.log(jsonData)
      setContacts(jsonData)
    }
    fetchContacts();
  }, [])
  return (
    <>
      <ContactList
        setSelectedRowId={setSelectedRowId}
        contacts={contacts}
      />
      <DisplayContact
        selectedRowId={selectedRowId}
        contacts={contacts}
      />
    </>
  )
}

export default App
