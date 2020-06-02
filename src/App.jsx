import React, { useState, useEffect } from 'react'
import Form from './components/Form.jsx'

const App = () => {

  const [Artist, setArtist] = useState('');
  const [Word, setWord] = useState([]);
  const [Info, setInfo] = useState({});

  return (
    <>
      <Form
        setInfo={setInfo}
      />
    </>
  )
}

export default App
