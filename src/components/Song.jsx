import React from 'react'

const Song = ({Word}) => {
  if(Word.length === 0) return null;
  return (
    <>
      <h2>Letra de la Cancion</h2>
      <p className="letra">{Word}</p>
    </>
  )
}

export default Song
