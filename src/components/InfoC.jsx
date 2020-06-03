import React from 'react'

const InfoC = ({Info}) => {
  //console.log(Info);
  if(Object.keys(Info).length === 0) return null;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion del Artista
      </div>
      <div className="card-body">
        <img src={Info.strArtistThumb} alt="tumb"/>
        <p className="card-text">Genero: {Info.strGenre}</p>
        <h2 className="card-text text-center">Biografia</h2>
        <p className="card-text">{Info.strBiographyES}</p>
        <p className="card-text">
          <a href={`http://${Info.strFacebook}`} target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a href={`http://${Info.strTwitter}`} target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a href={Info.strLastFMChart} target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  )
}

export default InfoC
